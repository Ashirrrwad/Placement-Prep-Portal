/**
 * js/router.js — Client-Side Hash Router & Global Interactivity Handler
 * Handles hash changes, dynamic view loading, and global study/editor modal attachments.
 */
import { 
  renderHome, initHome, 
  renderProblems, initProblems, 
  renderLearn, 
  renderResources, 
  renderQuiz, initQuiz, 
  renderCoding, 
  renderCertProblemSolving, 
  renderCertPython, 
  renderDSAHub, 
  renderTopicTracker, 
  renderLogin, initLogin, 
  renderSignup, initSignup, 
  renderResetPW, initResetPW 
} from "./views.js";

import { openStudyModal } from "./study-material.js";
import { openCodeEditorModal } from "./code-editor.js";
import { initAIAssistant } from "./ai-assistant.js";

const routes = {
  "#home": { render: renderHome, init: initHome },
  "": { render: renderHome, init: initHome },
  "#problems": { render: renderProblems, init: initProblems },
  "#learn": { render: renderLearn },
  "#resources": { render: renderResources },
  "#quiz": { render: renderQuiz, init: initQuiz },
  "#coding": { render: renderCoding },
  "#problemsolving": { render: renderCertProblemSolving },
  "#pythoncert": { render: renderCertPython },
  "#dsa": { render: renderDSAHub },
  "#login": { render: renderLogin, init: initLogin },
  "#signup": { render: renderSignup, init: initSignup },
  "#resetPW": { render: renderResetPW, init: initResetPW }
};

export function route() {
  const hash = window.location.hash.split('?')[0] || "#home";
  const appRoot = document.getElementById("app-root");

  if (!appRoot) return;

  // Highlight active navbar links
  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === hash || (hash === "#home" && href === "#home")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Check if hash matches topic tracker e.g. #topic-arrays
  if (hash.startsWith("#topic-")) {
    const topicName = hash.replace("#topic-", "");
    appRoot.innerHTML = renderTopicTracker(topicName);
    attachGlobalModalTriggers();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  // Find matching route
  const routeObj = routes[hash] || routes["#home"];
  appRoot.innerHTML = routeObj.render();
  
  if (routeObj.init) {
    routeObj.init();
  }

  attachGlobalModalTriggers();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Attach global event handlers for Study Material Modal and Code Editor Playground Modal
 */
function attachGlobalModalTriggers() {
  // 1. Problem links -> Open LeetCode-style Code Playground Modal
  document.querySelectorAll(".problem-link, .prob-card-btn, .solve-btn-trigger").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const probId = btn.dataset.probid || 1;
      openCodeEditorModal(probId);
    });
  });

  // 2. Topic chips / Study guide buttons -> Open Study Material Drawer Modal
  document.querySelectorAll(".topic-chip, .dsa-topic-card, .open-study-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const href = btn.getAttribute("href") || "";
      let topicKey = "arrays";

      if (href.includes("linkedlist")) topicKey = "linkedlist";
      else if (href.includes("binarytrees") || href.includes("bst")) topicKey = "binarytrees";
      else if (href.includes("graphs")) topicKey = "graphs";
      else if (href.includes("os") || href.includes("dbms") || href.includes("networks") || href.includes("resources")) topicKey = "os_dbms_networks";

      // Allow hash navigation if it's a specific topic page, but also offer study drawer button
      if (e.target.classList.contains("open-study-btn")) {
        e.preventDefault();
        openStudyModal(topicKey);
      }
    });
  });
}

// Event Listeners
window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", () => {
  initAIAssistant();
  route();
});
