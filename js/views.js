/**
 * js/views.js — Modular SPA View Renderers
 * Provides view templates and initialization logic for all pages.
 */
import { 
  currentUser, 
  loginEmail, 
  signupEmail, 
  loginGoogle, 
  loginGithub, 
  resetPassword, 
  getFriendlyErrorMessage 
} from "./auth.js";

// ════════════════════════════════════════════════════════════
// 1. HOME VIEW (#home)
// ════════════════════════════════════════════════════════════
export function renderHome() {
  return `
    <section class="hero" id="hero">
      <div class="hero-grid-bg"></div>
      <div class="hero-orb orb-1"></div>
      <div class="hero-orb orb-2"></div>
      <div class="hero-orb orb-3"></div>

      <div class="hero-content">
        <div class="hero-badge">
          <span class="hero-badge-dot"></span>
          <span>1M+ Problems Solved Worldwide</span>
        </div>

        <h1 class="hero-title">
          Skills speak<br>
          <span class="gradient-text">louder than words</span>
        </h1>

        <p class="hero-subtitle">
          Master Data Structures & Algorithms, ace your technical interviews,
          and land offers at top tech companies — all in one place.
        </p>

        <div class="hero-actions">
          <a href="#signup" class="btn btn-primary hero-cta" style="text-decoration:none;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Start for Free
          </a>
          <a href="#problems" class="btn btn-secondary" style="text-decoration:none;">
            Browse Problems
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div class="hero-stats">
          <div class="hero-stat">
            <span class="hero-stat-num" data-target="2500">0</span><span>+</span>
            <span class="hero-stat-label">Problems</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <span class="hero-stat-num" data-target="150">0</span><span>+</span>
            <span class="hero-stat-label">Companies</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <span class="hero-stat-num" data-target="40">0</span><span>%</span>
            <span class="hero-stat-label">Devs use us</span>
          </div>
        </div>
      </div>

      <!-- Daily Challenge Widget -->
      <div class="hero-challenge-card" id="challengeCard">
        <div class="challenge-card-header">
          <div class="challenge-meta">
            <span class="challenge-label">🎯 Daily Challenge</span>
            <div class="challenge-badges">
              <span class="badge badge-medium" id="challengeDifficulty">Medium</span>
              <span class="challenge-topic" id="challengeTopic">Arrays</span>
            </div>
          </div>
          <div class="challenge-progress"><span id="challengeCounter">1 / 4</span></div>
        </div>

        <div class="challenge-question-wrap"><p class="challenge-question" id="challengeQuestion">Loading...</p></div>
        <div class="challenge-options" id="challengeOptions"></div>
        <div class="challenge-footer">
          <div class="challenge-feedback" id="challengeFeedback"></div>
          <button class="challenge-next-btn" id="challengeNextBtn" style="display:none;">
            Next Challenge <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
        <div class="challenge-progress-bar"><div class="challenge-progress-fill" id="challengeProgressFill" style="width:25%"></div></div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section features-section" id="features">
      <div class="container">
        <div class="section-header">
          <span class="section-label">What We Offer</span>
          <h2>Everything you need to <span class="gradient-text">ace placements</span></h2>
          <p>A comprehensive platform built by engineers, for engineers preparing for top companies.</p>
        </div>

        <div class="features-grid">
          <a href="#problems" class="feature-card card glow-ring" style="text-decoration:none;">
            <div class="feature-icon" style="background: var(--orange-bg);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
            <h3>Coding Practice</h3>
            <p>2500+ problems with LeetCode-style difficulty ratings — Easy, Medium, Hard.</p>
            <span class="feature-tag">Problems →</span>
          </a>

          <a href="#learn" class="feature-card card glow-ring" style="text-decoration:none;">
            <div class="feature-icon" style="background: var(--blue-bg);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>
            <h3>Structured Learning</h3>
            <p>Topic-wise study plans for DSA, System Design, and language fundamentals.</p>
            <span class="feature-tag" style="color:var(--blue)">Learn More →</span>
          </a>

          <a href="#problemsolving" class="feature-card card glow-ring" style="text-decoration:none;">
            <div class="feature-icon" style="background: var(--green-bg);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg></div>
            <h3>Certifications</h3>
            <p>Earn skill certificates in Problem Solving, Python, Java and more to stand out.</p>
            <span class="feature-tag" style="color:var(--green)">Get Certified →</span>
          </a>

          <a href="#quiz" class="feature-card card glow-ring" style="text-decoration:none;">
            <div class="feature-icon" style="background: rgba(167,139,250,0.12);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <h3>Quiz Arena</h3>
            <p>Simulate real interview rounds with timed category-wise MCQs.</p>
            <span class="feature-tag" style="color:#a78bfa">Take Quiz →</span>
          </a>

          <a href="#resources" class="feature-card card glow-ring" style="text-decoration:none;">
            <div class="feature-icon" style="background: rgba(239,71,67,0.12);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--red)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div>
            <h3>Resume Building</h3>
            <p>Templates, guides, and LinkedIn tips to make your profile stand out to recruiters.</p>
            <span class="feature-tag" style="color:var(--red)">View Resources →</span>
          </a>

          <a href="#coding" class="feature-card card glow-ring" style="text-decoration:none;">
            <div class="feature-icon" style="background: rgba(251,191,36,0.12);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
            <h3>Coding Arena</h3>
            <p>Practice language-specific problems with instant difficulty filtering.</p>
            <span class="feature-tag" style="color:#fbbf24">Practice Now →</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Topics Grid Section -->
    <section class="section topics-section" id="topics">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Topic Coverage</span>
          <h2>Prepare by <span class="gradient-text">topic</span></h2>
          <p>Structured paths for every concept you'll encounter in placement drives.</p>
        </div>

        <div class="topics-grid">
          <a href="#topic-arrays" class="topic-chip" style="text-decoration:none;"><span>🧮</span> Arrays</a>
          <a href="#topic-linkedlist" class="topic-chip" style="text-decoration:none;"><span>🔗</span> Linked Lists</a>
          <a href="#topic-binarytrees" class="topic-chip" style="text-decoration:none;"><span>🌳</span> Trees</a>
          <a href="#topic-graphs" class="topic-chip" style="text-decoration:none;"><span>📊</span> Graphs</a>
          <a href="#topic-dynamicprogramming" class="topic-chip" style="text-decoration:none;"><span>⚡</span> Dynamic Programming</a>
          <a href="#topic-search&sort" class="topic-chip" style="text-decoration:none;"><span>🔍</span> Searching & Sorting</a>
          <a href="#topic-algorithm" class="topic-chip" style="text-decoration:none;"><span>📌</span> Algorithms</a>
          <a href="#topic-stacks&queues" class="topic-chip" style="text-decoration:none;"><span>🪣</span> Stacks & Queues</a>
          <a href="#topic-bitmanipulation" class="topic-chip" style="text-decoration:none;"><span>💡</span> Bit Manipulation</a>
          <a href="#pythoncert" class="topic-chip" style="text-decoration:none;"><span>🐍</span> Python</a>
          <a href="#coding" class="topic-chip" style="text-decoration:none;"><span>☕</span> Java</a>
          <a href="#coding" class="topic-chip" style="text-decoration:none;"><span>⚙️</span> C++</a>
          <a href="#quiz" class="topic-chip" style="text-decoration:none;"><span>🔢</span> SQL</a>
          <a href="#learn" class="topic-chip" style="text-decoration:none;"><span>⚛️</span> ReactJS</a>
          <a href="#learn" class="topic-chip" style="text-decoration:none;"><span>🤖</span> AI / ML</a>
          <a href="#learn" class="topic-chip" style="text-decoration:none;"><span>📐</span> System Design</a>
        </div>
      </div>
    </section>
  `;
}

export function initHome() {
  const counters = document.querySelectorAll('.hero-stat-num');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        let current = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current.toLocaleString();
          if (current >= target) clearInterval(timer);
        }, 20);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));

  const challenges = [
    { q: "What is the time complexity of searching in a balanced Binary Search Tree?", topic: "Trees", difficulty: "easy", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: 1, explanation: "BST search halves the search space each step → O(log n)" },
    { q: "Which data structure is used for BFS (Breadth-First Search)?", topic: "Graphs", difficulty: "easy", options: ["Stack", "Heap", "Queue", "Linked List"], correct: 2, explanation: "BFS processes nodes level by level using a Queue (FIFO)" },
    { q: "What is the worst-case time complexity of QuickSort?", topic: "Sorting", difficulty: "medium", options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], correct: 2, explanation: "When the pivot is always smallest/largest — O(n²). Average is O(n log n)" },
    { q: "In Dynamic Programming, what technique stores results of already-solved sub-problems?", topic: "DP", difficulty: "medium", options: ["Recursion", "Memoization", "Backtracking", "Greedy"], correct: 1, explanation: "Memoization caches sub-problem results to avoid redundant computation" }
  ];

  let currentIdx = 0;
  let answered = false;

  function loadChallenge(index) {
    const c = challenges[index];
    answered = false;
    document.getElementById('challengeQuestion').textContent = c.q;
    document.getElementById('challengeDifficulty').textContent = c.difficulty.charAt(0).toUpperCase() + c.difficulty.slice(1);
    document.getElementById('challengeDifficulty').className = 'badge badge-' + c.difficulty;
    document.getElementById('challengeTopic').textContent = c.topic;
    document.getElementById('challengeCounter').textContent = (index + 1) + ' / ' + challenges.length;
    document.getElementById('challengeFeedback').innerHTML = '';
    document.getElementById('challengeNextBtn').style.display = 'none';
    document.getElementById('challengeProgressFill').style.width = ((index + 1) / challenges.length * 100) + '%';

    const optWrap = document.getElementById('challengeOptions');
    optWrap.innerHTML = c.options.map((opt, i) =>
      `<button class="challenge-opt" id="opt-${i}">${String.fromCharCode(65+i)}. ${opt}</button>`
    ).join('');

    optWrap.querySelectorAll('.challenge-opt').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        optWrap.querySelectorAll('.challenge-opt').forEach((b, j) => {
          b.disabled = true;
          if (j === c.correct) b.classList.add('opt-correct');
          else if (j === i) b.classList.add('opt-wrong');
        });
        const fb = document.getElementById('challengeFeedback');
        if (i === c.correct) fb.innerHTML = `<span class="fb-correct">✓ Correct! </span><span class="fb-explain">${c.explanation}</span>`;
        else fb.innerHTML = `<span class="fb-wrong">✗ Not quite. </span><span class="fb-explain">${c.explanation}</span>`;

        const nextBtn = document.getElementById('challengeNextBtn');
        nextBtn.style.display = 'flex';
        if (currentIdx < challenges.length - 1) {
          nextBtn.onclick = () => { currentIdx++; loadChallenge(currentIdx); };
        } else {
          nextBtn.innerHTML = 'Try More on Platform <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
          nextBtn.onclick = () => { window.location.hash = "#problems"; };
        }
      });
    });
  }

  loadChallenge(0);
}

// ════════════════════════════════════════════════════════════
// 2. PROBLEMS VIEW (#problems)
// ════════════════════════════════════════════════════════════
export function renderProblems() {
  return `
    <div class="practice-layout">
      <aside class="practice-sidebar">
        <h3 class="sidebar-title">Categories</h3>
        <ul class="sidebar-nav">
          <li><a href="#topic-arrays" class="sidebar-link active"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg> All Problems <span class="sidebar-count">2500</span></a></li>
          <li><a href="#topic-arrays" class="sidebar-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> Arrays <span class="sidebar-count">320</span></a></li>
          <li><a href="#topic-linkedlist" class="sidebar-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/></svg> Linked Lists <span class="sidebar-count">180</span></a></li>
          <li><a href="#topic-binarytrees" class="sidebar-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> Trees & BST <span class="sidebar-count">240</span></a></li>
          <li><a href="#topic-graphs" class="sidebar-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> Graphs <span class="sidebar-count">210</span></a></li>
          <li><a href="#topic-dynamicprogramming" class="sidebar-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Dynamic Prog. <span class="sidebar-count">290</span></a></li>
        </ul>
        <div class="sidebar-divider"></div>
        <h3 class="sidebar-title">ByteBattles</h3>
        <ul class="sidebar-nav">
          <li><a href="#quiz" class="sidebar-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 1v1 Speed Match</a></li>
          <li><a href="#quiz" class="sidebar-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg> Weekly Contest</a></li>
        </ul>
      </aside>

      <main class="practice-main">
        <div class="practice-hero">
          <div class="practice-hero-text">
            <h1>Problem Library</h1>
            <p>Filter by topic or difficulty. Solve problems and track your progress.</p>
          </div>
          <div class="practice-progress">
            <div class="progress-ring-wrap">
              <svg class="progress-ring" width="80" height="80">
                <circle class="ring-track" cx="40" cy="40" r="32"/>
                <circle class="ring-fill" id="probRingFill" cx="40" cy="40" r="32" stroke-dasharray="201" stroke-dashoffset="150"/>
              </svg>
              <div class="ring-label">
                <span class="ring-num" id="ringSolvedNum">12</span>
                <span class="ring-sub">Solved</span>
              </div>
            </div>
            <div class="progress-breakdown">
              <div class="pb-item"><span class="pb-dot" style="background:var(--green)"></span> Easy <span class="pb-num text-green">8 / 10</span></div>
              <div class="pb-item"><span class="pb-dot" style="background:var(--orange)"></span> Medium <span class="pb-num" style="color:var(--orange)">3 / 7</span></div>
              <div class="pb-item"><span class="pb-dot" style="background:var(--red)"></span> Hard <span class="pb-num text-red">1 / 3</span></div>
            </div>
          </div>
        </div>

        <div class="filter-bar">
          <div class="filter-tabs">
            <button class="filter-tab active" data-diff="All">All</button>
            <button class="filter-tab" data-diff="Easy">Easy</button>
            <button class="filter-tab" data-diff="Medium">Medium</button>
            <button class="filter-tab" data-diff="Hard">Hard</button>
          </div>
          <div class="filter-right">
            <div class="search-wrap">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" class="search-input" id="probSearch" placeholder="Search problem title..." />
            </div>
          </div>
        </div>

        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th class="col-status">Status</th>
                <th>Title</th>
                <th>Difficulty</th>
                <th>Acceptance</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody id="probTableBody"></tbody>
          </table>
        </div>
      </main>
    </div>
  `;
}

export function initProblems() {
  const sampleProblems = [
    { id: 1, title: "Two Sum", diff: "Easy", accept: "52.4%", company: "Google", topic: "topic-arrays", done: true },
    { id: 2, title: "Add Two Numbers", diff: "Medium", accept: "43.1%", company: "Amazon", topic: "topic-linkedlist", done: false },
    { id: 3, title: "Longest Substring Without Repeating Characters", diff: "Medium", accept: "34.8%", company: "Meta", topic: "topic-strings", done: true },
    { id: 4, title: "Median of Two Sorted Arrays", diff: "Hard", accept: "38.9%", company: "Apple", topic: "topic-arrays", done: false },
    { id: 5, title: "Longest Palindromic Substring", diff: "Medium", accept: "33.7%", company: "Microsoft", topic: "topic-strings", done: false },
    { id: 6, title: "Zigzag Conversion", diff: "Medium", accept: "47.2%", company: "Netflix", topic: "topic-strings", done: true },
    { id: 7, title: "Reverse Integer", diff: "Medium", accept: "28.5%", company: "Google", topic: "topic-bitmanipulation", done: true },
    { id: 8, title: "Container With Most Water", diff: "Medium", accept: "54.9%", company: "Amazon", topic: "topic-arrays", done: true },
    { id: 9, title: "3Sum", diff: "Medium", accept: "33.9%", company: "Meta", topic: "topic-arrays", done: false },
    { id: 10, title: "Remove Nth Node From End of List", diff: "Medium", accept: "44.6%", company: "Microsoft", topic: "topic-linkedlist", done: true },
    { id: 11, title: "Valid Parentheses", diff: "Easy", accept: "40.8%", company: "Google", topic: "topic-stacks&queues", done: true },
    { id: 12, title: "Merge Two Sorted Lists", diff: "Easy", accept: "63.5%", company: "Amazon", topic: "topic-linkedlist", done: true },
    { id: 13, title: "Generate Parentheses", diff: "Medium", accept: "74.1%", company: "Apple", topic: "topic-backtracking", done: false },
    { id: 14, title: "Search in Rotated Sorted Array", diff: "Medium", accept: "40.3%", company: "Meta", topic: "topic-search&sort", done: true },
    { id: 15, title: "Trapping Rain Water", diff: "Hard", accept: "61.2%", company: "Google", topic: "topic-arrays", done: false },
    { id: 16, title: "Climbing Stairs", diff: "Easy", accept: "52.7%", company: "Amazon", topic: "topic-dynamicprogramming", done: true },
    { id: 17, title: "Word Search", diff: "Medium", accept: "41.6%", company: "Microsoft", topic: "topic-backtracking", done: false },
    { id: 18, title: "Binary Tree Inorder Traversal", diff: "Easy", accept: "75.4%", company: "Netflix", topic: "topic-binarytrees", done: true },
    { id: 19, title: "Validate Binary Search Tree", diff: "Medium", accept: "32.8%", company: "Google", topic: "topic-bst", done: true },
    { id: 20, title: "Number of Islands", diff: "Medium", accept: "58.4%", company: "Amazon", topic: "topic-graphs", done: true }
  ];

  let activeDiff = "All";
  const searchInput = document.getElementById("probSearch");

  function renderTable() {
    const query = searchInput?.value.toLowerCase() || "";
    const tbody = document.getElementById("probTableBody");
    if (!tbody) return;

    const filtered = sampleProblems.filter(p => {
      const matchDiff = activeDiff === "All" || p.diff === activeDiff;
      const matchQuery = !query || p.title.toLowerCase().includes(query) || p.company.toLowerCase().includes(query);
      return matchDiff && matchQuery;
    });

    tbody.innerHTML = filtered.map(p => `
      <tr class="problem-row">
        <td class="col-status">${p.done ? '<span class="text-green">✓</span>' : '<span style="color:var(--text-muted)">-</span>'}</td>
        <td><a href="#${p.topic}" class="problem-link">${p.title}</a></td>
        <td><span class="badge badge-${p.diff.toLowerCase()}">${p.diff}</span></td>
        <td class="col-acceptance">${p.accept}</td>
        <td><span class="company-tag">${p.company}</span></td>
      </tr>
    `).join('');
  }

  document.querySelectorAll(".filter-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeDiff = btn.dataset.diff;
      renderTable();
    });
  });

  searchInput?.addEventListener("input", renderTable);
  renderTable();
}

// ════════════════════════════════════════════════════════════
// 3. LEARN VIEW (#learn)
// ════════════════════════════════════════════════════════════
export function renderLearn() {
  const userName = currentUser ? (currentUser.displayName || currentUser.email.split('@')[0]) : "Guest";
  const userInit = userName.charAt(0).toUpperCase();

  return `
    <div class="learn-layout">
      <aside class="learn-sidebar">
        <div class="sidebar-user-card">
          <div class="user-avatar">${userInit}</div>
          <div class="user-info">
            <span class="user-name">${userName}</span>
            <span class="user-rank text-muted">${currentUser ? 'Rank: Candidate' : 'Rank: Unranked'}</span>
          </div>
        </div>
        <div class="sidebar-divider"></div>
        <ul class="sidebar-nav">
          <li><a href="#learn" class="sidebar-link active">Preparation Kits</a></li>
          <li><a href="#problemsolving" class="sidebar-link">Certifications</a></li>
          <li><a href="#dsa" class="sidebar-link">Topic Library</a></li>
          <li><a href="#resources" class="sidebar-link">Resources</a></li>
        </ul>
        <div class="sidebar-divider"></div>
        <div class="streak-card">
          <div class="streak-icon">🔥</div>
          <div class="streak-info">
            <span class="streak-num">3</span>
            <span class="streak-label">Day Streak</span>
          </div>
        </div>
      </aside>

      <main class="learn-main">
        <div class="learn-banner">
          <div class="learn-banner-text">
            <h1>Learn programming skills</h1>
            <p>Structured paths to take you from beginner to placement-ready.</p>
          </div>
          <div class="learn-banner-actions">
            <a href="#problems" class="btn btn-primary" style="text-decoration:none;">Start Practicing</a>
            <a href="#dsa" class="btn btn-secondary" style="text-decoration:none;">Explore Topics</a>
          </div>
        </div>

        <section class="learn-section">
          <div class="learn-section-header">
            <h2>Preparation Kits</h2>
          </div>
          <div class="kits-grid">
            <div class="kit-card card">
              <div class="kit-card-top"><div class="kit-icon">📅</div><span class="badge badge-easy">Beginner</span></div>
              <h3>1 Week Preparation Kit</h3>
              <p>21 challenges · 1,059,266 attempts</p>
              <a href="#coding" class="btn btn-secondary kit-btn" style="text-decoration:none;">Start Kit</a>
            </div>
            <div class="kit-card card">
              <div class="kit-card-top"><div class="kit-icon">📆</div><span class="badge badge-medium">Intermediate</span></div>
              <h3>1 Month Preparation Kit</h3>
              <p>54 challenges · 499,674 attempts</p>
              <a href="#coding" class="btn btn-secondary kit-btn" style="text-decoration:none;">Start Kit</a>
            </div>
            <div class="kit-card card">
              <div class="kit-card-top"><div class="kit-icon">🏆</div><span class="badge badge-hard">Advanced</span></div>
              <h3>3 Month Mastery Kit</h3>
              <p>120 challenges · 210,000 attempts</p>
              <a href="#coding" class="btn btn-secondary kit-btn" style="text-decoration:none;">Start Kit</a>
            </div>
          </div>
        </section>

        <section class="learn-section">
          <div class="learn-section-header">
            <h2>Skill Certifications</h2>
          </div>
          <div class="certs-grid">
            <div class="cert-card card">
              <div class="cert-badge-icon">🏅</div>
              <div class="cert-info">
                <h4>Problem Solving (Basic)</h4>
                <p>Test fundamental problem-solving skills</p>
              </div>
              <a href="#problemsolving" class="btn btn-primary cert-cta" style="text-decoration:none;">Get Certified</a>
            </div>
            <div class="cert-card card">
              <div class="cert-badge-icon">🐍</div>
              <div class="cert-info">
                <h4>Python (Basic)</h4>
                <p>Demonstrate Python programming skills</p>
              </div>
              <a href="#pythoncert" class="btn btn-primary cert-cta" style="text-decoration:none;">Get Certified</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;
}

// ════════════════════════════════════════════════════════════
// 4. RESOURCES VIEW (#resources)
// ════════════════════════════════════════════════════════════
export function renderResources() {
  return `
    <section class="res-hero">
      <div class="res-hero-orb"></div>
      <div class="container">
        <span class="section-label">Study Materials</span>
        <h1>Placement <span class="gradient-text">Resources</span></h1>
        <p>Carefully curated materials to power every stage of your placement journey — from aptitude to resume.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="resources-main-grid">
          <div class="resource-card card glow-ring">
            <h3>Aptitude & Reasoning Prep</h3>
            <p>Practice quantitative aptitude, logical reasoning, and verbal ability with question banks.</p>
            <a href="#quiz" class="btn btn-primary resource-cta" style="text-decoration:none;">Start Practicing</a>
          </div>
          <div class="resource-card card glow-ring">
            <h3>CS Fundamentals & Notes</h3>
            <p>Learn Operating Systems, DBMS, Computer Networks, and OOP with detailed cheat sheets.</p>
            <a href="#dsa" class="btn btn-primary resource-cta" style="text-decoration:none;">View Notes</a>
          </div>
          <div class="resource-card card glow-ring">
            <h3>Resume & LinkedIn Optimization</h3>
            <p>Optimize your resume and LinkedIn profile with ATS-friendly templates and guides.</p>
            <a href="#signup" class="btn btn-primary resource-cta" style="text-decoration:none;">Optimize Now</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ════════════════════════════════════════════════════════════
// 5. QUIZ ARENA VIEW (#quiz) — FULL 40-QUESTION BANK
// ════════════════════════════════════════════════════════════
export function renderQuiz() {
  return `
    <div class="quiz-layout">
      <aside class="quiz-sidebar">
        <div class="quiz-score-card">
          <div class="score-label">Your Score</div>
          <div class="score-num" id="scoreNum">0</div>
          <div class="score-denom" id="scoreDenom">out of 0 answered</div>
          <div class="score-breakdown">
            <div class="score-part"><div class="score-part-num text-green" id="correctCount">0</div><div class="score-part-lbl">Correct</div></div>
            <div class="score-part"><div class="score-part-num text-red" id="wrongCount">0</div><div class="score-part-lbl">Wrong</div></div>
          </div>
        </div>

        <div>
          <div class="sidebar-title">Topic Filter</div>
          <select class="quiz-select" id="topicFilter">
            <option value="All">All Topics</option>
            <option value="Data Structures">Data Structures</option>
            <option value="Algorithms">Algorithms</option>
            <option value="DBMS">DBMS</option>
            <option value="Networking">Networking</option>
          </select>

          <div class="sidebar-title" style="margin-top:0.6rem;">Difficulty</div>
          <select class="quiz-select" id="diffFilter">
            <option value="All">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <button class="apply-btn" id="quizApplyBtn">Apply Filters</button>
          <button class="reset-score-btn" id="quizResetBtn" style="margin-top:0.5rem;width:100%;padding:0.4rem;background:transparent;border:1px solid var(--border);color:var(--text-muted);border-radius:var(--radius-sm);cursor:pointer;">↺ Reset Score</button>
        </div>

        <div class="tip-card" style="margin-top:1rem;background:rgba(44,187,93,0.08);border:1px solid rgba(44,187,93,0.18);border-radius:var(--radius-md);padding:0.85rem;font-size:0.8rem;color:var(--text-secondary);">
          <strong style="color:var(--green);display:block;margin-bottom:0.3rem;">💡 Quick Tip</strong>
          Focus on understanding the logic behind answers. Daily practice = mastery! 🔥
        </div>
      </aside>

      <main class="quiz-main">
        <div class="quiz-header-bar">
          <h1>⚡ Quiz Arena</h1>
          <span class="question-count-badge" id="questionCountBadge">40 Questions</span>
        </div>
        <div id="questionsArea"></div>
      </main>
    </div>
  `;
}

export function initQuiz() {
  const mcqs = [
    // Data Structures (10)
    { question: "Which data structure uses LIFO (Last In First Out)?", options: ["Queue","Stack","Array","Linked List"], answer: "Stack", topic: "Data Structures", difficulty: "Beginner" },
    { question: "In a binary tree, each node has at most how many children?", options: ["1","2","3","4"], answer: "2", topic: "Data Structures", difficulty: "Beginner" },
    { question: "Which of the following is a non-linear data structure?", options: ["Array","Linked List","Tree","Stack"], answer: "Tree", topic: "Data Structures", difficulty: "Beginner" },
    { question: "Which data structure is used in BFS of a graph?", options: ["Stack","Queue","Heap","Set"], answer: "Queue", topic: "Data Structures", difficulty: "Intermediate" },
    { question: "What is the time complexity of inserting at the end in a dynamic array?", options: ["O(1)","O(n)","O(log n)","O(n log n)"], answer: "O(1)", topic: "Data Structures", difficulty: "Intermediate" },
    { question: "Which structure gives faster search — Array or Hash Table?", options: ["Array","Hash Table"], answer: "Hash Table", topic: "Data Structures", difficulty: "Intermediate" },
    { question: "Heap is mainly used to implement which data structure?", options: ["Queue","Priority Queue","Stack","Set"], answer: "Priority Queue", topic: "Data Structures", difficulty: "Intermediate" },
    { question: "Which tree traversal gives sorted order output in a BST?", options: ["Preorder","Inorder","Postorder","Level Order"], answer: "Inorder", topic: "Data Structures", difficulty: "Intermediate" },
    { question: "What is the height of an AVL Tree maintained as?", options: ["O(1)","O(n)","O(log n)","O(n log n)"], answer: "O(log n)", topic: "Data Structures", difficulty: "Advanced" },
    { question: "Which data structure is best suited for implementing recursion internally?", options: ["Queue","Stack","Heap","Graph"], answer: "Stack", topic: "Data Structures", difficulty: "Advanced" },

    // Algorithms (10)
    { question: "What is the time complexity of binary search?", options: ["O(n)","O(log n)","O(n log n)","O(1)"], answer: "O(log n)", topic: "Algorithms", difficulty: "Beginner" },
    { question: "Which sorting algorithm is the fastest on average?", options: ["Bubble Sort","Quick Sort","Selection Sort","Insertion Sort"], answer: "Quick Sort", topic: "Algorithms", difficulty: "Intermediate" },
    { question: "Which algorithm finds the shortest path in a graph?", options: ["Prim's","Dijkstra's","Kruskal's","DFS"], answer: "Dijkstra's", topic: "Algorithms", difficulty: "Intermediate" },
    { question: "Which sorting algorithm has O(n²) worst-case complexity?", options: ["Merge Sort","Heap Sort","Bubble Sort","Quick Sort"], answer: "Bubble Sort", topic: "Algorithms", difficulty: "Beginner" },
    { question: "What approach does Dynamic Programming follow?", options: ["Divide and Conquer","Greedy","Backtracking","Overlapping Subproblems"], answer: "Overlapping Subproblems", topic: "Algorithms", difficulty: "Advanced" },
    { question: "Which algorithm technique does Kruskal's MST algorithm use?", options: ["Greedy","Dynamic Programming","Backtracking","Branch and Bound"], answer: "Greedy", topic: "Algorithms", difficulty: "Advanced" },
    { question: "Time complexity of Merge Sort is?", options: ["O(n)","O(n log n)","O(log n)","O(n²)"], answer: "O(n log n)", topic: "Algorithms", difficulty: "Intermediate" },
    { question: "Bellman-Ford algorithm can handle graphs with:", options: ["Only positive weights","Negative weights","Zero weights only","No cycles"], answer: "Negative weights", topic: "Algorithms", difficulty: "Advanced" },
    { question: "Which algorithm is used to find Minimum Spanning Tree?", options: ["Kruskal's Algorithm","Dijkstra's Algorithm","Bellman-Ford","Floyd-Warshall"], answer: "Kruskal's Algorithm", topic: "Algorithms", difficulty: "Intermediate" },
    { question: "What is the worst-case search time complexity in a Hash Table?", options: ["O(1)","O(n)","O(log n)","O(n log n)"], answer: "O(n)", topic: "Algorithms", difficulty: "Advanced" },

    // DBMS (10)
    { question: "Which normal form removes transitive dependency?", options: ["1NF","2NF","3NF","BCNF"], answer: "3NF", topic: "DBMS", difficulty: "Intermediate" },
    { question: "Which command removes a table completely from the database?", options: ["DROP","DELETE","REMOVE","ERASE"], answer: "DROP", topic: "DBMS", difficulty: "Beginner" },
    { question: "What does ACID stand for in databases?", options: ["Atomicity, Consistency, Isolation, Durability","Access, Control, Integrity, Durability","Atomicity, Concurrency, Isolation, Distribution","All of the above"], answer: "Atomicity, Consistency, Isolation, Durability", topic: "DBMS", difficulty: "Beginner" },
    { question: "Which key uniquely identifies each record in a table?", options: ["Foreign Key","Primary Key","Super Key","Candidate Key"], answer: "Primary Key", topic: "DBMS", difficulty: "Beginner" },
    { question: "Which SQL keyword sorts the result-set?", options: ["ORDER","SORT","BY","ORDER BY"], answer: "ORDER BY", topic: "DBMS", difficulty: "Beginner" },
    { question: "Which JOIN returns all records when there is a match in either table?", options: ["INNER JOIN","LEFT JOIN","RIGHT JOIN","FULL JOIN"], answer: "FULL JOIN", topic: "DBMS", difficulty: "Intermediate" },
    { question: "Which constraint ensures all values in a column are unique?", options: ["NOT NULL","UNIQUE","PRIMARY KEY","FOREIGN KEY"], answer: "UNIQUE", topic: "DBMS", difficulty: "Intermediate" },
    { question: "What is a Foreign Key in DBMS?", options: ["Primary Key of another table","Unique constraint","Index key","Auto-increment key"], answer: "Primary Key of another table", topic: "DBMS", difficulty: "Intermediate" },
    { question: "Which command is used to retrieve data from a database?", options: ["SELECT","INSERT","UPDATE","DELETE"], answer: "SELECT", topic: "DBMS", difficulty: "Beginner" },
    { question: "Which transaction property ensures all or nothing execution?", options: ["Atomicity","Consistency","Isolation","Durability"], answer: "Atomicity", topic: "DBMS", difficulty: "Intermediate" },

    // Networking (10)
    { question: "What does TCP stand for?", options: ["Transmission Control Protocol","Transfer Control Protocol","Transmission Communication Protocol","Transport Communication Protocol"], answer: "Transmission Control Protocol", topic: "Networking", difficulty: "Beginner" },
    { question: "Which of these is a connection-oriented protocol?", options: ["UDP","TCP","IP","ICMP"], answer: "TCP", topic: "Networking", difficulty: "Intermediate" },
    { question: "Which OSI layer is responsible for routing?", options: ["Application Layer","Network Layer","Transport Layer","Data Link Layer"], answer: "Network Layer", topic: "Networking", difficulty: "Intermediate" },
    { question: "Which protocol is used for secure Web communication?", options: ["HTTP","HTTPS","FTP","POP3"], answer: "HTTPS", topic: "Networking", difficulty: "Beginner" },
    { question: "What is the main function of ARP?", options: ["Resolving IP addresses to MAC addresses","Routing IP addresses","Error correction","Message encryption"], answer: "Resolving IP addresses to MAC addresses", topic: "Networking", difficulty: "Intermediate" },
    { question: "What is the default port number for HTTP?", options: ["21","80","443","8080"], answer: "80", topic: "Networking", difficulty: "Beginner" },
    { question: "What is the main function of DNS?", options: ["Translation of IP to MAC address","Translation of domain name to IP address","Data transmission","Routing"], answer: "Translation of domain name to IP address", topic: "Networking", difficulty: "Intermediate" },
    { question: "Which device connects different networks together?", options: ["Switch","Router","Hub","Bridge"], answer: "Router", topic: "Networking", difficulty: "Intermediate" },
    { question: "The OSI reference model consists of how many layers?", options: ["4","5","6","7"], answer: "7", topic: "Networking", difficulty: "Beginner" },
    { question: "Which protocol is used to send email messages?", options: ["POP3","SMTP","IMAP","FTP"], answer: "SMTP", topic: "Networking", difficulty: "Intermediate" }
  ];

  let correct = 0, wrong = 0, answered = 0;
  let filtered = [...mcqs];

  function updateScore() {
    const sNum = document.getElementById('scoreNum');
    const sDenom = document.getElementById('scoreDenom');
    const cCount = document.getElementById('correctCount');
    const wCount = document.getElementById('wrongCount');
    if (sNum) sNum.textContent = correct;
    if (sDenom) sDenom.textContent = `out of ${answered} answered`;
    if (cCount) cCount.textContent = correct;
    if (wCount) wCount.textContent = wrong;
  }

  function renderQuestions() {
    const area = document.getElementById('questionsArea');
    if (!area) return;
    const badge = document.getElementById('questionCountBadge');
    if (badge) badge.textContent = filtered.length + ' Questions';

    if (!filtered.length) {
      area.innerHTML = `<div class="quiz-empty" style="text-align:center;padding:4rem 2rem;color:var(--text-muted);"><h3>No questions match your filters</h3><p>Try changing the topic or difficulty level.</p></div>`;
      return;
    }

    area.innerHTML = filtered.map((q, i) => `
      <div class="quiz-card unanswered" id="card-${i}">
        <div class="card-meta">
          <span class="q-num">Q${i + 1}</span>
          <span class="badge badge-easy">${q.difficulty}</span>
          <span class="badge badge-blue">${q.topic}</span>
        </div>
        <p class="quiz-question">${q.question}</p>
        <div class="options-grid">
          ${q.options.map(opt => `
            <button class="opt-btn" data-val="${opt}">${opt}</button>
          `).join('')}
        </div>
        <div class="card-answer"></div>
      </div>
    `).join('');

    area.querySelectorAll('.quiz-card').forEach((card, idx) => {
      const q = filtered[idx];
      const opts = card.querySelectorAll('.opt-btn');
      opts.forEach(btn => {
        btn.addEventListener('click', () => {
          opts.forEach(b => b.disabled = true);
          answered++;
          const chosen = btn.dataset.val;
          const ansDiv = card.querySelector('.card-answer');
          if (chosen === q.answer) {
            btn.classList.add('opt-correct');
            card.classList.replace('unanswered','correct-card');
            ansDiv.classList.add('show','ans-correct');
            ansDiv.innerHTML = `<span class="ans-label">✓ Correct!</span> ${q.answer}`;
            correct++;
          } else {
            btn.classList.add('opt-wrong');
            card.classList.replace('unanswered','wrong-card');
            opts.forEach(b => { if (b.dataset.val === q.answer) b.classList.add('opt-correct'); });
            ansDiv.classList.add('show','ans-wrong');
            ansDiv.innerHTML = `<span class="ans-label" style="color:var(--red)">✗ Wrong.</span> Correct answer: <strong style="color:var(--text-primary)">${q.answer}</strong>`;
            wrong++;
          }
          updateScore();
        });
      });
    });
  }

  function applyFilters() {
    const topic = document.getElementById('topicFilter')?.value || 'All';
    const diff = document.getElementById('diffFilter')?.value || 'All';
    filtered = mcqs.filter(q =>
      (topic === 'All' || q.topic === topic) &&
      (diff === 'All' || q.difficulty === diff)
    );
    renderQuestions();
  }

  document.getElementById('quizApplyBtn')?.addEventListener('click', applyFilters);
  document.getElementById('quizResetBtn')?.addEventListener('click', () => {
    correct = 0; wrong = 0; answered = 0;
    updateScore();
    applyFilters();
  });

  renderQuestions();
}

// ════════════════════════════════════════════════════════════
// 6. CODING PRACTICE VIEW (#coding)
// ════════════════════════════════════════════════════════════
export function renderCoding() {
  return `
    <div class="practice-kit-layout">
      <main class="kit-main" style="max-width:1100px;margin:0 auto;width:100%;">
        <div class="kit-hero">
          <div>
            <h1>⚡ Coding Practice Arena</h1>
            <p>Select a challenge below and sharpen your coding skills.</p>
          </div>
        </div>
        <div class="cards-grid">
          <div class="prob-card level-Beginner">
            <h3>Print Fibonacci Series</h3>
            <p>Generate the first N Fibonacci numbers using loops or recursion.</p>
            <a href="#topic-arrays" class="prob-card-btn" style="text-decoration:none;">Solve Problem →</a>
          </div>
          <div class="prob-card level-Intermediate">
            <h3>Longest Substring Without Repeating</h3>
            <p>Find the length of longest substring with no duplicate characters using sliding window.</p>
            <a href="#topic-strings" class="prob-card-btn" style="text-decoration:none;">Solve Problem →</a>
          </div>
          <div class="prob-card level-Advanced">
            <h3>Implement LRU Cache</h3>
            <p>Design a data structure for Least Recently Used cache with O(1) ops.</p>
            <a href="#topic-stacks&queues" class="prob-card-btn" style="text-decoration:none;">Solve Problem →</a>
          </div>
        </div>
      </main>
    </div>
  `;
}

// ════════════════════════════════════════════════════════════
// 7. CERTIFICATIONS VIEWS (#problemsolving, #pythoncert)
// ════════════════════════════════════════════════════════════
export function renderCertProblemSolving() {
  return `
    <section class="cert-page-hero">
      <span class="section-label">🏅 Certification</span>
      <h1>Problem Solving <span class="gradient-text">Pro</span></h1>
      <p>Demonstrate logical reasoning, algorithms, and coding ability with our certification track.</p>
      <div style="margin-top:1.5rem;"><a href="#quiz" class="btn btn-primary" style="text-decoration:none;">Take Certification Quiz</a></div>
    </section>
  `;
}

export function renderCertPython() {
  return `
    <section class="res-hero">
      <div class="res-hero-orb"></div>
      <div class="container">
        <span class="section-label">🐍 Certification Track</span>
        <h1>Master <span class="gradient-text">Python</span> for Placements</h1>
        <p>Quick, focused, and interview-ready Python topics — from basics to advanced OOP.</p>
        <div style="margin-top:1.5rem;"><a href="#quiz" class="btn btn-primary" style="text-decoration:none;">Take Python Quiz</a></div>
      </div>
    </section>
  `;
}

// ════════════════════════════════════════════════════════════
// 8. DSA TOPIC HUB VIEW (#dsa)
// ════════════════════════════════════════════════════════════
export function renderDSAHub() {
  return `
    <section class="dsa-hero">
      <span class="section-label">📚 Topic Library</span>
      <h1>Data Structures & <span class="gradient-text">Algorithms</span></h1>
      <p>Pick a topic track below to view and solve curated problems.</p>
    </section>
    <section class="dsa-grid-section">
      <div class="dsa-topics-grid">
        <a href="#topic-arrays" class="dsa-topic-card" style="text-decoration:none;--card-accent:#ffa116;">📌 Arrays</a>
        <a href="#topic-linkedlist" class="dsa-topic-card" style="text-decoration:none;--card-accent:#3b82f6;">🔗 Linked Lists</a>
        <a href="#topic-binarytrees" class="dsa-topic-card" style="text-decoration:none;--card-accent:#2cbb5d;">🌳 Binary Trees</a>
        <a href="#topic-graphs" class="dsa-topic-card" style="text-decoration:none;--card-accent:#a78bfa;">🔵 Graphs</a>
        <a href="#topic-dynamicprogramming" class="dsa-topic-card" style="text-decoration:none;--card-accent:#fbbf24;">💡 Dynamic Programming</a>
        <a href="#topic-stacks&queues" class="dsa-topic-card" style="text-decoration:none;--card-accent:#ef4743;">📦 Stacks & Queues</a>
        <a href="#topic-strings" class="dsa-topic-card" style="text-decoration:none;--card-accent:#06b6d4;">📝 Strings</a>
        <a href="#topic-heaps" class="dsa-topic-card" style="text-decoration:none;--card-accent:#10b981;">⛰️ Heaps</a>
      </div>
    </section>
  `;
}

// ════════════════════════════════════════════════════════════
// 9. TOPIC TRACKER VIEW (#topic-name)
// ════════════════════════════════════════════════════════════
export function renderTopicTracker(topicName) {
  return `
    <div class="topic-hero">
      <div class="topic-hero-left">
        <h1>Topic: <span class="gradient-text">${topicName.toUpperCase()}</span></h1>
        <p>Track your progress and solve curated problems for ${topicName}.</p>
      </div>
    </div>
    <div class="topic-main">
      <div class="problem-table-wrap">
        <table class="prob-table">
          <thead>
            <tr><th>Status</th><th>#</th><th>Problem Title</th><th>Difficulty</th></tr>
          </thead>
          <tbody>
            <tr class="prob-row"><td><input type="checkbox" class="prob-check" /></td><td class="prob-num">01</td><td>Sample ${topicName} Problem 1</td><td><span class="badge diff-easy">Easy</span></td></tr>
            <tr class="prob-row"><td><input type="checkbox" class="prob-check" /></td><td class="prob-num">02</td><td>Sample ${topicName} Problem 2</td><td><span class="badge diff-medium">Medium</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ════════════════════════════════════════════════════════════
// 10. AUTH VIEWS (#login, #signup, #resetPW)
// ════════════════════════════════════════════════════════════
export function renderLogin() {
  return `
    <div class="auth-body" style="display:flex;flex-direction:row;width:100%;min-height:calc(100vh - 60px);background:var(--bg-primary);">
      <!-- Left Brand Panel -->
      <div class="auth-brand" style="flex:0 0 460px;display:flex;flex-direction:column;justify-content:center;padding:2.5rem;background:var(--bg-secondary);border-right:1px solid var(--border);position:relative;overflow:hidden;">
        <div class="auth-brand-bg"></div>
        <div class="auth-brand-orb orb-a"></div>
        <div class="auth-brand-orb orb-b"></div>

        <div class="auth-brand-content" style="position:relative;z-index:2;display:flex;flex-direction:column;gap:1.5rem;max-width:400px;width:100%;">
          <a href="#home" class="auth-logo" style="text-decoration:none;display:flex;align-items:center;gap:0.5rem;">
            <div class="nav-logo-mark">A</div>
            <span class="nav-logo-text">Arankerzz</span>
          </a>

          <div class="auth-brand-text">
            <h2 style="font-size:1.6rem;font-weight:900;line-height:1.3;margin-bottom:0.5rem;">The smartest way to<br><span class="gradient-text">prep for placements</span></h2>
            <p style="color:var(--text-secondary);font-size:0.875rem;line-height:1.6;">Practice problems, track progress, earn certificates, and land your dream job.</p>
          </div>

          <!-- Animated code snippet -->
          <div class="auth-code-snippet" style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-md);padding:1rem;font-family:monospace;">
            <div class="snippet-header" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem;">
              <div class="code-dots" style="display:flex;gap:0.35rem;">
                <span class="dot dot-red" style="width:8px;height:8px;border-radius:50%;background:#ef4743;"></span>
                <span class="dot dot-yellow" style="width:8px;height:8px;border-radius:50%;background:#fbbf24;"></span>
                <span class="dot dot-green" style="width:8px;height:8px;border-radius:50%;background:#2cbb5d;"></span>
              </div>
              <span style="font-size:0.75rem;color:var(--text-muted);">daily-challenge.py</span>
            </div>
            <pre class="snippet-body" style="font-size:0.78rem;color:var(--text-secondary);margin:0;"><code><span style="color:var(--accent)">class</span> <span style="color:#3b82f6">Solution</span>:
    <span style="color:var(--accent)">def</span> <span style="color:#3b82f6">maxProfit</span>(self, prices):
        min_p = float(<span style="color:#2cbb5d">'inf'</span>)
        max_p = <span style="color:#2cbb5d">0</span>
        <span style="color:var(--accent)">for</span> p <span style="color:var(--accent)">in</span> prices:
            min_p = min(min_p, p)
            max_p = max(max_p, p - min_p)
        <span style="color:var(--accent)">return</span> max_p</code></pre>
          </div>

          <!-- Stats row -->
          <div class="auth-stats" style="display:flex;justify-content:space-between;padding-top:1rem;border-top:1px solid var(--border);">
            <div class="auth-stat"><span class="auth-stat-num" style="font-size:1.1rem;font-weight:800;display:block;color:var(--text-primary);">2500+</span><span class="auth-stat-label" style="font-size:0.72rem;color:var(--text-muted);">Problems</span></div>
            <div class="auth-stat"><span class="auth-stat-num" style="font-size:1.1rem;font-weight:800;display:block;color:var(--text-primary);">50K+</span><span class="auth-stat-label" style="font-size:0.72rem;color:var(--text-muted);">Learners</span></div>
            <div class="auth-stat"><span class="auth-stat-num" style="font-size:1.1rem;font-weight:800;display:block;color:var(--accent);">92%</span><span class="auth-stat-label" style="font-size:0.72rem;color:var(--text-muted);">Placed</span></div>
          </div>
        </div>
      </div>

      <!-- Right Form Panel -->
      <div class="auth-panel" style="flex:1;display:flex;align-items:center;justify-content:center;padding:3rem 2rem;">
        <div class="auth-form-wrap" style="width:100%;max-width:380px;">
          <div class="auth-header" style="margin-bottom:1.5rem;">
            <h1 style="font-size:1.75rem;font-weight:800;margin-bottom:0.4rem;">Welcome back</h1>
            <p style="color:var(--text-muted);font-size:0.875rem;">Don't have an account? <a href="#signup" style="color:var(--accent);text-decoration:none;font-weight:600;">Sign up free</a></p>
          </div>

          <form class="auth-form" id="loginForm" novalidate>
            <div class="form-group" style="margin-bottom:1.25rem;">
              <label for="email" style="display:block;font-size:0.82rem;font-weight:600;margin-bottom:0.4rem;">Email address</label>
              <div class="input-wrap" style="position:relative;">
                <svg class="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position:absolute;left:0.75rem;top:50%;transform:translateY(-50%);color:var(--text-muted);"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <input type="email" id="email" name="email" placeholder="you@example.com" autocomplete="email" required style="width:100%;padding:0.65rem 0.85rem 0.65rem 2.4rem;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:0.875rem;outline:none;" />
              </div>
            </div>

            <div class="form-group" style="margin-bottom:1.5rem;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;">
                <label for="password" style="font-size:0.82rem;font-weight:600;">Password</label>
                <a href="#resetPW" class="form-link-inline" style="font-size:0.78rem;color:var(--accent);text-decoration:none;">Forgot password?</a>
              </div>
              <div class="input-wrap" style="position:relative;">
                <svg class="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position:absolute;left:0.75rem;top:50%;transform:translateY(-50%);color:var(--text-muted);"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <input type="password" id="password" name="password" placeholder="Enter your password" autocomplete="current-password" required style="width:100%;padding:0.65rem 2.4rem 0.65rem 2.4rem;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:0.875rem;outline:none;" />
                <button type="button" class="toggle-pw" id="togglePw" tabindex="-1" style="position:absolute;right:0.75rem;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--text-muted);cursor:pointer;padding:0;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
              </div>
            </div>

            <button type="submit" class="btn btn-primary auth-submit" id="submit" style="width:100%;padding:0.75rem;font-weight:700;font-size:0.9rem;display:flex;align-items:center;justify-content:center;gap:0.5rem;">
              Sign In
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </form>

          <div class="auth-divider" style="text-align:center;margin:1.5rem 0;position:relative;border-bottom:1px solid var(--border);"><span style="position:relative;top:0.6rem;background:var(--bg-primary);padding:0 0.75rem;font-size:0.75rem;color:var(--text-muted);">or continue with</span></div>

          <div class="auth-socials" style="display:flex;gap:0.75rem;margin-top:1.25rem;">
            <button class="social-btn" id="btnGoogle" type="button" style="flex:1;padding:0.6rem;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:0.85rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>
            <button class="social-btn" id="btnGithub" type="button" style="flex:1;padding:0.6rem;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:0.85rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initLogin() {
  document.getElementById('togglePw')?.addEventListener('click', () => {
    const pw = document.getElementById('password');
    if (pw) pw.type = pw.type === 'password' ? 'text' : 'password';
  });

  document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const submitBtn = document.getElementById("submit");

    if (!email || !password) return alert("Please fill in both email and password!");

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Signing In...";
    }

    try {
      const u = await loginEmail(email, password);
      alert(`Welcome back, ${u.displayName || u.email}!`);
      window.location.hash = "#learn";
    } catch (err) {
      alert(getFriendlyErrorMessage(err));
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Sign In";
      }
    }
  });

  document.getElementById("btnGoogle")?.addEventListener("click", async () => {
    try {
      const u = await loginGoogle();
      alert(`Welcome back, ${u.displayName || u.email}!`);
      window.location.hash = "#learn";
    } catch (err) {
      if (err.code !== 'auth/popup-closed-by-user') alert(getFriendlyErrorMessage(err));
    }
  });

  document.getElementById("btnGithub")?.addEventListener("click", async () => {
    try {
      const u = await loginGithub();
      alert(`Welcome back, ${u.displayName || u.email}!`);
      window.location.hash = "#learn";
    } catch (err) {
      if (err.code !== 'auth/popup-closed-by-user') alert(getFriendlyErrorMessage(err));
    }
  });
}

export function renderSignup() {
  return `
    <div class="auth-body" style="display:flex;flex-direction:row;width:100%;min-height:calc(100vh - 60px);background:var(--bg-primary);">
      <div class="auth-brand" style="flex:0 0 460px;display:flex;flex-direction:column;justify-content:center;padding:2.5rem;background:var(--bg-secondary);border-right:1px solid var(--border);position:relative;overflow:hidden;">
        <div class="auth-brand-bg"></div>
        <div class="auth-brand-orb orb-a"></div>
        <div class="auth-brand-orb orb-b"></div>

        <div class="auth-brand-content" style="position:relative;z-index:2;display:flex;flex-direction:column;gap:1.5rem;max-width:400px;width:100%;">
          <a href="#home" class="auth-logo" style="text-decoration:none;display:flex;align-items:center;gap:0.5rem;">
            <div class="nav-logo-mark">A</div>
            <span class="nav-logo-text">Arankerzz</span>
          </a>

          <div class="auth-brand-text">
            <h2 style="font-size:1.6rem;font-weight:900;line-height:1.3;margin-bottom:0.5rem;">Start your journey to<br><span class="gradient-text">placement success</span></h2>
            <p style="color:var(--text-secondary);font-size:0.875rem;line-height:1.6;">Join 50,000+ students mastering DSA and acing technical interviews.</p>
          </div>

          <ul class="signup-features" style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.75rem;font-size:0.875rem;color:var(--text-secondary);">
            <li style="display:flex;align-items:center;gap:0.5rem;"><span class="feature-check" style="color:var(--green);font-weight:bold;">✓</span> 2500+ curated coding problems</li>
            <li style="display:flex;align-items:center;gap:0.5rem;"><span class="feature-check" style="color:var(--green);font-weight:bold;">✓</span> Company-specific preparation kits</li>
            <li style="display:flex;align-items:center;gap:0.5rem;"><span class="feature-check" style="color:var(--green);font-weight:bold;">✓</span> Earn skill certifications</li>
            <li style="display:flex;align-items:center;gap:0.5rem;"><span class="feature-check" style="color:var(--green);font-weight:bold;">✓</span> AI-powered learning paths</li>
            <li style="display:flex;align-items:center;gap:0.5rem;"><span class="feature-check" style="color:var(--green);font-weight:bold;">✓</span> Track your progress & streaks</li>
          </ul>
        </div>
      </div>

      <div class="auth-panel" style="flex:1;display:flex;align-items:center;justify-content:center;padding:3rem 2rem;">
        <div class="auth-form-wrap" style="width:100%;max-width:380px;">
          <div class="auth-header" style="margin-bottom:1.5rem;">
            <h1 style="font-size:1.75rem;font-weight:800;margin-bottom:0.4rem;">Create your account</h1>
            <p style="color:var(--text-muted);font-size:0.875rem;">Already have an account? <a href="#login" style="color:var(--accent);text-decoration:none;font-weight:600;">Sign in</a></p>
          </div>

          <form class="auth-form" id="signupForm" novalidate>
            <div class="form-group" style="margin-bottom:1.25rem;">
              <label for="fullname" style="display:block;font-size:0.82rem;font-weight:600;margin-bottom:0.4rem;">Full Name</label>
              <div class="input-wrap" style="position:relative;">
                <svg class="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position:absolute;left:0.75rem;top:50%;transform:translateY(-50%);color:var(--text-muted);"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <input type="text" id="fullname" placeholder="Your full name" required style="width:100%;padding:0.65rem 0.85rem 0.65rem 2.4rem;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:0.875rem;outline:none;" />
              </div>
            </div>

            <div class="form-group" style="margin-bottom:1.25rem;">
              <label for="email" style="display:block;font-size:0.82rem;font-weight:600;margin-bottom:0.4rem;">Email address</label>
              <div class="input-wrap" style="position:relative;">
                <svg class="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position:absolute;left:0.75rem;top:50%;transform:translateY(-50%);color:var(--text-muted);"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <input type="email" id="email" placeholder="you@example.com" required style="width:100%;padding:0.65rem 0.85rem 0.65rem 2.4rem;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:0.875rem;outline:none;" />
              </div>
            </div>

            <div class="form-group" style="margin-bottom:1.5rem;">
              <label for="password" style="display:block;font-size:0.82rem;font-weight:600;margin-bottom:0.4rem;">Password</label>
              <div class="input-wrap" style="position:relative;">
                <svg class="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position:absolute;left:0.75rem;top:50%;transform:translateY(-50%);color:var(--text-muted);"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <input type="password" id="password" placeholder="Min 6 characters" required style="width:100%;padding:0.65rem 2.4rem 0.65rem 2.4rem;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:0.875rem;outline:none;" />
                <button type="button" class="toggle-pw" id="togglePw" tabindex="-1" style="position:absolute;right:0.75rem;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--text-muted);cursor:pointer;padding:0;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
              </div>
            </div>

            <button type="submit" class="btn btn-primary auth-submit" id="submit" style="width:100%;padding:0.75rem;font-weight:700;font-size:0.9rem;">Create Account</button>
          </form>

          <div class="auth-divider" style="text-align:center;margin:1.5rem 0;position:relative;border-bottom:1px solid var(--border);"><span style="position:relative;top:0.6rem;background:var(--bg-primary);padding:0 0.75rem;font-size:0.75rem;color:var(--text-muted);">or sign up with</span></div>

          <div class="auth-socials" style="display:flex;gap:0.75rem;margin-top:1.25rem;">
            <button class="social-btn" id="btnGoogleSignup" type="button" style="flex:1;padding:0.6rem;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:0.85rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>
            <button class="social-btn" id="btnGithubSignup" type="button" style="flex:1;padding:0.6rem;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:0.85rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initSignup() {
  document.getElementById('togglePw')?.addEventListener('click', () => {
    const pw = document.getElementById('password');
    if (pw) pw.type = pw.type === 'password' ? 'text' : 'password';
  });

  document.getElementById("signupForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const submitBtn = document.getElementById("submit");

    if (!name || !email || !password) return alert("Please fill in all required fields!");

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Creating Account...";
    }

    try {
      const u = await signupEmail(name, email, password);
      alert(`Account created! Welcome to Arankerzz, ${name}!`);
      window.location.hash = "#learn";
    } catch (err) {
      alert(getFriendlyErrorMessage(err));
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Create Account";
      }
    }
  });

  document.getElementById("btnGoogleSignup")?.addEventListener("click", async () => {
    try {
      const u = await loginGoogle();
      alert(`Welcome to Arankerzz, ${u.displayName || u.email}!`);
      window.location.hash = "#learn";
    } catch (err) {
      if (err.code !== 'auth/popup-closed-by-user') alert(getFriendlyErrorMessage(err));
    }
  });

  document.getElementById("btnGithubSignup")?.addEventListener("click", async () => {
    try {
      const u = await loginGithub();
      alert(`Welcome to Arankerzz, ${u.displayName || u.email}!`);
      window.location.hash = "#learn";
    } catch (err) {
      if (err.code !== 'auth/popup-closed-by-user') alert(getFriendlyErrorMessage(err));
    }
  });
}

export function renderResetPW() {
  return `
    <div class="auth-body" style="display:flex;width:100%;min-height:calc(100vh - 60px);background:var(--bg-primary);align-items:center;justify-content:center;padding:3rem 1.5rem;">
      <div class="auth-panel" style="max-width:440px;width:100%;">
        <div class="auth-form-wrap">
          <div class="auth-header">
            <h1>Reset Password</h1>
            <p>Enter your email to receive a reset link.</p>
          </div>
          <form class="auth-form" id="resetForm">
            <div class="form-group" style="margin-bottom:1.25rem;">
              <label for="email" style="display:block;font-size:0.82rem;font-weight:600;margin-bottom:0.4rem;">Email address</label>
              <div class="input-wrap" style="position:relative;">
                <svg class="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position:absolute;left:0.75rem;top:50%;transform:translateY(-50%);color:var(--text-muted);"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <input type="email" id="email" placeholder="you@example.com" required style="width:100%;padding:0.65rem 0.85rem 0.65rem 2.4rem;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:0.875rem;outline:none;" />
              </div>
            </div>
            <button type="submit" class="btn btn-primary auth-submit" style="width:100%;padding:0.75rem;font-weight:700;">Send Reset Link</button>
          </form>
        </div>
      </div>
    </div>
  `;
}

export function initResetPW() {
  document.getElementById("resetForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    if (!email) return;
    try {
      await resetPassword(email);
      alert("Password reset email sent!");
      window.location.hash = "#login";
    } catch (err) {
      alert(getFriendlyErrorMessage(err));
    }
  });
}
