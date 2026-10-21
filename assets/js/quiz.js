/* ============================================
   ENACK ACADEMY — Quiz Engine
   ============================================ */

const Quiz = (() => {
  'use strict';

  let currentQuiz = null;
  let answeredQuestions = new Set();
  let score = 0;

  // ── Initialize quiz for a chapter ──
  function init(chapterId) {
    if (typeof CourseData === 'undefined') return;
    
    const chapter = CourseData.getChapter(chapterId);
    if (!chapter || !chapter.quiz) return;

    currentQuiz = {
      chapterId,
      questions: chapter.quiz,
      total: chapter.quiz.length
    };

    answeredQuestions = new Set();
    score = 0;

    renderQuiz();
    updateScoreDisplay();

    // Check for previous score
    const prevScore = Progress.getQuizScore(chapterId);
    if (prevScore) {
      showPreviousScore(prevScore);
    }
  }

  // ── Render quiz questions ──
  function renderQuiz() {
    const container = document.getElementById('quiz-questions');
    if (!container || !currentQuiz) return;

    container.innerHTML = '';

    currentQuiz.questions.forEach((q, index) => {
      const card = createQuestionCard(q, index);
      container.appendChild(card);
    });
  }

  // ── Create a question card element ──
  function createQuestionCard(question, index) {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.dataset.index = index;

    const letters = ['A', 'B', 'C', 'D', 'E'];

    card.innerHTML = `
      <div class="question-card__number">Question ${index + 1} / ${currentQuiz.total}</div>
      <div class="question-card__text">${question.question}</div>
      <div class="question-card__options">
        ${question.options.map((opt, i) => `
          <button class="option-btn" data-index="${i}" data-question="${index}">
            <span class="option-btn__letter">${letters[i]}</span>
            <span class="option-btn__text">${opt}</span>
          </button>
        `).join('')}
      </div>
      <div class="question-card__feedback" id="feedback-${index}"></div>
    `;

    // Attach click handlers
    card.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => handleAnswer(index, parseInt(btn.dataset.index)));
    });

    return card;
  }

  // ── Handle answer selection ──
  function handleAnswer(questionIndex, optionIndex) {
    if (answeredQuestions.has(questionIndex)) return;

    answeredQuestions.add(questionIndex);
    const question = currentQuiz.questions[questionIndex];
    const isCorrect = optionIndex === question.correct;

    if (isCorrect) score++;

    // Update option styles
    const card = document.querySelector(`.question-card[data-index="${questionIndex}"]`);
    const options = card.querySelectorAll('.option-btn');

    options.forEach((opt, i) => {
      opt.classList.add('option-btn--disabled');
      if (i === question.correct) {
        opt.classList.add('option-btn--correct');
      }
      if (i === optionIndex && !isCorrect) {
        opt.classList.add('option-btn--incorrect');
      }
    });

    // Show feedback
    const feedback = document.getElementById(`feedback-${questionIndex}`);
    if (feedback) {
      feedback.className = 'question-card__feedback question-card__feedback--show';
      if (isCorrect) {
        feedback.classList.add('question-card__feedback--correct');
        feedback.innerHTML = `
          <strong>✓ Correct !</strong>
          ${question.explanation}
        `;
      } else {
        feedback.classList.add('question-card__feedback--incorrect');
        feedback.innerHTML = `
          <strong>✗ Incorrect</strong>
          ${question.explanation}
        `;
      }
    }

    // Update score display
    updateScoreDisplay();

    // Check if all questions answered
    if (answeredQuestions.size === currentQuiz.total) {
      setTimeout(() => showResults(), 800);
    }
  }

  // ── Update score display ──
  function updateScoreDisplay() {
    const scoreValue = document.querySelector('.quiz-header__score-value');
    if (scoreValue) {
      scoreValue.textContent = `${score}/${currentQuiz.total}`;
    }
  }

  // ── Show previous score ──
  function showPreviousScore(prev) {
    const header = document.querySelector('.quiz-header__info p');
    if (header) {
      const date = new Date(prev.date).toLocaleDateString('fr-FR');
      header.textContent = `Score précédent : ${prev.score}/${prev.total} (${prev.percentage}%) — ${date}`;
    }
  }

  // ── Show final results ──
  function showResults() {
    const percentage = Math.round((score / currentQuiz.total) * 100);
    
    // Save to progress
    Progress.saveQuizScore(currentQuiz.chapterId, score, currentQuiz.total);

    const results = document.getElementById('quiz-results');
    if (!results) return;

    let emoji, title, message;
    if (percentage >= 90) {
      emoji = '🏆';
      title = 'Excellent !';
      message = 'Maîtrise exceptionnelle ! Vous êtes prêt(e) à passer au chapitre suivant.';
    } else if (percentage >= 70) {
      emoji = '🎉';
      title = 'Très bien !';
      message = 'Bonne compréhension du sujet. Quelques points à revoir pour atteindre la perfection.';
    } else if (percentage >= 50) {
      emoji = '💪';
      title = 'Pas mal !';
      message = 'Les bases sont là, mais il serait bon de relire le cours avant de réessayer.';
    } else {
      emoji = '📚';
      title = 'Continuez à apprendre !';
      message = 'Nous vous conseillons de relire attentivement le cours et de réessayer ensuite.';
    }

    results.innerHTML = `
      <div class="quiz-results__emoji">${emoji}</div>
      <h3 class="quiz-results__title">${title}</h3>
      <div class="quiz-results__score">${percentage}%</div>
      <p class="quiz-results__message">${message}</p>
      <p style="font-size: var(--fs-sm); color: var(--clr-text-muted); margin-bottom: var(--sp-6);">
        Vous avez obtenu <strong style="color: var(--clr-text-primary);">${score}</strong> bonne(s) réponse(s) sur <strong style="color: var(--clr-text-primary);">${currentQuiz.total}</strong>.
      </p>
      <div class="quiz-results__actions">
        <button class="btn btn--secondary" onclick="Quiz.restart()">
          🔄 Recommencer
        </button>
        <button class="btn btn--primary" onclick="document.querySelector('[data-tab=\\'tab-learning\\']').click()">
          📖 Revoir le cours
        </button>
      </div>
    `;

    results.classList.add('quiz-results--show');
    results.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Update nav progress
    if (typeof Navigation !== 'undefined') {
      Navigation.updateNavProgress();
    }
  }

  // ── Restart quiz ──
  function restart() {
    if (!currentQuiz) return;
    const results = document.getElementById('quiz-results');
    if (results) {
      results.classList.remove('quiz-results--show');
      results.innerHTML = '';
    }
    answeredQuestions = new Set();
    score = 0;
    renderQuiz();
    updateScoreDisplay();
    window.scrollTo({ top: document.querySelector('.quiz-container').offsetTop - 100, behavior: 'smooth' });
  }

  return { init, restart };
})();
