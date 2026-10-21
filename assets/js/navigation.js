/* ============================================
   ENACK ACADEMY — Navigation & UI Controller
   ============================================ */

const Navigation = (() => {
  'use strict';

  // ── Navbar scroll behavior ──
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;
    const SCROLL_THRESHOLD = 50;

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > SCROLL_THRESHOLD) {
        navbar.classList.add('navbar--scrolled');
      } else {
        navbar.classList.remove('navbar--scrolled');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ── Mobile menu ──
  function initMobileMenu() {
    const burger = document.querySelector('.navbar__burger');
    const links = document.querySelector('.navbar__links');
    if (!burger || !links) return;

    burger.addEventListener('click', () => {
      burger.classList.toggle('navbar__burger--active');
      links.classList.toggle('navbar__links--open');
      document.body.style.overflow = links.classList.contains('navbar__links--open') ? 'hidden' : '';
    });

    // Close menu on link click
    links.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('navbar__burger--active');
        links.classList.remove('navbar__links--open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Active page highlight ──
  function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar__link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('navbar__link--active');
      }
    });
  }

  // ── FAQ Accordion ──
  function initFAQ() {
    const faqItems = document.querySelectorAll('.faq__item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq__question');
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('faq__item--open');
        // Close all
        faqItems.forEach(i => i.classList.remove('faq__item--open'));
        // Toggle current
        if (!isOpen) {
          item.classList.add('faq__item--open');
        }
      });
    });
  }

  // ── Chapter Tabs ──
  function initTabs() {
    const tabs = document.querySelectorAll('.chapter-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    if (tabs.length === 0) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        tabs.forEach(t => t.classList.remove('chapter-tab--active'));
        tabContents.forEach(c => c.classList.remove('tab-content--active'));

        tab.classList.add('chapter-tab--active');
        const targetContent = document.getElementById(target);
        if (targetContent) {
          targetContent.classList.add('tab-content--active');
        }
      });
    });
  }

  // ── Catalog Filters ──
  function initCatalogFilters() {
    const filters = document.querySelectorAll('.catalog__filter');
    const sections = document.querySelectorAll('.catalog__domain-section');
    if (filters.length === 0) return;

    filters.forEach(filter => {
      filter.addEventListener('click', () => {
        const domain = filter.dataset.filter;

        filters.forEach(f => f.classList.remove('catalog__filter--active'));
        filter.classList.add('catalog__filter--active');

        sections.forEach(section => {
          if (domain === 'all' || section.dataset.domain === domain) {
            section.style.display = '';
            section.style.animation = 'fadeInUp 0.4s var(--ease-out) both';
          } else {
            section.style.display = 'none';
          }
        });
      });
    });
  }

  // ── Scroll Reveal ──
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));
  }

  // ── Smooth scroll for anchor links ──
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ── Update mini progress in navbar ──
  function updateNavProgress() {
    const progressFill = document.querySelector('.navbar__progress-fill');
    const progressText = document.querySelector('.navbar__progress-text');
    if (!progressFill || !progressText) return;

    const progress = Progress.getGlobalProgress();
    progressFill.style.width = progress + '%';
    progressText.textContent = progress + '%';
  }

  // ── Public init ──
  function init() {
    initNavbar();
    initMobileMenu();
    setActiveLink();
    initFAQ();
    initTabs();
    initCatalogFilters();
    initScrollReveal();
    initSmoothScroll();

    // Delay progress update to ensure Progress module is loaded
    setTimeout(updateNavProgress, 100);
  }

  return { init, updateNavProgress };
})();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', Navigation.init);
