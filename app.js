// // class MCQTestGenerator {
// //     constructor() {
// //         this.questions = [];
// //         this.originalQuestions = []; // Store original order for reference
// //         this.currentQuestionIndex = 0;
// //         this.userAnswers = [];
// //         this.flaggedQuestions = new Set();
// //         this.testStarted = false;
// //         this.results = [];
// //         this.initializeElements();
// //         this.attachEventListeners();
// //         this.loadSampleData();
// //     }

// //     initializeElements() {
// //         // Input section elements
// //         this.mcqInput = document.getElementById('mcq-input');
// //         this.generateTestBtn = document.getElementById('generate-test-btn');
// //         this.loadSampleBtn = document.getElementById('load-sample-btn');
// //         this.parseError = document.getElementById('parse-error');

// //         // Section elements
// //         this.inputSection = document.getElementById('input-section');
// //         this.testSection = document.getElementById('test-section');
// //         this.resultsSection = document.getElementById('results-section');

// //         // Test interface elements
// //         this.questionCounter = document.getElementById('question-counter');
// //         this.progressFill = document.getElementById('progress-fill');
// //         this.questionText = document.getElementById('question-text');
// //         this.optionsContainer = document.getElementById('options-container');
// //         this.prevBtn = document.getElementById('prev-btn');
// //         this.nextBtn = document.getElementById('next-btn');
// //         this.submitTestBtn = document.getElementById('submit-test-btn');
// //         this.answeredCount = document.getElementById('answered-count');
// //         this.flagQuestionBtn = document.getElementById('flag-question-btn');
// //         this.flagText = document.getElementById('flag-text');

// //         // Results elements
// //         this.scorePercentage = document.getElementById('score-percentage');
// //         this.scoreText = document.getElementById('score-text');
// //         this.scoreDescription = document.getElementById('score-description');
// //         this.correctCountElement = document.getElementById('correct-count');
// //         this.incorrectCountElement = document.getElementById('incorrect-count');
// //         this.flaggedCountElement = document.getElementById('flagged-count');
// //         this.detailedResultsContainer = document.getElementById('detailed-results-container');
// //         this.retakeTestBtn = document.getElementById('retake-test-btn');
// //         this.newTestBtn = document.getElementById('new-test-btn');
// //         this.exportResultsBtn = document.getElementById('export-results-btn');

// //         // Modal elements
// //         this.submitModal = document.getElementById('submit-modal');
// //         this.cancelSubmitBtn = document.getElementById('cancel-submit-btn');
// //         this.confirmSubmitBtn = document.getElementById('confirm-submit-btn');
// //         this.unansweredWarning = document.getElementById('unanswered-warning');
// //         this.unansweredCount = document.getElementById('unanswered-count');
// //     }

// //     attachEventListeners() {
// //         this.generateTestBtn.addEventListener('click', () => this.generateTest());
// //         this.loadSampleBtn.addEventListener('click', () => this.loadSampleQuestions());
// //         this.prevBtn.addEventListener('click', () => this.navigateQuestion(-1));
// //         this.nextBtn.addEventListener('click', () => this.navigateQuestion(1));
// //         this.submitTestBtn.addEventListener('click', () => this.showSubmitModal());
// //         this.flagQuestionBtn.addEventListener('click', () => this.toggleFlag());
// //         this.retakeTestBtn.addEventListener('click', () => this.retakeTest());
// //         this.newTestBtn.addEventListener('click', () => this.startNewTest());
// //         this.exportResultsBtn.addEventListener('click', () => this.exportResults());
// //         this.cancelSubmitBtn.addEventListener('click', () => this.hideSubmitModal());
// //         this.confirmSubmitBtn.addEventListener('click', () => this.submitTest());

// //         // Close modal when clicking outside
// //         this.submitModal.addEventListener('click', (e) => {
// //             if (e.target === this.submitModal) {
// //                 this.hideSubmitModal();
// //             }
// //         });
// //     }

// //     loadSampleData() {
// //         this.sampleQuestions = [
// //             {
// //                 question: "Which system call creates a new process in UNIX?",
// //                 options: ["fork", "exec", "create", "init"],
// //                 correct: 0
// //             },
// //             {
// //                 question: "The OS component that decides which process runs next is:",
// //                 options: ["Dispatcher", "Scheduler", "Memory manager", "File manager"],
// //                 correct: 1
// //             },
// //             {
// //                 question: "PCB stands for:",
// //                 options: ["Process Control Block", "Program Control Buffer", "Process Code Backup", "None"],
// //                 correct: 0
// //             }
// //         ];
// //     }

// //     loadSampleQuestions() {
// //         const sampleText = `1. Which system call creates a new process in UNIX?
// // - fork*
// // - exec
// // - create
// // - init

// // 2. Analyze the following pseudocode for bubble sort:
// // BEGIN BubbleSort
// //     FOR i = 0 TO n-2
// //         FOR j = 0 TO n-2-i
// //             IF arr[j] > arr[j+1] THEN
// //                 SWAP arr[j] AND arr[j+1]
// //             END IF
// //         END FOR
// //     END FOR
// // END BubbleSort
// // What is the time complexity of this algorithm?
// // - O(n)*
// // - O(n²)*
// // - O(n log n)
// // - O(1)

// // 3. Consider this pseudocode:
// // FUNCTION findMax(array, size)
// //     max = array[0]
// //     FOR i = 1 TO size-1
// //         IF array[i] > max THEN
// //             max = array[i]
// //         END IF
// //     END FOR
// //     RETURN max
// // END FUNCTION
// // What does this algorithm do?
// // - Finds the minimum element*
// // - Finds the maximum element*
// // - Sorts the array
// // - Counts elements

// // 4. Given the following recursive pseudocode:
// // FUNCTION factorial(n)
// //     IF n = 0 OR n = 1 THEN
// //         RETURN 1
// //     ELSE
// //         RETURN n * factorial(n-1)
// //     END IF
// // END FUNCTION
// // What is factorial(5)?
// // - 100
// // - 120*
// // - 125
// // - 150

// // 5. Examine this binary search pseudocode:
// // FUNCTION binarySearch(arr, target, low, high)
// //     WHILE low <= high
// //         mid = (low + high) / 2
// //         IF arr[mid] = target THEN
// //             RETURN mid
// //         ELSE IF arr[mid] < target THEN
// //             low = mid + 1
// //         ELSE
// //             high = mid - 1
// //         END IF
// //     END WHILE
// //     RETURN -1
// // END FUNCTION
// // What is the prerequisite for this algorithm to work correctly?
// // - Array must be sorted*
// // - Array must be unsorted
// // - Array must have odd number of elements
// // - Array must contain unique elements`;

// //         this.mcqInput.value = sampleText;
// //     }

// //     // Fisher-Yates shuffle algorithm for randomizing questions
// //     shuffleArray(array) {
// //         const shuffled = [...array]; // Create a copy to avoid modifying original
// //         for (let i = shuffled.length - 1; i > 0; i--) {
// //             const j = Math.floor(Math.random() * (i + 1));
// //             [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
// //         }
// //         return shuffled;
// //     }

// //     // Enhanced question parsing with better multi-line and pseudocode support
// //     parseQuestions(text) {
// //         const questions = [];
// //         const questionBlocks = text.trim().split(/\n\s*\n/);

// //         for (let block of questionBlocks) {
// //             if (!block.trim()) continue;

// //             const lines = block.trim().split('\n');
// //             if (lines.length < 2) continue;

// //             // Extract question (first line, remove numbering)
// //             const questionLine = lines[0].trim();
// //             const questionMatch = questionLine.match(/^\d+\.\s*(.+)$/);
// //             if (!questionMatch) continue;

// //             let question = questionMatch[1];

// //             // Handle multi-line questions - look for continuation lines
// //             let questionEndIndex = 1;
// //             for (let i = 1; i < lines.length; i++) {
// //                 const line = lines[i].trim();
// //                 // If line doesn't start with option markers, it's part of the question
// //                 if (!line.startsWith('-') && !line.startsWith('•') && !line.startsWith('*')) {
// //                     question += '\n' + line; // Preserve line breaks for pseudocode structure
// //                     questionEndIndex = i + 1;
// //                 } else {
// //                     break;
// //                 }
// //             }

// //             const options = [];
// //             let correctIndex = -1;

// //             // Extract options starting from where question ends
// //             for (let i = questionEndIndex; i < lines.length; i++) {
// //                 const line = lines[i].trim();
// //                 if (line.startsWith('-') || line.startsWith('•')) {
// //                     let optionText = line.substring(1).trim();

// //                     // Check for correct answer marker
// //                     if (optionText.endsWith('*')) {
// //                         optionText = optionText.slice(0, -1).trim();
// //                         correctIndex = options.length;
// //                     }
// //                     options.push(optionText);
// //                 }
// //             }

// //             if (options.length >= 2) {
// //                 // If no correct answer specified, assume first option
// //                 if (correctIndex === -1) {
// //                     correctIndex = 0;
// //                 }

// //                 questions.push({
// //                     question: this.formatQuestionText(question),
// //                     options,
// //                     correct: correctIndex
// //                 });
// //             }
// //         }

// //         return questions;
// //     }

// //     // Enhanced text formatting for preserving pseudocode structure
// //     formatQuestionText(questionText) {
// //         return questionText
// //             .trim()
// //             // Preserve line breaks and indentation for pseudocode
// //             .replace(/\n\s*\n/g, '\n\n') // Preserve paragraph breaks
// //             .replace(/^(\s+)/gm, '$1'); // Preserve indentation
// //     }

// //     // Detect if text contains pseudocode patterns
// //     isPseudocode(text) {
// //         const pseudocodePatterns = [
// //             /\b(BEGIN|END|IF|THEN|ELSE|FOR|WHILE|FUNCTION|RETURN|PROCEDURE)\b/i,
// //             /\b(TO|STEP|DO|LOOP|REPEAT|UNTIL)\b/i,
// //             /^\s*(IF|FOR|WHILE|BEGIN|FUNCTION)/im,
// //             /\s*(THEN|ELSE|END IF|END FOR|END WHILE)/i
// //         ];
        
// //         return pseudocodePatterns.some(pattern => pattern.test(text));
// //     }

// //     generateTest() {
// //         const text = this.mcqInput.value.trim();
// //         if (!text) {
// //             this.showError("Please enter some MCQ questions.");
// //             return;
// //         }

// //         try {
// //             const parsedQuestions = this.parseQuestions(text);
// //             if (parsedQuestions.length === 0) {
// //                 this.showError("No valid questions found. Please check the format and try again.");
// //                 return;
// //             }

// //             // Store original order and create randomized version
// //             this.originalQuestions = [...parsedQuestions];
// //             this.questions = this.shuffleArray(parsedQuestions);

// //             this.hideError();
// //             this.initializeTest();
// //             this.showTestSection();
// //         } catch (error) {
// //             this.showError("Error parsing questions: " + error.message);
// //         }
// //     }

// //     initializeTest() {
// //         this.currentQuestionIndex = 0;
// //         this.userAnswers = new Array(this.questions.length).fill(null);
// //         this.flaggedQuestions.clear();
// //         this.testStarted = true;
// //         this.displayCurrentQuestion();
// //         this.updateProgress();
// //         this.updateNavigation();
// //     }

// //     showTestSection() {
// //         this.inputSection.classList.add('hidden');
// //         this.resultsSection.classList.add('hidden');
// //         this.testSection.classList.remove('hidden');
// //     }

// //     showInputSection() {
// //         this.testSection.classList.add('hidden');
// //         this.resultsSection.classList.add('hidden');
// //         this.inputSection.classList.remove('hidden');
// //     }

// //     showResultsSection() {
// //         this.testSection.classList.add('hidden');
// //         this.inputSection.classList.add('hidden');
// //         this.resultsSection.classList.remove('hidden');
// //     }

// //     // Enhanced question display with pseudocode and multi-line support
// //     displayCurrentQuestion() {
// //         const question = this.questions[this.currentQuestionIndex];

// //         // Format question text while preserving structure
// //         const formattedQuestion = this.formatQuestionForDisplay(question.question);
        
// //         // Apply appropriate styling based on content type
// //         this.questionText.innerHTML = formattedQuestion;
// //         this.questionText.className = this.isPseudocode(question.question) 
// //             ? 'question-text pseudocode-support' 
// //             : 'question-text multiline-support';

// //         this.optionsContainer.innerHTML = '';

// //         question.options.forEach((option, index) => {
// //             const optionElement = document.createElement('div');
// //             optionElement.className = 'option-item';

// //             const isSelected = this.userAnswers[this.currentQuestionIndex] === index;
// //             if (isSelected) {
// //                 optionElement.classList.add('selected');
// //             }

// //             optionElement.innerHTML = `
// //                 <div class="option-content">
// //                     <div class="option-letter">${String.fromCharCode(65 + index)}</div>
// //                     <div class="option-text">${this.escapeHtml(option)}</div>
// //                 </div>
// //             `;

// //             optionElement.addEventListener('click', () => {
// //                 this.selectOption(index);
// //             });

// //             this.optionsContainer.appendChild(optionElement);
// //         });

// //         this.updateFlagButton();
// //     }

// //     // Format question text for proper display while preserving structure
// //     formatQuestionForDisplay(text) {
// //         // Escape HTML to prevent XSS while preserving formatting
// //         let formatted = this.escapeHtml(text);
        
// //         // Convert line breaks to HTML breaks
// //         formatted = formatted.replace(/\n/g, '<br>');
        
// //         // If it's pseudocode, wrap it in a code-like container
// //         if (this.isPseudocode(text)) {
// //             // Identify pseudocode blocks and wrap them
// //             const lines = formatted.split('<br>');
// //             let inCodeBlock = false;
// //             let result = [];
// //             let codeLines = [];
            
// //             lines.forEach(line => {
// //                 const trimmedLine = line.trim();
                
// //                 // Check if line looks like pseudocode
// //                 const isPseudocodeLine = /\b(BEGIN|END|IF|THEN|ELSE|FOR|WHILE|FUNCTION|RETURN|PROCEDURE|TO|STEP|DO|LOOP|REPEAT|UNTIL)\b/i.test(trimmedLine) ||
// //                                        /^\s*(IF|FOR|WHILE|BEGIN|FUNCTION)/i.test(trimmedLine) ||
// //                                        /\s*(THEN|ELSE|END IF|END FOR|END WHILE)/i.test(trimmedLine);
                
// //                 if (isPseudocodeLine || (inCodeBlock && trimmedLine.length > 0 && !trimmedLine.endsWith('?'))) {
// //                     if (!inCodeBlock) {
// //                         inCodeBlock = true;
// //                         if (result.length > 0) {
// //                             result.push(''); // Add spacing before code block
// //                         }
// //                     }
// //                     codeLines.push(line);
// //                 } else {
// //                     if (inCodeBlock && codeLines.length > 0) {
// //                         result.push('<div class="pseudocode-block">');
// //                         result.push(codeLines.join('<br>'));
// //                         result.push('</div>');
// //                         codeLines = [];
// //                         inCodeBlock = false;
// //                     }
// //                     if (trimmedLine.length > 0) {
// //                         result.push(line);
// //                     }
// //                 }
// //             });
            
// //             // Handle any remaining code lines
// //             if (codeLines.length > 0) {
// //                 result.push('<div class="pseudocode-block">');
// //                 result.push(codeLines.join('<br>'));
// //                 result.push('</div>');
// //             }
            
// //             return result.join('<br>');
// //         }
        
// //         return formatted;
// //     }

// //     // Simple HTML escaping to prevent XSS
// //     escapeHtml(text) {
// //         const div = document.createElement('div');
// //         div.textContent = text;
// //         return div.innerHTML;
// //     }

// //     selectOption(index) {
// //         this.userAnswers[this.currentQuestionIndex] = index;
// //         this.displayCurrentQuestion();
// //         this.updateProgress();
// //         this.updateNavigation();
// //     }

// //     navigateQuestion(direction) {
// //         const newIndex = this.currentQuestionIndex + direction;
// //         if (newIndex >= 0 && newIndex < this.questions.length) {
// //             this.currentQuestionIndex = newIndex;
// //             this.displayCurrentQuestion();
// //             this.updateProgress();
// //             this.updateNavigation();
// //         }
// //     }

// //     updateProgress() {
// //         const current = this.currentQuestionIndex + 1;
// //         const total = this.questions.length;
// //         const percentage = (current / total) * 100;

// //         this.questionCounter.textContent = `Question ${current} of ${total}`;
// //         this.progressFill.style.width = `${percentage}%`;

// //         const answeredCount = this.userAnswers.filter(answer => answer !== null).length;
// //         this.answeredCount.textContent = `${answeredCount} of ${total} answered`;
// //     }

// //     updateNavigation() {
// //         const isFirst = this.currentQuestionIndex === 0;
// //         const isLast = this.currentQuestionIndex === this.questions.length - 1;

// //         this.prevBtn.disabled = isFirst;

// //         if (isLast) {
// //             this.nextBtn.classList.add('hidden');
// //             this.submitTestBtn.classList.remove('hidden');
// //         } else {
// //             this.nextBtn.classList.remove('hidden');
// //             this.submitTestBtn.classList.add('hidden');
// //         }
// //     }

// //     toggleFlag() {
// //         const questionIndex = this.currentQuestionIndex;
// //         if (this.flaggedQuestions.has(questionIndex)) {
// //             this.flaggedQuestions.delete(questionIndex);
// //         } else {
// //             this.flaggedQuestions.add(questionIndex);
// //         }
// //         this.updateFlagButton();
// //     }

// //     updateFlagButton() {
// //         const isFlagged = this.flaggedQuestions.has(this.currentQuestionIndex);
// //         if (isFlagged) {
// //             this.flagText.textContent = 'Unflag';
// //             this.flagQuestionBtn.classList.add('btn--warning');
// //         } else {
// //             this.flagText.textContent = 'Flag for Review';
// //             this.flagQuestionBtn.classList.remove('btn--warning');
// //         }
// //     }

// //     showSubmitModal() {
// //         const unansweredCount = this.userAnswers.filter(answer => answer === null).length;

// //         if (unansweredCount > 0) {
// //             this.unansweredWarning.classList.remove('hidden');
// //             this.unansweredCount.textContent = unansweredCount;
// //         } else {
// //             this.unansweredWarning.classList.add('hidden');
// //         }

// //         this.submitModal.classList.remove('hidden');
// //     }

// //     hideSubmitModal() {
// //         this.submitModal.classList.add('hidden');
// //     }

// //     submitTest() {
// //         this.hideSubmitModal();
// //         this.calculateResults();
// //         this.displayResults();
// //         this.showResultsSection();
// //     }

// //     calculateResults() {
// //         let correctAnswers = 0;

// //         this.results = this.questions.map((question, index) => {
// //             const userAnswer = this.userAnswers[index];
// //             const isCorrect = userAnswer === question.correct;

// //             if (isCorrect) {
// //                 correctAnswers++;
// //             }

// //             return {
// //                 question: question.question,
// //                 options: question.options,
// //                 userAnswer: userAnswer,
// //                 correctAnswer: question.correct,
// //                 isCorrect: isCorrect,
// //                 isFlagged: this.flaggedQuestions.has(index)
// //             };
// //         });

// //         this.totalQuestions = this.questions.length;
// //         this.correctCount = correctAnswers;
// //         this.incorrectCount = this.totalQuestions - correctAnswers;
// //         this.percentage = Math.round((correctAnswers / this.totalQuestions) * 100);
// //     }

// //     displayResults() {
// //         // Update score summary
// //         this.scorePercentage.textContent = `${this.percentage}%`;
// //         this.scoreText.textContent = `${this.correctCount} out of ${this.totalQuestions}`;

// //         // Update grade
// //         let grade = 'F';
// //         if (this.percentage >= 90) grade = 'A+';
// //         else if (this.percentage >= 80) grade = 'A';
// //         else if (this.percentage >= 70) grade = 'B';
// //         else if (this.percentage >= 60) grade = 'C';
// //         else if (this.percentage >= 50) grade = 'D';

// //         this.scoreDescription.textContent = `Grade: ${grade}`;

// //         // Update stats
// //         this.correctCountElement.textContent = this.correctCount;
// //         this.incorrectCountElement.textContent = this.incorrectCount;
// //         this.flaggedCountElement.textContent = this.flaggedQuestions.size;

// //         // Update score circle color
// //         const scoreCircle = document.querySelector('.score-circle');
// //         if (this.percentage >= 70) {
// //             scoreCircle.style.backgroundColor = 'var(--color-success)';
// //         } else if (this.percentage >= 50) {
// //             scoreCircle.style.backgroundColor = 'var(--color-warning)';
// //         } else {
// //             scoreCircle.style.backgroundColor = 'var(--color-error)';
// //         }

// //         // Display detailed results
// //         this.displayDetailedResults();
// //     }

// //     displayDetailedResults() {
// //         this.detailedResultsContainer.innerHTML = '';

// //         this.results.forEach((result, index) => {
// //             const resultElement = document.createElement('div');
// //             resultElement.className = `result-item ${result.isCorrect ? 'correct' : 'incorrect'}`;

// //             const userAnswerText = result.userAnswer !== null ? 
// //                 result.options[result.userAnswer] : 'No answer';
// //             const correctAnswerText = result.options[result.correctAnswer];

// //             // Format the question for results display
// //             const formattedQuestion = this.formatQuestionForDisplay(result.question);
// //             const questionClass = this.isPseudocode(result.question) 
// //                 ? 'result-question pseudocode-support' 
// //                 : 'result-question multiline-support';

// //             resultElement.innerHTML = `
// //                 <div class="result-header">
// //                     <span class="result-number">Question ${index + 1}</span>
// //                     <span class="result-status ${result.isCorrect ? 'correct' : 'incorrect'}">
// //                         ${result.isCorrect ? '✓ Correct' : '✗ Incorrect'}
// //                     </span>
// //                     ${result.isFlagged ? '<span class="flag-indicator">🚩 Flagged</span>' : ''}
// //                 </div>
// //                 <div class="${questionClass}">${formattedQuestion}</div>
// //                 <div class="result-answers">
// //                     <div class="answer-row ${result.isCorrect ? 'correct-answer' : 'wrong-answer'}">
// //                         <strong>Your Answer:</strong> ${userAnswerText}
// //                     </div>
// //                     ${!result.isCorrect ? `
// //                         <div class="answer-row correct-answer">
// //                             <strong>Correct Answer:</strong> ${correctAnswerText}
// //                         </div>
// //                     ` : ''}
// //                 </div>
// //             `;

// //             this.detailedResultsContainer.appendChild(resultElement);
// //         });
// //     }

// //     retakeTest() {
// //         this.initializeTest();
// //         this.showTestSection();
// //     }

// //     startNewTest() {
// //         this.showInputSection();
// //         this.questions = [];
// //         this.originalQuestions = [];
// //         this.currentQuestionIndex = 0;
// //         this.userAnswers = [];
// //         this.flaggedQuestions.clear();
// //         this.testStarted = false;
// //         this.results = [];
// //     }

// //     exportResults() {
// //         const exportData = {
// //             timestamp: new Date().toISOString(),
// //             totalQuestions: this.totalQuestions,
// //             correctAnswers: this.correctCount,
// //             incorrectAnswers: this.incorrectCount,
// //             percentage: this.percentage,
// //             flaggedCount: this.flaggedQuestions.size,
// //             results: this.results.map((result, index) => ({
// //                 questionNumber: index + 1,
// //                 question: result.question,
// //                 userAnswer: result.userAnswer !== null ? result.options[result.userAnswer] : 'No answer',
// //                 correctAnswer: result.options[result.correctAnswer],
// //                 isCorrect: result.isCorrect,
// //                 isFlagged: result.isFlagged
// //             }))
// //         };

// //         const dataStr = JSON.stringify(exportData, null, 2);
// //         const dataBlob = new Blob([dataStr], { type: 'application/json' });
// //         const url = URL.createObjectURL(dataBlob);

// //         const link = document.createElement('a');
// //         link.href = url;
// //         link.download = `mcq-test-results-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.json`;
// //         document.body.appendChild(link);
// //         link.click();
// //         document.body.removeChild(link);
// //         URL.revokeObjectURL(url);
// //     }

// //     showError(message) {
// //         this.parseError.textContent = message;
// //         this.parseError.classList.remove('hidden');
// //     }

// //     hideError() {
// //         this.parseError.classList.add('hidden');
// //     }
// // }

// // // Initialize the application when DOM is loaded
// // document.addEventListener('DOMContentLoaded', () => {
// //     new MCQTestGenerator();
// // });



// class MCQTestGenerator {
//     constructor() {
//         this.questions = [];
//         this.originalQuestions = []; // Store original order for reference
//         this.currentQuestionIndex = 0;
//         this.userAnswers = [];
//         this.flaggedQuestions = new Set();
//         this.testStarted = false;
//         this.results = [];
//         this.initializeElements();
//         this.attachEventListeners();
//         this.loadSampleData();
//     }

//     initializeElements() {
//         // Input section elements
//         this.mcqInput = document.getElementById('mcq-input');
//         this.generateTestBtn = document.getElementById('generate-test-btn');
//         this.loadSampleBtn = document.getElementById('load-sample-btn');
//         this.parseError = document.getElementById('parse-error');
//         // Section elements
//         this.inputSection = document.getElementById('input-section');
//         this.testSection = document.getElementById('test-section');
//         this.resultsSection = document.getElementById('results-section');
//         // Test interface elements
//         this.questionCounter = document.getElementById('question-counter');
//         this.progressFill = document.getElementById('progress-fill');
//         this.questionText = document.getElementById('question-text');
//         this.optionsContainer = document.getElementById('options-container');
//         this.prevBtn = document.getElementById('prev-btn');
//         this.nextBtn = document.getElementById('next-btn');
//         this.submitTestBtn = document.getElementById('submit-test-btn');
//         this.answeredCount = document.getElementById('answered-count');
//         this.flagQuestionBtn = document.getElementById('flag-question-btn');
//         this.flagText = document.getElementById('flag-text');
//         // Results elements
//         this.scorePercentage = document.getElementById('score-percentage');
//         this.scoreText = document.getElementById('score-text');
//         this.scoreDescription = document.getElementById('score-description');
//         this.correctCountElement = document.getElementById('correct-count');
//         this.incorrectCountElement = document.getElementById('incorrect-count');
//         this.flaggedCountElement = document.getElementById('flagged-count');
//         this.detailedResultsContainer = document.getElementById('detailed-results-container');
//         this.retakeTestBtn = document.getElementById('retake-test-btn');
//         this.newTestBtn = document.getElementById('new-test-btn');
//         this.exportResultsBtn = document.getElementById('export-results-btn');
//         // Modal elements
//         this.submitModal = document.getElementById('submit-modal');
//         this.cancelSubmitBtn = document.getElementById('cancel-submit-btn');
//         this.confirmSubmitBtn = document.getElementById('confirm-submit-btn');
//         this.unansweredWarning = document.getElementById('unanswered-warning');
//         this.unansweredCount = document.getElementById('unanswered-count');
//     }

//     attachEventListeners() {
//         this.generateTestBtn.addEventListener('click', () => this.generateTest());
//         this.loadSampleBtn.addEventListener('click', () => this.loadSampleQuestions());
//         this.prevBtn.addEventListener('click', () => this.navigateQuestion(-1));
//         this.nextBtn.addEventListener('click', () => this.navigateQuestion(1));
//         this.submitTestBtn.addEventListener('click', () => this.showSubmitModal());
//         this.flagQuestionBtn.addEventListener('click', () => this.toggleFlag());
//         this.retakeTestBtn.addEventListener('click', () => this.retakeTest());
//         this.newTestBtn.addEventListener('click', () => this.startNewTest());
//         this.exportResultsBtn.addEventListener('click', () => this.exportResults());
//         this.cancelSubmitBtn.addEventListener('click', () => this.hideSubmitModal());
//         this.confirmSubmitBtn.addEventListener('click', () => this.submitTest());
//         this.submitModal.addEventListener('click', (e) => {
//             if (e.target === this.submitModal) {
//                 this.hideSubmitModal();
//             }
//         });
//     }

//     loadSampleData() {
//         this.sampleQuestions = [
//             { question: "Which system call creates a new process in UNIX?", options: ["fork", "exec", "create", "init"], correct: 0 },
//             { question: "The OS component that decides which process runs next is:", options: ["Dispatcher", "Scheduler", "Memory manager", "File manager"], correct: 1 },
//             { question: "PCB stands for:", options: ["Process Control Block", "Program Control Buffer", "Process Code Backup", "None"], correct: 0 }
//         ];
//     }

//     loadSampleQuestions() {
//         const sampleText = `1. Which system call creates a new process in UNIX?
// - fork*
// - exec
// - create
// - init
// 2. Analyze the following pseudocode for bubble sort:
// BEGIN BubbleSort
//     FOR i = 0 TO n-2
//         FOR j = 0 TO n-2-i
//             IF arr[j] > arr[j+1] THEN
//                 SWAP arr[j] AND arr[j+1]
//             END IF
//         END FOR
//     END FOR
// END BubbleSort
// What is the time complexity of this algorithm?
// - O(n)*
// - O(n²)*
// - O(n log n)
// - O(1)
// 3. Consider this pseudocode:
// FUNCTION findMax(array, size)
//     max = array[0]
//     FOR i = 1 TO size-1
//         IF array[i] > max THEN
//             max = array[i]
//         END IF
//     END FOR
//     RETURN max
// END FUNCTION
// What does this algorithm do?
// - Finds the minimum element*
// - Finds the maximum element*
// - Sorts the array
// - Counts elements
// 4. Given the following recursive pseudocode:
// FUNCTION factorial(n)
//     IF n = 0 OR n = 1 THEN
//         RETURN 1
//     ELSE
//         RETURN n * factorial(n-1)
//     END IF
// END FUNCTION
// What is factorial(5)?
// - 100
// - 120*
// - 125
// - 150
// 5. Examine this binary search pseudocode:
// FUNCTION binarySearch(arr, target, low, high)
//     WHILE low <= high
//         mid = (low + high) / 2
//         IF arr[mid] = target THEN
//             RETURN mid
//         ELSE IF arr[mid] < target THEN
//             low = mid + 1
//         ELSE
//             high = mid - 1
//         END IF
//     END WHILE
//     RETURN -1
// END FUNCTION
// What is the prerequisite for this algorithm to work correctly?
// - Array must be sorted*
// - Array must be unsorted
// - Array must have odd number of elements
// - Array must contain unique elements`;
//         this.mcqInput.value = sampleText;
//     }

//     // Fisher-Yates shuffle algorithm for randomizing questions
//     shuffleArray(array) {
//         const shuffled = [...array];
//         for (let i = shuffled.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//         }
//         return shuffled;
//     }

//     // Fisher-Yates shuffle for options
//     shuffleOptions(options) {
//         const arr = [...options];
//         for (let i = arr.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//         return arr;
//     }

//     parseQuestions(text) {
//         const questions = [];
//         const questionBlocks = text.trim().split(/\n\s*\n/);
//         for (let block of questionBlocks) {
//             if (!block.trim()) continue;
//             const lines = block.trim().split('\n');
//             if (lines.length < 2) continue;
//             const questionLine = lines[0].trim();
//             const questionMatch = questionLine.match(/^\d+\.\s*(.+)$/);
//             if (!questionMatch) continue;
//             let question = questionMatch[1];
//             let questionEndIndex = 1;
//             for (let i = 1; i < lines.length; i++) {
//                 const line = lines[i].trim();
//                 if (!line.startsWith('-') && !line.startsWith('•') && !line.startsWith('*')) {
//                     question += '\n' + line;
//                     questionEndIndex = i + 1;
//                 } else {
//                     break;
//                 }
//             }
//             const options = [];
//             let correctIndex = -1;
//             for (let i = questionEndIndex; i < lines.length; i++) {
//                 const line = lines[i].trim();
//                 if (line.startsWith('-') || line.startsWith('•')) {
//                     let optionText = line.substring(1).trim();
//                     if (optionText.endsWith('*')) {
//                         optionText = optionText.slice(0, -1).trim();
//                         correctIndex = options.length;
//                     }
//                     options.push(optionText);
//                 }
//             }
//             if (options.length >= 2) {
//                 if (correctIndex === -1) correctIndex = 0;
//                 questions.push({
//                     question: this.formatQuestionText(question),
//                     options,
//                     correct: correctIndex
//                 });
//             }
//         }
//         return questions;
//     }

//     formatQuestionText(questionText) {
//         return questionText
//             .trim()
//             .replace(/\n\s*\n/g, '\n\n')
//             .replace(/^(\s+)/gm, '$1');
//     }

//     isPseudocode(text) {
//         const pseudocodePatterns = [
//             /\b(BEGIN|END|IF|THEN|ELSE|FOR|WHILE|FUNCTION|RETURN|PROCEDURE)\b/i,
//             /\b(TO|STEP|DO|LOOP|REPEAT|UNTIL)\b/i,
//             /^\s*(IF|FOR|WHILE|BEGIN|FUNCTION)/im,
//             /\s*(THEN|ELSE|END IF|END FOR|END WHILE)/i
//         ];
//         return pseudocodePatterns.some(pattern => pattern.test(text));
//     }

//     generateTest() {
//         const text = this.mcqInput.value.trim();
//         if (!text) {
//             this.showError("Please enter some MCQ questions.");
//             return;
//         }
//         try {
//             const parsedQuestions = this.parseQuestions(text);
//             if (parsedQuestions.length === 0) {
//                 this.showError("No valid questions found. Please check the format and try again.");
//                 return;
//             }
//             this.originalQuestions = [...parsedQuestions];
//             this.questions = this.shuffleArray(parsedQuestions);
//             this.hideError();
//             this.initializeTest();
//             this.showTestSection();
//         } catch (error) {
//             this.showError("Error parsing questions: " + error.message);
//         }
//     }

//     initializeTest() {
//         this.currentQuestionIndex = 0;
//         this.userAnswers = new Array(this.questions.length).fill(null);
//         this.flaggedQuestions.clear();
//         this.testStarted = true;
//         this.displayCurrentQuestion();
//         this.updateProgress();
//         this.updateNavigation();
//     }

//     showTestSection() {
//         this.inputSection.classList.add('hidden');
//         this.resultsSection.classList.add('hidden');
//         this.testSection.classList.remove('hidden');
//     }

//     showInputSection() {
//         this.testSection.classList.add('hidden');
//         this.resultsSection.classList.add('hidden');
//         this.inputSection.classList.remove('hidden');
//     }

//     showResultsSection() {
//         this.testSection.classList.add('hidden');
//         this.inputSection.classList.add('hidden');
//         this.resultsSection.classList.remove('hidden');
//     }

//     displayCurrentQuestion() {
//         const question = this.questions[this.currentQuestionIndex];
//         const formattedQuestion = this.formatQuestionForDisplay(question.question);
//         this.questionText.innerHTML = formattedQuestion;
//         this.questionText.className = this.isPseudocode(question.question)
//             ? 'question-text pseudocode-support'
//             : 'question-text multiline-support';

//         // Build option objects
//         const optionObjs = question.options.map((opt, idx) => ({
//             text: opt,
//             originalIndex: idx
//         }));
//         // Shuffle options
//         const shuffledOptions = this.shuffleOptions(optionObjs);
//         // Map for selection logic
//         this.displayedOptionMap = shuffledOptions.map(o => o.originalIndex);

//         this.optionsContainer.innerHTML = '';
//         shuffledOptions.forEach((optionObj, idx) => {
//             const isSelected = this.userAnswers[this.currentQuestionIndex] === optionObj.originalIndex;
//             const optionElement = document.createElement('div');
//             optionElement.className = 'option-item';
//             if (isSelected) optionElement.classList.add('selected');
//             optionElement.innerHTML = `
//                 <div class="option-content">
//                     <div class="option-letter">${String.fromCharCode(65 + idx)}</div>
//                     <div class="option-text">${this.escapeHtml(optionObj.text)}</div>
//                 </div>
//             `;
//             optionElement.addEventListener('click', () => {
//                 this.selectOption(optionObj.originalIndex);
//             });
//             this.optionsContainer.appendChild(optionElement);
//         });

//         this.updateFlagButton();
//     }

//     formatQuestionForDisplay(text) {
//         let formatted = this.escapeHtml(text).replace(/\n/g, '<br>');
//         if (this.isPseudocode(text)) {
//             const lines = formatted.split('<br>');
//             let inCode = false, result = [], codeLines = [];
//             lines.forEach(line => {
//                 const trimmed = line.trim();
//                 const isCodeLine = /\b(BEGIN|END|IF|THEN|ELSE|FOR|WHILE|FUNCTION|RETURN|PROCEDURE|TO|STEP|DO|LOOP|REPEAT|UNTIL)\b/i.test(trimmed)
//                     || /^\s*(IF|FOR|WHILE|BEGIN|FUNCTION)/i.test(trimmed)
//                     || /\s*(THEN|ELSE|END IF|END FOR|END WHILE)/i.test(trimmed);
//                 if (isCodeLine || (inCode && trimmed && !trimmed.endsWith('?'))) {
//                     if (!inCode) {
//                         inCode = true;
//                         if (result.length) result.push('');
//                     }
//                     codeLines.push(line);
//                 } else {
//                     if (inCode && codeLines.length) {
//                         result.push('<div class="pseudocode-block">', codeLines.join('<br>'), '</div>');
//                         codeLines = []; inCode = false;
//                     }
//                     if (trimmed) result.push(line);
//                 }
//             });
//             if (codeLines.length) result.push('<div class="pseudocode-block">', codeLines.join('<br>'), '</div>');
//             return result.join('<br>');
//         }
//         return formatted;
//     }

//     escapeHtml(text) {
//         const div = document.createElement('div');
//         div.textContent = text;
//         return div.innerHTML;
//     }

//     selectOption(index) {
//         this.userAnswers[this.currentQuestionIndex] = index;
//         this.displayCurrentQuestion();
//         this.updateProgress();
//         this.updateNavigation();
//     }

//     navigateQuestion(direction) {
//         const newIndex = this.currentQuestionIndex + direction;
//         if (newIndex >= 0 && newIndex < this.questions.length) {
//             this.currentQuestionIndex = newIndex;
//             this.displayCurrentQuestion();
//             this.updateProgress();
//             this.updateNavigation();
//         }
//     }

//     updateProgress() {
//         const current = this.currentQuestionIndex + 1;
//         const total = this.questions.length;
//         this.questionCounter.textContent = `Question ${current} of ${total}`;
//         this.progressFill.style.width = `${(current / total) * 100}%`;
//         this.answeredCount.textContent = `${this.userAnswers.filter(a => a !== null).length} of ${total} answered`;
//     }

//     updateNavigation() {
//         const isFirst = this.currentQuestionIndex === 0;
//         const isLast = this.currentQuestionIndex === this.questions.length - 1;
//         this.prevBtn.disabled = isFirst;
//         if (isLast) {
//             this.nextBtn.classList.add('hidden');
//             this.submitTestBtn.classList.remove('hidden');
//         } else {
//             this.nextBtn.classList.remove('hidden');
//             this.submitTestBtn.classList.add('hidden');
//         }
//     }

//     toggleFlag() {
//         const idx = this.currentQuestionIndex;
//         this.flaggedQuestions.has(idx) ? this.flaggedQuestions.delete(idx) : this.flaggedQuestions.add(idx);
//         this.updateFlagButton();
//     }

//     updateFlagButton() {
//         const flagged = this.flaggedQuestions.has(this.currentQuestionIndex);
//         this.flagText.textContent = flagged ? 'Unflag' : 'Flag for Review';
//         this.flagQuestionBtn.classList.toggle('btn--warning', flagged);
//     }

//     showSubmitModal() {
//         const unanswered = this.userAnswers.filter(a => a === null).length;
//         if (unanswered > 0) {
//             this.unansweredWarning.classList.remove('hidden');
//             this.unansweredCount.textContent = unanswered;
//         } else {
//             this.unansweredWarning.classList.add('hidden');
//         }
//         this.submitModal.classList.remove('hidden');
//     }

//     hideSubmitModal() {
//         this.submitModal.classList.add('hidden');
//     }

//     submitTest() {
//         this.hideSubmitModal();
//         this.calculateResults();
//         this.displayResults();
//         this.showResultsSection();
//     }

//     calculateResults() {
//         let correct = 0;
//         this.results = this.questions.map((q, i) => {
//             const ua = this.userAnswers[i];
//             const isCorr = ua === q.correct;
//             if (isCorr) correct++;
//             return {
//                 question: q.question,
//                 options: q.options,
//                 userAnswer: ua,
//                 correctAnswer: q.correct,
//                 isCorrect: isCorr,
//                 isFlagged: this.flaggedQuestions.has(i)
//             };
//         });
//         this.totalQuestions = this.questions.length;
//         this.correctCount = correct;
//         this.incorrectCount = this.totalQuestions - correct;
//         this.percentage = Math.round((correct / this.totalQuestions) * 100);
//     }

//     displayResults() {
//         this.scorePercentage.textContent = `${this.percentage}%`;
//         this.scoreText.textContent = `${this.correctCount} out of ${this.totalQuestions}`;
//         let grade = 'F';
//         if (this.percentage >= 90) grade = 'A+';
//         else if (this.percentage >= 80) grade = 'A';
//         else if (this.percentage >= 70) grade = 'B';
//         else if (this.percentage >= 60) grade = 'C';
//         else if (this.percentage >= 50) grade = 'D';
//         this.scoreDescription.textContent = `Grade: ${grade}`;
//         this.correctCountElement.textContent = this.correctCount;
//         this.incorrectCountElement.textContent = this.incorrectCount;
//         this.flaggedCountElement.textContent = this.flaggedQuestions.size;
//         const circle = document.querySelector('.score-circle');
//         circle.style.backgroundColor = this.percentage >= 70
//             ? 'var(--color-success)'
//             : this.percentage >= 50
//                 ? 'var(--color-warning)'
//                 : 'var(--color-error)';
//         this.displayDetailedResults();
//     }

//     displayDetailedResults() {
//         this.detailedResultsContainer.innerHTML = '';
//         this.results.forEach((res, i) => {
//             const elem = document.createElement('div');
//             elem.className = `result-item ${res.isCorrect ? 'correct' : 'incorrect'}`;
//             const uaText = res.userAnswer !== null ? res.options[res.userAnswer] : 'No answer';
//             const caText = res.options[res.correctAnswer];
//             const fq = this.formatQuestionForDisplay(res.question);
//             const qc = this.isPseudocode(res.question) ? 'result-question pseudocode-support' : 'result-question multiline-support';
//             elem.innerHTML = `
//                 <div class="result-header">
//                     <span class="result-number">Question ${i+1}</span>
//                     <span class="result-status ${res.isCorrect ? 'correct' : 'incorrect'}">
//                         ${res.isCorrect ? '✓ Correct' : '✗ Incorrect'}
//                     </span>
//                     ${res.isFlagged ? '<span class="flag-indicator">🚩 Flagged</span>' : ''}
//                 </div>
//                 <div class="${qc}">${fq}</div>
//                 <div class="result-answers">
//                     <div class="answer-row ${res.isCorrect ? 'correct-answer' : 'wrong-answer'}">
//                         <strong>Your Answer:</strong> ${uaText}
//                     </div>
//                     ${!res.isCorrect ? `
//                         <div class="answer-row correct-answer">
//                             <strong>Correct Answer:</strong> ${caText}
//                         </div>
//                     ` : ''}
//                 </div>
//             `;
//             this.detailedResultsContainer.appendChild(elem);
//         });
//     }

//     retakeTest() {
//         this.initializeTest();
//         this.showTestSection();
//     }

//     startNewTest() {
//         this.showInputSection();
//         this.questions = [];
//         this.originalQuestions = [];
//         this.currentQuestionIndex = 0;
//         this.userAnswers = [];
//         this.flaggedQuestions.clear();
//         this.testStarted = false;
//         this.results = [];
//     }

//     exportResults() {
//         const data = {
//             timestamp: new Date().toISOString(),
//             totalQuestions: this.totalQuestions,
//             correctAnswers: this.correctCount,
//             incorrectAnswers: this.incorrectCount,
//             percentage: this.percentage,
//             flaggedCount: this.flaggedQuestions.size,
//             results: this.results.map((r, i) => ({
//                 questionNumber: i+1,
//                 question: r.question,
//                 userAnswer: r.userAnswer !== null ? r.options[r.userAnswer] : 'No answer',
//                 correctAnswer: r.options[r.correctAnswer],
//                 isCorrect: r.isCorrect,
//                 isFlagged: r.isFlagged
//             }))
//         };
//         const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
//         const url = URL.createObjectURL(blob);
//         const link = document.createElement('a');
//         link.href = url;
//         link.download = `mcq-test-results-${new Date().toISOString().slice(0,19).replace(/:/g, '-')}.json`;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//         URL.revokeObjectURL(url);
//     }

//     showError(msg) {
//         this.parseError.textContent = msg;
//         this.parseError.classList.remove('hidden');
//     }

//     hideError() {
//         this.parseError.classList.add('hidden');
//     }
// }

// // Initialize the application when DOM is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     new MCQTestGenerator();
// });
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
        this.submitModal.addEventListener('click', (e) => {
            if (e.target === this.submitModal) {
                this.hideSubmitModal();
            }
        });
    }

    loadSampleData() {
        this.sampleQuestions = [
            { question: "Which system call creates a new process in UNIX?", options: ["fork", "exec", "create", "init"], correct: 0 },
            { question: "The OS component that decides which process runs next is:", options: ["Dispatcher", "Scheduler", "Memory manager", "File manager"], correct: 1 },
            { question: "PCB stands for:", options: ["Process Control Block", "Program Control Buffer", "Process Code Backup", "None"], correct: 0 }
        ];
    }

    loadSampleQuestions() {
        const sampleText = `1. Which system call creates a new process in UNIX?
- fork*
- exec
- create
- init
2. Analyze the following pseudocode for bubble sort:
BEGIN BubbleSort
    FOR i = 0 TO n-2
        FOR j = 0 TO n-2-i
            IF arr[j] > arr[j+1] THEN
                SWAP arr[j] AND arr[j+1]
            END IF
        END FOR
    END FOR
END BubbleSort
What is the time complexity of this algorithm?
- O(n)*
- O(n²)*
- O(n log n)
- O(1)
3. Consider this pseudocode:
FUNCTION findMax(array, size)
    max = array[0]
    FOR i = 1 TO size-1
        IF array[i] > max THEN
            max = array[i]
        END IF
    END FOR
    RETURN max
END FUNCTION
What does this algorithm do?
- Finds the minimum element*
- Finds the maximum element*
- Sorts the array
- Counts elements
4. Given the following recursive pseudocode:
FUNCTION factorial(n)
    IF n = 0 OR n = 1 THEN
        RETURN 1
    ELSE
        RETURN n * factorial(n-1)
    END IF
END FUNCTION
What is factorial(5)?
- 100
- 120*
- 125
- 150
5. Examine this binary search pseudocode:
FUNCTION binarySearch(arr, target, low, high)
    WHILE low <= high
        mid = (low + high) / 2
        IF arr[mid] = target THEN
            RETURN mid
        ELSE IF arr[mid] < target THEN
            low = mid + 1
        ELSE
            high = mid - 1
        END IF
    END WHILE
    RETURN -1
END FUNCTION
What is the prerequisite for this algorithm to work correctly?
- Array must be sorted*
- Array must be unsorted
- Array must have odd number of elements
- Array must contain unique elements`;
        this.mcqInput.value = sampleText;
    }

    // Fisher-Yates shuffle algorithm for randomizing questions
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Fisher-Yates shuffle for options - FIXED VERSION
    shuffleOptions(options) {
        const arr = [...options]; // Create a proper copy
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    parseQuestions(text) {
        const questions = [];
        const questionBlocks = text.trim().split(/\n\s*\n/);
        for (let block of questionBlocks) {
            if (!block.trim()) continue;
            const lines = block.trim().split('\n');
            if (lines.length < 2) continue;
            const questionLine = lines[0].trim();
            const questionMatch = questionLine.match(/^\d+\.\s*(.+)$/);
            if (!questionMatch) continue;
            let question = questionMatch[1];
            let questionEndIndex = 1;
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();
                if (!line.startsWith('-') && !line.startsWith('•') && !line.startsWith('*')) {
                    question += '\n' + line;
                    questionEndIndex = i + 1;
                } else {
                    break;
                }
            }
            const options = [];
            let correctIndex = -1;
            for (let i = questionEndIndex; i < lines.length; i++) {
                const line = lines[i].trim();
                if (line.startsWith('-') || line.startsWith('•')) {
                    let optionText = line.substring(1).trim();
                    if (optionText.endsWith('*')) {
                        optionText = optionText.slice(0, -1).trim();
                        correctIndex = options.length;
                    }
                    options.push(optionText);
                }
            }
            if (options.length >= 2) {
                if (correctIndex === -1) correctIndex = 0;
                questions.push({
                    question: this.formatQuestionText(question),
                    options,
                    correct: correctIndex
                });
            }
        }
        return questions;
    }

    formatQuestionText(questionText) {
        return questionText
            .trim()
            .replace(/\n\s*\n/g, '\n\n')
            .replace(/^(\s+)/gm, '$1');
    }

    isPseudocode(text) {
        const pseudocodePatterns = [
            /\b(BEGIN|END|IF|THEN|ELSE|FOR|WHILE|FUNCTION|RETURN|PROCEDURE)\b/i,
            /\b(TO|STEP|DO|LOOP|REPEAT|UNTIL)\b/i,
            /^\s*(IF|FOR|WHILE|BEGIN|FUNCTION)/im,
            /\s*(THEN|ELSE|END IF|END FOR|END WHILE)/i
        ];
        return pseudocodePatterns.some(pattern => pattern.test(text));
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

    // FIXED displayCurrentQuestion method
    displayCurrentQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        const formattedQuestion = this.formatQuestionForDisplay(question.question);
        this.questionText.innerHTML = formattedQuestion;
        this.questionText.className = this.isPseudocode(question.question)
            ? 'question-text pseudocode-support'
            : 'question-text multiline-support';

        // Clear container first
        this.optionsContainer.innerHTML = '';

        // Create option objects with original indices
        const optionObjs = question.options.map((option, index) => ({
            text: option,
            originalIndex: index
        }));

        // Shuffle the options - this WILL work now
        const shuffledOptions = this.shuffleOptions(optionObjs);
        
        // Debug: Console log to verify shuffling (remove this line later)
        console.log('Original order:', question.options);
        console.log('Shuffled order:', shuffledOptions.map(opt => opt.text));

        // Create the DOM elements for shuffled options
        shuffledOptions.forEach((optionObj, displayIndex) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option-item';
            
            // Check if this original option was selected
            const isSelected = this.userAnswers[this.currentQuestionIndex] === optionObj.originalIndex;
            if (isSelected) {
                optionElement.classList.add('selected');
            }

            optionElement.innerHTML = `
                <div class="option-content">
                    <div class="option-letter">${String.fromCharCode(65 + displayIndex)}</div>
                    <div class="option-text">${this.escapeHtml(optionObj.text)}</div>
                </div>
            `;

            // When clicked, select the ORIGINAL index, not the display index
            optionElement.addEventListener('click', () => {
                this.selectOption(optionObj.originalIndex);
            });

            this.optionsContainer.appendChild(optionElement);
        });

        this.updateFlagButton();
    }

    formatQuestionForDisplay(text) {
        let formatted = this.escapeHtml(text).replace(/\n/g, '<br>');
        if (this.isPseudocode(text)) {
            const lines = formatted.split('<br>');
            let inCode = false, result = [], codeLines = [];
            lines.forEach(line => {
                const trimmed = line.trim();
                const isCodeLine = /\b(BEGIN|END|IF|THEN|ELSE|FOR|WHILE|FUNCTION|RETURN|PROCEDURE|TO|STEP|DO|LOOP|REPEAT|UNTIL)\b/i.test(trimmed)
                    || /^\s*(IF|FOR|WHILE|BEGIN|FUNCTION)/i.test(trimmed)
                    || /\s*(THEN|ELSE|END IF|END FOR|END WHILE)/i.test(trimmed);
                if (isCodeLine || (inCode && trimmed && !trimmed.endsWith('?'))) {
                    if (!inCode) {
                        inCode = true;
                        if (result.length) result.push('');
                    }
                    codeLines.push(line);
                } else {
                    if (inCode && codeLines.length) {
                        result.push('<div class="pseudocode-block">', codeLines.join('<br>'), '</div>');
                        codeLines = []; inCode = false;
                    }
                    if (trimmed) result.push(line);
                }
            });
            if (codeLines.length) result.push('<div class="pseudocode-block">', codeLines.join('<br>'), '</div>');
            return result.join('<br>');
        }
        return formatted;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
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
        this.questionCounter.textContent = `Question ${current} of ${total}`;
        this.progressFill.style.width = `${(current / total) * 100}%`;
        this.answeredCount.textContent = `${this.userAnswers.filter(a => a !== null).length} of ${total} answered`;
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
        const idx = this.currentQuestionIndex;
        this.flaggedQuestions.has(idx) ? this.flaggedQuestions.delete(idx) : this.flaggedQuestions.add(idx);
        this.updateFlagButton();
    }

    updateFlagButton() {
        const flagged = this.flaggedQuestions.has(this.currentQuestionIndex);
        this.flagText.textContent = flagged ? 'Unflag' : 'Flag for Review';
        this.flagQuestionBtn.classList.toggle('btn--warning', flagged);
    }

    showSubmitModal() {
        const unanswered = this.userAnswers.filter(a => a === null).length;
        if (unanswered > 0) {
            this.unansweredWarning.classList.remove('hidden');
            this.unansweredCount.textContent = unanswered;
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
        let correct = 0;
        this.results = this.questions.map((q, i) => {
            const ua = this.userAnswers[i];
            const isCorr = ua === q.correct;
            if (isCorr) correct++;
            return {
                question: q.question,
                options: q.options,
                userAnswer: ua,
                correctAnswer: q.correct,
                isCorrect: isCorr,
                isFlagged: this.flaggedQuestions.has(i)
            };
        });
        this.totalQuestions = this.questions.length;
        this.correctCount = correct;
        this.incorrectCount = this.totalQuestions - correct;
        this.percentage = Math.round((correct / this.totalQuestions) * 100);
    }

    displayResults() {
        this.scorePercentage.textContent = `${this.percentage}%`;
        this.scoreText.textContent = `${this.correctCount} out of ${this.totalQuestions}`;
        let grade = 'F';
        if (this.percentage >= 90) grade = 'A+';
        else if (this.percentage >= 80) grade = 'A';
        else if (this.percentage >= 70) grade = 'B';
        else if (this.percentage >= 60) grade = 'C';
        else if (this.percentage >= 50) grade = 'D';
        this.scoreDescription.textContent = `Grade: ${grade}`;
        this.correctCountElement.textContent = this.correctCount;
        this.incorrectCountElement.textContent = this.incorrectCount;
        this.flaggedCountElement.textContent = this.flaggedQuestions.size;
        const circle = document.querySelector('.score-circle');
        circle.style.backgroundColor = this.percentage >= 70
            ? 'var(--color-success)'
            : this.percentage >= 50
                ? 'var(--color-warning)'
                : 'var(--color-error)';
        this.displayDetailedResults();
    }

    displayDetailedResults() {
        this.detailedResultsContainer.innerHTML = '';
        this.results.forEach((res, i) => {
            const elem = document.createElement('div');
            elem.className = `result-item ${res.isCorrect ? 'correct' : 'incorrect'}`;
            const uaText = res.userAnswer !== null ? res.options[res.userAnswer] : 'No answer';
            const caText = res.options[res.correctAnswer];
            const fq = this.formatQuestionForDisplay(res.question);
            const qc = this.isPseudocode(res.question) ? 'result-question pseudocode-support' : 'result-question multiline-support';
            elem.innerHTML = `
                <div class="result-header">
                    <span class="result-number">Question ${i+1}</span>
                    <span class="result-status ${res.isCorrect ? 'correct' : 'incorrect'}">
                        ${res.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                    ${res.isFlagged ? '<span class="flag-indicator">🚩 Flagged</span>' : ''}
                </div>
                <div class="${qc}">${fq}</div>
                <div class="result-answers">
                    <div class="answer-row ${res.isCorrect ? 'correct-answer' : 'wrong-answer'}">
                        <strong>Your Answer:</strong> ${uaText}
                    </div>
                    ${!res.isCorrect ? `
                        <div class="answer-row correct-answer">
                            <strong>Correct Answer:</strong> ${caText}
                        </div>
                    ` : ''}
                </div>
            `;
            this.detailedResultsContainer.appendChild(elem);
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
        const data = {
            timestamp: new Date().toISOString(),
            totalQuestions: this.totalQuestions,
            correctAnswers: this.correctCount,
            incorrectAnswers: this.incorrectCount,
            percentage: this.percentage,
            flaggedCount: this.flaggedQuestions.size,
            results: this.results.map((r, i) => ({
                questionNumber: i+1,
                question: r.question,
                userAnswer: r.userAnswer !== null ? r.options[r.userAnswer] : 'No answer',
                correctAnswer: r.options[r.correctAnswer],
                isCorrect: r.isCorrect,
                isFlagged: r.isFlagged
            }))
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `mcq-test-results-${new Date().toISOString().slice(0,19).replace(/:/g, '-')}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    showError(msg) {
        this.parseError.textContent = msg;
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
