/* ============================================
   ENACK ACADEMY — Progress Tracking (localStorage)
   ============================================ */

const Progress = (() => {
  'use strict';

  const STORAGE_KEY = 'enack_academy_progress';

  // ── Default Data Structure ──
  function getDefaultData() {
    return {
      completedLessons: [],    // Array of chapter IDs that have been marked complete
      quizScores: {},          // { chapterId: { score: X, total: Y, date: 'ISO' } }
      lastVisited: null,       // Last chapter visited
      totalStudyTime: 0,       // In minutes (tracked loosely)
      streak: 0,               // Days streak
      lastActiveDate: null,    // Last active date
    };
  }

  // ── Load from localStorage ──
  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        return { ...getDefaultData(), ...JSON.parse(raw) };
      }
    } catch (e) {
      console.warn('Progress: Could not load data', e);
    }
    return getDefaultData();
  }

  // ── Save to localStorage ──
  function save(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Progress: Could not save data', e);
    }
  }

  // ── Mark lesson as completed ──
  function completeLesson(chapterId) {
    const data = load();
    if (!data.completedLessons.includes(chapterId)) {
      data.completedLessons.push(chapterId);
    }
    data.lastVisited = chapterId;
    updateStreak(data);
    save(data);
    return data;
  }

  // ── Toggle lesson completion ──
  function toggleLesson(chapterId) {
    const data = load();
    const index = data.completedLessons.indexOf(chapterId);
    if (index > -1) {
      data.completedLessons.splice(index, 1);
    } else {
      data.completedLessons.push(chapterId);
    }
    data.lastVisited = chapterId;
    updateStreak(data);
    save(data);
    return data;
  }

  // ── Save quiz score ──
  function saveQuizScore(chapterId, score, total) {
    const data = load();
    data.quizScores[chapterId] = {
      score,
      total,
      date: new Date().toISOString(),
      percentage: Math.round((score / total) * 100)
    };
    data.lastVisited = chapterId;
    updateStreak(data);
    save(data);
    return data;
  }

  // ── Get quiz score ──
  function getQuizScore(chapterId) {
    const data = load();
    return data.quizScores[chapterId] || null;
  }

  // ── Check if lesson completed ──
  function isLessonComplete(chapterId) {
    const data = load();
    return data.completedLessons.includes(chapterId);
  }

  // ── Get chapter status ──
  function getChapterStatus(chapterId) {
    const data = load();
    const lessonDone = data.completedLessons.includes(chapterId);
    const quizDone = data.quizScores[chapterId] !== undefined;

    if (lessonDone && quizDone) return 'done';
    if (lessonDone || quizDone) return 'partial';
    return 'new';
  }

  // ── Update streak ──
  function updateStreak(data) {
    const today = new Date().toDateString();
    if (data.lastActiveDate === today) return;

    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (data.lastActiveDate === yesterday) {
      data.streak++;
    } else if (data.lastActiveDate !== today) {
      data.streak = 1;
    }
    data.lastActiveDate = today;
  }

  // ── Get global progress percentage ──
  function getGlobalProgress() {
    const data = load();
    const totalChapters = getTotalChapters();
    if (totalChapters === 0) return 0;
    return Math.round((data.completedLessons.length / totalChapters) * 100);
  }

  // ── Get total chapters (based on course data) ──
  function getTotalChapters() {
    return typeof CourseData !== 'undefined' ? CourseData.getAllChapterIds().length : 25;
  }

  // ── Get domain progress ──
  function getDomainProgress(domainId) {
    const data = load();
    if (typeof CourseData === 'undefined') return 0;
    
    const domainChapters = CourseData.getChaptersByDomain(domainId);
    if (domainChapters.length === 0) return 0;

    const completed = domainChapters.filter(ch => 
      data.completedLessons.includes(ch.id)
    ).length;
    return Math.round((completed / domainChapters.length) * 100);
  }

  // ── Get stats ──
  function getStats() {
    const data = load();
    return {
      lessonsCompleted: data.completedLessons.length,
      quizzesTaken: Object.keys(data.quizScores).length,
      averageScore: getAverageScore(data),
      streak: data.streak,
      globalProgress: getGlobalProgress()
    };
  }

  function getAverageScore(data) {
    const scores = Object.values(data.quizScores);
    if (scores.length === 0) return 0;
    const total = scores.reduce((sum, s) => sum + s.percentage, 0);
    return Math.round(total / scores.length);
  }

  // ── Update all chapter status icons on catalog page ──
  function updateCatalogStatus() {
    document.querySelectorAll('.chapter-card').forEach(card => {
      const chapterId = card.dataset.chapter;
      if (!chapterId) return;

      const status = getChapterStatus(chapterId);
      const statusEl = card.querySelector('.chapter-card__status');
      if (!statusEl) return;

      statusEl.className = 'chapter-card__status';
      
      if (status === 'done') {
        statusEl.classList.add('chapter-card__status--done');
        statusEl.textContent = '✓';
      } else if (status === 'partial') {
        statusEl.classList.add('chapter-card__status--partial');
        statusEl.textContent = '◐';
      } else {
        statusEl.classList.add('chapter-card__status--new');
        statusEl.textContent = '';
      }
    });
  }

  // ── Update domain progress bars on homepage ──
  function updateDomainProgress() {
    document.querySelectorAll('.domain-card').forEach(card => {
      const domain = card.dataset.domain;
      if (!domain) return;

      const progress = getDomainProgress(domain);
      const fill = card.querySelector('.progress-bar__fill');
      const label = card.querySelector('.domain-card__progress-percent');
      
      if (fill) fill.style.width = progress + '%';
      if (label) label.textContent = progress + '%';
    });
  }

  // ── Reset all data ──
  function reset() {
    localStorage.removeItem(STORAGE_KEY);
  }

  // ── Init ──
  function init() {
    updateCatalogStatus();
    updateDomainProgress();
  }

  return {
    load,
    completeLesson,
    toggleLesson,
    saveQuizScore,
    getQuizScore,
    isLessonComplete,
    getChapterStatus,
    getGlobalProgress,
    getDomainProgress,
    getStats,
    updateCatalogStatus,
    updateDomainProgress,
    reset,
    init
  };
})();

document.addEventListener('DOMContentLoaded', Progress.init);
