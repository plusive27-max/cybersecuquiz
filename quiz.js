// CyberSecuQuiz - Main Application Logic
// Handles quiz flow, scoring, localStorage, and results

class CyberSecuQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.answers = []; // Store user's answers for review
        this.categoryScores = {
            "Phishing Recognition": { correct: 0, total: 0 },
            "Password Security": { correct: 0, total: 0 },
            "Social Engineering": { correct: 0, total: 0 },
            "Malware & Safe Browsing": { correct: 0, total: 0 }
        };
        
        this.init();
    }

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.checkForSavedProgress();
    }

    cacheDOM() {
        // Screens
        this.startScreen = document.getElementById('start-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');
        this.reviewScreen = document.getElementById('review-screen');
        
        // Buttons
        this.startBtn = document.getElementById('start-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.restartBtn = document.getElementById('restart-btn');
        this.reviewBtn = document.getElementById('review-btn');
        this.backToResultsBtn = document.getElementById('back-to-results');
        
        // Quiz elements
        this.questionNumber = document.getElementById('question-number');
        this.categoryBadge = document.getElementById('category-badge');
        this.scenarioText = document.getElementById('scenario-text');
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.feedbackBox = document.getElementById('feedback-box');
        this.feedbackContent = document.getElementById('feedback-content');
        this.progressFill = document.getElementById('progress-fill');
        
        // Results elements
        this.scorePercentage = document.getElementById('score-percentage');
        this.scoreText = document.getElementById('score-text');
        this.categoryStats = document.getElementById('category-stats');
        this.recommendationList = document.getElementById('recommendation-list');
        this.reviewContainer = document.getElementById('review-container');
    }

    bindEvents() {
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
        this.reviewBtn.addEventListener('click', () => this.showReview());
        this.backToResultsBtn.addEventListener('click', () => this.showResults());
    }

    checkForSavedProgress() {
        const saved = localStorage.getItem('cybersecuquiz_progress');
        if (saved) {
            const progress = JSON.parse(saved);
            if (progress.currentQuestion > 0 && progress.currentQuestion < quizData.length) {
                if (confirm('You have a quiz in progress. Resume where you left off?')) {
                    this.restoreProgress(progress);
                } else {
                    localStorage.removeItem('cybersecuquiz_progress');
                }
            }
        }
    }

    restoreProgress(progress) {
        this.currentQuestion = progress.currentQuestion;
        this.score = progress.score;
        this.answers = progress.answers;
        this.categoryScores = progress.categoryScores;
        this.showScreen(this.quizScreen);
        this.loadQuestion();
    }

    saveProgress() {
        const progress = {
            currentQuestion: this.currentQuestion,
            score: this.score,
            answers: this.answers,
            categoryScores: this.categoryScores
        };
        localStorage.setItem('cybersecuquiz_progress', JSON.stringify(progress));
    }

    startQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.answers = [];
        this.categoryScores = {
            "Phishing Recognition": { correct: 0, total: 0 },
            "Password Security": { correct: 0, total: 0 },
            "Social Engineering": { correct: 0, total: 0 },
            "Malware & Safe Browsing": { correct: 0, total: 0 }
        };
        
        localStorage.removeItem('cybersecuquiz_progress');
        this.showScreen(this.quizScreen);
        this.loadQuestion();
    }

    showScreen(screen) {
        [this.startScreen, this.quizScreen, this.resultsScreen, this.reviewScreen].forEach(s => {
            s.classList.remove('active');
        });
        screen.classList.add('active');
    }

    loadQuestion() {
        const question = quizData[this.currentQuestion];
        
        // Update progress
        const progress = ((this.currentQuestion + 1) / quizData.length) * 100;
        this.progressFill.style.width = `${progress}%`;
        
        // Update question info
        this.questionNumber.textContent = `Question ${this.currentQuestion + 1} of ${quizData.length}`;
        this.categoryBadge.textContent = question.category;
        
        // Update content
        this.scenarioText.textContent = question.scenario;
        this.questionText.textContent = question.question;
        
        // Clear and create options
        this.optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.addEventListener('click', () => this.selectAnswer(index));
            this.optionsContainer.appendChild(btn);
        });
        
        // Hide feedback
        this.feedbackBox.classList.add('hidden');
        this.feedbackBox.className = 'feedback hidden';
    }

    selectAnswer(selectedIndex) {
        const question = quizData[this.currentQuestion];
        const isCorrect = selectedIndex === question.correct;
        
        // Update score
        if (isCorrect) {
            this.score++;
            this.categoryScores[question.category].correct++;
        }
        this.categoryScores[question.category].total++;
        
        // Store answer for review
        this.answers.push({
            question: question,
            selected: selectedIndex,
            correct: isCorrect
        });
        
        // Visual feedback
        const buttons = this.optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach((btn, index) => {
            btn.disabled = true;
            if (index === question.correct) {
                btn.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        // Show feedback box
        this.feedbackBox.classList.remove('hidden');
        this.feedbackBox.classList.add(isCorrect ? 'correct' : 'incorrect');
        
        this.feedbackContent.innerHTML = `
            <h4>${isCorrect ? '✅ Correct!' : '❌ Incorrect'}</h4>
            <p>${question.feedback}</p>
        `;
        
        // Save progress
        this.saveProgress();
    }

    nextQuestion() {
        this.currentQuestion++;
        
        if (this.currentQuestion < quizData.length) {
            this.loadQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        this.showScreen(this.resultsScreen);
        localStorage.removeItem('cybersecuquiz_progress');
        
        // Calculate percentage
        const percentage = Math.round((this.score / quizData.length) * 100);
        this.scorePercentage.textContent = `${percentage}%`;
        this.scoreText.textContent = `You scored ${this.score} out of ${quizData.length}`;
        
        // Color code the score circle
        const circle = this.scorePercentage.parentElement;
        if (percentage >= 80) {
            circle.style.background = 'var(--success)';
        } else if (percentage >= 60) {
            circle.style.background = 'var(--warning)';
        } else {
            circle.style.background = 'var(--error)';
        }
        
        // Category breakdown
        this.categoryStats.innerHTML = '';
        for (const [category, stats] of Object.entries(this.categoryScores)) {
            if (stats.total > 0) {
                const catPercentage = Math.round((stats.correct / stats.total) * 100);
                const div = document.createElement('div');
                div.className = 'category-stat';
                div.innerHTML = `
                    <span>${category}</span>
                    <span>${stats.correct}/${stats.total} (${catPercentage}%)</span>
                `;
                this.categoryStats.appendChild(div);
            }
        }
        
        // Recommendations
        this.generateRecommendations();
        
        // Generate QR code placeholder (you can integrate a real QR library here)
        this.generateResultQR(percentage);
    }

    generateRecommendations() {
        this.recommendationList.innerHTML = '';
        const recommendations = [];
        
        // Check category performance
        for (const [category, stats] of Object.entries(this.categoryScores)) {
            if (stats.total > 0) {
                const percentage = (stats.correct / stats.total) * 100;
                if (percentage < 60) {
                    recommendations.push(`Review <strong>${category}</strong> — consider additional training in this area`);
                }
            }
        }
        
        // General recommendations
        if (this.score < 15) {
            recommendations.push('Complete the quiz again after reviewing cybersecurity fundamentals');
        }
        if (!recommendations.some(r => r.includes('Password Security'))) {
            recommendations.push('Excellent password security knowledge — share these practices with colleagues');
        }
        
        recommendations.forEach(rec => {
            const li = document.createElement('li');
            li.innerHTML = rec;
            this.recommendationList.appendChild(li);
        });
    }

    generateResultQR(percentage) {
    const qrBox = document.getElementById('qr-placeholder');
    qrBox.innerHTML = ''; // Clear placeholder
    
    // Generate QR with current score
    const shareText = `I scored ${percentage}% on CyberSecuQuiz!`;
    
    new QRCode(qrBox, {
        text: shareText,
        width: 180,
        height: 180,
        colorDark: "#2563eb",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
    });
}
    }

    showReview() {
        this.showScreen(this.reviewScreen);
        this.reviewContainer.innerHTML = '';
        
        this.answers.forEach((answer, index) => {
            const div = document.createElement('div');
            div.className = `review-item ${answer.correct ? 'correct' : 'incorrect'}`;
            div.innerHTML = `
                <h4>Q${index + 1}: ${answer.question.category}</h4>
                <p><strong>Scenario:</strong> ${answer.question.scenario}</p>
                <p><strong>Your answer:</strong> ${answer.question.options[answer.selected]}</p>
                <p><strong>Correct answer:</strong> ${answer.question.options[answer.question.correct]}</p>
                <p style="margin-top: 10px; font-style: italic;">${answer.question.feedback}</p>
            `;
            this.reviewContainer.appendChild(div);
        });
    }

    restartQuiz() {
        this.startQuiz();
    }
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    new CyberSecuQuiz();
});