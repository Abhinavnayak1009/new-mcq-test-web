class MCQTestGenerator {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.flaggedQuestions = new Set();
        this.testStarted = false;
        this.results = [];
        
        this.initializeElements();
        this.attachEventListeners();
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
        // Use arrow functions to preserve 'this' context
        this.generateTestBtn.onclick = () => this.generateTest();
        this.loadSampleBtn.onclick = () => this.loadSampleQuestions();
        
        if (this.prevBtn) this.prevBtn.onclick = () => this.navigateQuestion(-1);
        if (this.nextBtn) this.nextBtn.onclick = () => this.navigateQuestion(1);
        if (this.submitTestBtn) this.submitTestBtn.onclick = () => this.showSubmitModal();
        if (this.flagQuestionBtn) this.flagQuestionBtn.onclick = () => this.toggleFlag();
        
        if (this.retakeTestBtn) this.retakeTestBtn.onclick = () => this.retakeTest();
        if (this.newTestBtn) this.newTestBtn.onclick = () => this.startNewTest();
        if (this.exportResultsBtn) this.exportResultsBtn.onclick = () => this.exportResults();
        
        if (this.cancelSubmitBtn) this.cancelSubmitBtn.onclick = () => this.hideSubmitModal();
        if (this.confirmSubmitBtn) this.confirmSubmitBtn.onclick = () => this.submitTest();
        
        // Close modal when clicking outside
        if (this.submitModal) {
            this.submitModal.onclick = (e) => {
                if (e.target === this.submitModal) {
                    this.hideSubmitModal();
                }
            };
        }
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
- All of the above*`;
        
        this.mcqInput.value = sampleText;
    }

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
            
            const question = questionMatch[1];
            const options = [];
            let correctIndex = -1;
            
            // Extract options
            for (let i = 1; i < lines.length; i++) {
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
                    question,
                    options,
                    correct: correctIndex
                });
            }
        }
        
        return questions;
    }

    generateTest() {
        const text = this.mcqInput.value.trim();
        if (!text) {
            this.showError("Please enter some MCQ questions.");
            return;
        }

        try {
            this.questions = this.parseQuestions(text);
            
            if (this.questions.length === 0) {
                this.showError("No valid questions found. Please check the format and try again.");
                return;
            }

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

    displayCurrentQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        this.questionText.textContent = question.question;
        
        this.optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option-item';
            
            const isSelected = this.userAnswers[this.currentQuestionIndex] === index;
            if (isSelected) {
                optionElement.classList.add('selected');
            }
            
            optionElement.innerHTML = `
                <input type="radio" 
                       name="question-${this.currentQuestionIndex}" 
                       value="${index}" 
                       class="option-radio"
                       ${isSelected ? 'checked' : ''}>
                <span class="option-text">${option}</span>
            `;
            
            optionElement.onclick = () => this.selectOption(index);
            
            this.optionsContainer.appendChild(optionElement);
        });

        this.updateFlagButton();
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
            scoreCircle.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
        } else if (this.percentage >= 50) {
            scoreCircle.style.background = 'linear-gradient(135deg, #ffc107 0%, #e0a800 100%)';
        } else {
            scoreCircle.style.background = 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)';
        }
        
        // Display detailed results
        this.displayDetailedResults();
    }

    displayDetailedResults() {
        this.detailedResultsContainer.innerHTML = '';
        
        this.results.forEach((result, index) => {
            const resultElement = document.createElement('div');
            resultElement.className = `result-item ${result.isCorrect ? 'correct' : 'incorrect'}`;
            
            const userAnswerText = result.userAnswer !== null 
                ? result.options[result.userAnswer] 
                : 'No answer';
            const correctAnswerText = result.options[result.correctAnswer];
            
            resultElement.innerHTML = `
                <div class="result-question">
                    ${index + 1}. ${result.question}
                    ${result.isFlagged ? ' 🚩' : ''}
                </div>
                <div class="result-answer">
                    <div class="answer-section">
                        <div class="answer-label">Your Answer:</div>
                        <div class="answer-text ${result.isCorrect ? 'correct' : 'incorrect'}">
                            ${userAnswerText}
                        </div>
                    </div>
                    <div class="answer-section">
                        <div class="answer-label">Correct Answer:</div>
                        <div class="answer-text correct">${correctAnswerText}</div>
                    </div>
                    <div class="result-status ${result.isCorrect ? 'correct' : 'incorrect'}">
                        ${result.isCorrect ? 'Correct' : 'Incorrect'}
                    </div>
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
        this.questions = [];
        this.testStarted = false;
        this.showInputSection();
    }

    exportResults() {
        let exportText = `MCQ Test Results\n`;
        exportText += `================\n\n`;
        exportText += `Score: ${this.correctCount}/${this.totalQuestions} (${this.percentage}%)\n`;
        exportText += `Correct: ${this.correctCount}\n`;
        exportText += `Incorrect: ${this.incorrectCount}\n`;
        exportText += `Flagged: ${this.flaggedQuestions.size}\n\n`;
        exportText += `Detailed Results:\n`;
        exportText += `-----------------\n\n`;
        
        this.results.forEach((result, index) => {
            const userAnswerText = result.userAnswer !== null 
                ? result.options[result.userAnswer] 
                : 'No answer';
            const correctAnswerText = result.options[result.correctAnswer];
            
            exportText += `${index + 1}. ${result.question}\n`;
            exportText += `   Your Answer: ${userAnswerText}\n`;
            exportText += `   Correct Answer: ${correctAnswerText}\n`;
            exportText += `   Result: ${result.isCorrect ? 'Correct' : 'Incorrect'}\n`;
            if (result.isFlagged) exportText += `   Status: Flagged\n`;
            exportText += `\n`;
        });
        
        // Create and download file
        const blob = new Blob([exportText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `mcq-test-results-${new Date().toISOString().slice(0, 10)}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
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