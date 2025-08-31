class MCQTestGenerator {
    constructor() {
        this.questions = [];
        this.originalQuestions = []; // Store original order for reference
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.flaggedQuestions = new Set();
        this.testStarted = false;
        this.results = [];
        this.initializeElements();
        this.attachEventListeners();
        this.loadSampleData();
    }

    initializeElements() {
        // Input section elements
        this.mcqInput = document.getElementById('mcq-input');
        this.generateTestBtn = document.getElementById('generate-test-btn');
        this.loadSampleBtn = document.getElementById('load-sample-btn');
        this.parseError = document.getElementById('parse-error');

        // Section elements
        this.inputSection = document.getElementById('input-section');
        this.testSection = document.getElementById('test-section');
        this.resultsSection = document.getElementById('results-section');

        // Test interface elements
        this.questionCounter = document.getElementById('question-counter');
        this.progressFill = document.getElementById('progress-fill');
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.submitTestBtn = document.getElementById('submit-test-btn');
        this.answeredCount = document.getElementById('answered-count');
        this.flagQuestionBtn = document.getElementById('flag-question-btn');
        this.flagText = document.getElementById('flag-text');

        // Results elements
        this.scorePercentage = document.getElementById('score-percentage');
        this.scoreText = document.getElementById('score-text');
        this.scoreDescription = document.getElementById('score-description');
        this.correctCountElement = document.getElementById('correct-count');
        this.incorrectCountElement = document.getElementById('incorrect-count');
        this.flaggedCountElement = document.getElementById('flagged-count');
        this.detailedResultsContainer = document.getElementById('detailed-results-container');
        this.retakeTestBtn = document.getElementById('retake-test-btn');
        this.newTestBtn = document.getElementById('new-test-btn');
        this.exportResultsBtn = document.getElementById('export-results-btn');

        // Modal elements
        this.submitModal = document.getElementById('submit-modal');
        this.cancelSubmitBtn = document.getElementById('cancel-submit-btn');
        this.confirmSubmitBtn = document.getElementById('confirm-submit-btn');
        this.unansweredWarning = document.getElementById('unanswered-warning');
        this.unansweredCount = document.getElementById('unanswered-count');
    }

    attachEventListeners() {
        this.generateTestBtn.addEventListener('click', () => this.generateTest());
        this.loadSampleBtn.addEventListener('click', () => this.loadSampleQuestions());
        this.prevBtn.addEventListener('click', () => this.navigateQuestion(-1));
        this.nextBtn.addEventListener('click', () => this.navigateQuestion(1));
        this.submitTestBtn.addEventListener('click', () => this.showSubmitModal());
        this.flagQuestionBtn.addEventListener('click', () => this.toggleFlag());
        this.retakeTestBtn.addEventListener('click', () => this.retakeTest());
        this.newTestBtn.addEventListener('click', () => this.startNewTest());
        this.exportResultsBtn.addEventListener('click', () => this.exportResults());
        this.cancelSubmitBtn.addEventListener('click', () => this.hideSubmitModal());
        this.confirmSubmitBtn.addEventListener('click', () => this.submitTest());

        // Close modal when clicking outside
        this.submitModal.addEventListener('click', (e) => {
            if (e.target === this.submitModal) {
                this.hideSubmitModal();
            }
        });
    }

    loadSampleData() {
        this.sampleQuestions = [
            {
                question: "Which system call creates a new process in UNIX?",
                options: ["fork", "exec", "create", "init"],
                correct: 0
            },
            {
                question: "The OS component that decides which process runs next is:",
                options: ["Dispatcher", "Scheduler", "Memory manager", "File manager"],
                correct: 1
            },
            {
                question: "PCB stands for:",
                options: ["Process Control Block", "Program Control Buffer", "Process Code Backup", "None"],
                correct: 0
            }
        ];
    }

    loadSampleQuestions() {
        const sampleText = `1. Which system call creates a new process in UNIX?
- fork*
- exec
- create
- init

2. The OS component that decides which process runs next is:
- Dispatcher
- Scheduler*
- Memory manager
- File manager

3. PCB stands for:
- Process Control Block*
- Program Control Buffer
- Process Code Backup
- None

4. Which scheduling algorithm gives the shortest average waiting time?
- FCFS
- SJF*
- Round Robin
- Priority

5. Deadlock can be prevented by:
- Mutual Exclusion
- Hold and Wait
- No Preemption
- All of the above*

6. Consider a scenario where multiple processes are competing for system resources. In a distributed system, what are the key challenges in implementing mutual exclusion? Explain how the concept of distributed mutual exclusion differs from traditional mutual exclusion in a centralized system, and discuss the trade-offs between different approaches such as token-based algorithms versus voting-based algorithms.
- Token-based algorithms provide better fault tolerance*
- Voting-based algorithms have lower message complexity
- Both approaches have identical performance characteristics
- Centralized mutual exclusion is always superior

7. In the context of operating system design, analyze the relationship between memory management and process scheduling. How does virtual memory implementation affect the choice of scheduling algorithms? Consider scenarios where a system experiences high page fault rates and explain how this impacts overall system performance and the effectiveness of different scheduling strategies.
- Virtual memory has no impact on scheduling decisions
- High page fault rates favor CPU-intensive scheduling policies
- Memory management and scheduling are completely independent
- Page fault handling requires coordination between memory manager and scheduler*`;

        this.mcqInput.value = sampleText;
    }

    // Fisher-Yates shuffle algorithm for randomizing questions
    shuffleArray(array) {
        const shuffled = [...array]; // Create a copy to avoid modifying original
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Enhanced question parsing with better multi-line support
    parseQuestions(text) {
        const questions = [];
        const questionBlocks = text.trim().split(/\n\s*\n/);

        for (let block of questionBlocks) {
            if (!block.trim()) continue;

            const lines = block.trim().split('\n');
            if (lines.length < 2) continue;

            // Extract question (first line, remove numbering)
            const questionLine = lines[0].trim();
            const questionMatch = questionLine.match(/^\d+\.\s*(.+)$/);
            if (!questionMatch) continue;

            let question = questionMatch[1];

            // Handle multi-line questions - look for continuation lines
            let questionEndIndex = 1;
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();
                // If line doesn't start with option markers, it's part of the question
                if (!line.startsWith('-') && !line.startsWith('•') && !line.startsWith('*')) {
                    question += ' ' + line;
                    questionEndIndex = i + 1;
                } else {
                    break;
                }
            }

            const options = [];
            let correctIndex = -1;

            // Extract options starting from where question ends
            for (let i = questionEndIndex; i < lines.length; i++) {
                const line = lines[i].trim();
                if (line.startsWith('-') || line.startsWith('•')) {
                    let optionText = line.substring(1).trim();

                    // Check for correct answer marker
                    if (optionText.endsWith('*')) {
                        optionText = optionText.slice(0, -1).trim();
                        correctIndex = options.length;
                    }
                    options.push(optionText);
                }
            }

            if (options.length >= 2) {
                // If no correct answer specified, assume first option
                if (correctIndex === -1) {
                    correctIndex = 0;
                }

                questions.push({
                    question: this.formatQuestionText(question),
                    options,
                    correct: correctIndex
                });
            }
        }

        return questions;
    }

    // Enhanced text formatting for better display
    formatQuestionText(questionText) {
        return questionText
            .trim()
            .replace(/\s+/g, ' ') // Normalize whitespace
            .replace(/\n\s*\n/g, '\n\n') // Preserve paragraph breaks
            .replace(/([.!?])\s+([A-Z])/g, '$1 $2'); // Ensure proper sentence spacing
    }

    generateTest() {
        const text = this.mcqInput.value.trim();
        if (!text) {
            this.showError("Please enter some MCQ questions.");
            return;
        }

        try {
            const parsedQuestions = this.parseQuestions(text);
            if (parsedQuestions.length === 0) {
                this.showError("No valid questions found. Please check the format and try again.");
                return;
            }

            // Store original order and create randomized version
            this.originalQuestions = [...parsedQuestions];
            this.questions = this.shuffleArray(parsedQuestions);

            this.hideError();
            this.initializeTest();
            this.showTestSection();
        } catch (error) {
            this.showError("Error parsing questions: " + error.message);
        }
    }

    initializeTest() {
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.flaggedQuestions.clear();
        this.testStarted = true;
        this.displayCurrentQuestion();
        this.updateProgress();
        this.updateNavigation();
    }

    showTestSection() {
        this.inputSection.classList.add('hidden');
        this.resultsSection.classList.add('hidden');
        this.testSection.classList.remove('hidden');
    }

    showInputSection() {
        this.testSection.classList.add('hidden');
        this.resultsSection.classList.add('hidden');
        this.inputSection.classList.remove('hidden');
    }

    showResultsSection() {
        this.testSection.classList.add('hidden');
        this.inputSection.classList.add('hidden');
        this.resultsSection.classList.remove('hidden');
    }

    // Enhanced question display with multi-line support
    displayCurrentQuestion() {
        const question = this.questions[this.currentQuestionIndex];

        // Enhanced question text handling for multi-line support
        const formattedQuestion = this.formatQuestionText(question.question);
        
        // Use innerHTML instead of textContent to preserve line breaks if needed
        // But sanitize the content first for security
        this.questionText.innerHTML = this.sanitizeHTML(formattedQuestion);

        // Apply CSS classes for better multi-line display
        this.questionText.className = 'question-text multiline-support';

        this.optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option-item';

            const isSelected = this.userAnswers[this.currentQuestionIndex] === index;
            if (isSelected) {
                optionElement.classList.add('selected');
            }

            optionElement.innerHTML = `
                <div class="option-content">
                    <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                    <div class="option-text">${this.sanitizeHTML(option)}</div>
                </div>
            `;

            optionElement.addEventListener('click', () => {
                this.selectOption(index);
            });

            this.optionsContainer.appendChild(optionElement);
        });

        this.updateFlagButton();
    }

    // Simple HTML sanitization to prevent XSS while preserving basic formatting
    sanitizeHTML(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML.replace(/\n/g, '<br>');
    }

    selectOption(index) {
        this.userAnswers[this.currentQuestionIndex] = index;
        this.displayCurrentQuestion();
        this.updateProgress();
        this.updateNavigation();
    }

    navigateQuestion(direction) {
        const newIndex = this.currentQuestionIndex + direction;
        if (newIndex >= 0 && newIndex < this.questions.length) {
            this.currentQuestionIndex = newIndex;
            this.displayCurrentQuestion();
            this.updateProgress();
            this.updateNavigation();
        }
    }

    updateProgress() {
        const current = this.currentQuestionIndex + 1;
        const total = this.questions.length;
        const percentage = (current / total) * 100;

        this.questionCounter.textContent = `Question ${current} of ${total}`;
        this.progressFill.style.width = `${percentage}%`;

        const answeredCount = this.userAnswers.filter(answer => answer !== null).length;
        this.answeredCount.textContent = `${answeredCount} of ${total} answered`;
    }

    updateNavigation() {
        const isFirst = this.currentQuestionIndex === 0;
        const isLast = this.currentQuestionIndex === this.questions.length - 1;

        this.prevBtn.disabled = isFirst;

        if (isLast) {
            this.nextBtn.classList.add('hidden');
            this.submitTestBtn.classList.remove('hidden');
        } else {
            this.nextBtn.classList.remove('hidden');
            this.submitTestBtn.classList.add('hidden');
        }
    }

    toggleFlag() {
        const questionIndex = this.currentQuestionIndex;
        if (this.flaggedQuestions.has(questionIndex)) {
            this.flaggedQuestions.delete(questionIndex);
        } else {
            this.flaggedQuestions.add(questionIndex);
        }
        this.updateFlagButton();
    }

    updateFlagButton() {
        const isFlagged = this.flaggedQuestions.has(this.currentQuestionIndex);
        if (isFlagged) {
            this.flagText.textContent = 'Unflag';
            this.flagQuestionBtn.classList.add('btn--warning');
        } else {
            this.flagText.textContent = 'Flag for Review';
            this.flagQuestionBtn.classList.remove('btn--warning');
        }
    }

    showSubmitModal() {
        const unansweredCount = this.userAnswers.filter(answer => answer === null).length;

        if (unansweredCount > 0) {
            this.unansweredWarning.classList.remove('hidden');
            this.unansweredCount.textContent = unansweredCount;
        } else {
            this.unansweredWarning.classList.add('hidden');
        }

        this.submitModal.classList.remove('hidden');
    }

    hideSubmitModal() {
        this.submitModal.classList.add('hidden');
    }

    submitTest() {
        this.hideSubmitModal();
        this.calculateResults();
        this.displayResults();
        this.showResultsSection();
    }

    calculateResults() {
        let correctAnswers = 0;

        this.results = this.questions.map((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correct;

            if (isCorrect) {
                correctAnswers++;
            }

            return {
                question: question.question,
                options: question.options,
                userAnswer: userAnswer,
                correctAnswer: question.correct,
                isCorrect: isCorrect,
                isFlagged: this.flaggedQuestions.has(index)
            };
        });

        this.totalQuestions = this.questions.length;
        this.correctCount = correctAnswers;
        this.incorrectCount = this.totalQuestions - correctAnswers;
        this.percentage = Math.round((correctAnswers / this.totalQuestions) * 100);
    }

    displayResults() {
        // Update score summary
        this.scorePercentage.textContent = `${this.percentage}%`;
        this.scoreText.textContent = `${this.correctCount} out of ${this.totalQuestions}`;

        // Update grade
        let grade = 'F';
        if (this.percentage >= 90) grade = 'A+';
        else if (this.percentage >= 80) grade = 'A';
        else if (this.percentage >= 70) grade = 'B';
        else if (this.percentage >= 60) grade = 'C';
        else if (this.percentage >= 50) grade = 'D';

        this.scoreDescription.textContent = `Grade: ${grade}`;

        // Update stats
        this.correctCountElement.textContent = this.correctCount;
        this.incorrectCountElement.textContent = this.incorrectCount;
        this.flaggedCountElement.textContent = this.flaggedQuestions.size;

        // Update score circle color
        const scoreCircle = document.querySelector('.score-circle');
        if (this.percentage >= 70) {
            scoreCircle.style.backgroundColor = 'var(--color-success)';
        } else if (this.percentage >= 50) {
            scoreCircle.style.backgroundColor = 'var(--color-warning)';
        } else {
            scoreCircle.style.backgroundColor = 'var(--color-error)';
        }

        // Display detailed results
        this.displayDetailedResults();
    }

    displayDetailedResults() {
        this.detailedResultsContainer.innerHTML = '';

        this.results.forEach((result, index) => {
            const resultElement = document.createElement('div');
            resultElement.className = `result-item ${result.isCorrect ? 'correct' : 'incorrect'}`;

            const userAnswerText = result.userAnswer !== null ? 
                result.options[result.userAnswer] : 'No answer';
            const correctAnswerText = result.options[result.correctAnswer];

            resultElement.innerHTML = `
                <div class="result-header">
                    <span class="result-number">Question ${index + 1}</span>
                    <span class="result-status ${result.isCorrect ? 'correct' : 'incorrect'}">
                        ${result.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                    ${result.isFlagged ? '<span class="flag-indicator">🚩 Flagged</span>' : ''}
                </div>
                <div class="result-question multiline-support">${this.sanitizeHTML(result.question)}</div>
                <div class="result-answers">
                    <div class="answer-row ${result.isCorrect ? 'correct-answer' : 'wrong-answer'}">
                        <strong>Your Answer:</strong> ${userAnswerText}
                    </div>
                    ${!result.isCorrect ? `
                        <div class="answer-row correct-answer">
                            <strong>Correct Answer:</strong> ${correctAnswerText}
                        </div>
                    ` : ''}
                </div>
            `;

            this.detailedResultsContainer.appendChild(resultElement);
        });
    }

    retakeTest() {
        this.initializeTest();
        this.showTestSection();
    }

    startNewTest() {
        this.showInputSection();
        this.questions = [];
        this.originalQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.flaggedQuestions.clear();
        this.testStarted = false;
        this.results = [];
    }

    exportResults() {
        const exportData = {
            timestamp: new Date().toISOString(),
            totalQuestions: this.totalQuestions,
            correctAnswers: this.correctCount,
            incorrectAnswers: this.incorrectCount,
            percentage: this.percentage,
            flaggedCount: this.flaggedQuestions.size,
            results: this.results.map((result, index) => ({
                questionNumber: index + 1,
                question: result.question,
                userAnswer: result.userAnswer !== null ? result.options[result.userAnswer] : 'No answer',
                correctAnswer: result.options[result.correctAnswer],
                isCorrect: result.isCorrect,
                isFlagged: result.isFlagged
            }))
        };

        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `mcq-test-results-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    showError(message) {
        this.parseError.textContent = message;
        this.parseError.classList.remove('hidden');
    }

    hideError() {
        this.parseError.classList.add('hidden');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MCQTestGenerator();
});
