/**
 * js/router.js — Client-Side Hash Router for SPA
 * Handles hash changes and dynamic view loading without full page reloads.
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
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  // Find matching route
  const routeObj = routes[hash] || routes["#home"];
  appRoot.innerHTML = routeObj.render();
  
  if (routeObj.init) {
    routeObj.init();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Event Listeners
window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", route);
