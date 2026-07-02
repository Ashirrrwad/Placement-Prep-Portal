// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// Config
const firebaseConfig = {
  apiKey: "AIzaSyCElSztsflZeyVdYD_xH1KYEfNFAwexY98",
  authDomain: "placement-prep-portal.firebaseapp.com",
  projectId: "placement-prep-portal",
  storageBucket: "placement-prep-portal.appspot.com",
  messagingSenderId: "1069359392527",
  appId: "1:1069359392527:web:417d334fa18ba4a800007a",
  measurementId: "G-NBJ1V27FG0"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM Elements
const authBtns = document.getElementById("auth-buttons");
const userNameEl = document.querySelector(".user-name");
const userAvatarEl = document.querySelector(".user-avatar");
const userRankEl = document.querySelector(".user-rank");

onAuthStateChanged(auth, (user) => {
  if (user) {
    // Logged in user info
    const displayName = user.displayName || user.email.split('@')[0];
    const firstInitial = displayName.charAt(0).toUpperCase();

    if (userNameEl) userNameEl.textContent = displayName;
    if (userAvatarEl) userAvatarEl.textContent = firstInitial;
    if (userRankEl) userRankEl.textContent = "Rank: Pro Candidate";

    // Dynamic navbar logout button
    if (authBtns) {
      authBtns.innerHTML = `<button id="logoutBtn" class="btn btn-secondary" style="padding:0.4rem 1rem;">Sign Out</button>`;
      document.getElementById("logoutBtn").addEventListener("click", async () => {
        try {
          await signOut(auth);
          alert("Logged out successfully!");
          window.location.href = "index.html";
        } catch (error) {
          alert("Logout failed: " + error.message);
        }
      });
    }
  } else {
    // Guest State
    if (userNameEl) userNameEl.textContent = "Guest";
    if (userAvatarEl) userAvatarEl.textContent = "U";
    if (userRankEl) userRankEl.textContent = "Rank: Unranked";

    if (authBtns) {
      authBtns.innerHTML = `
        <button class="nav-btn nav-btn-ghost" onclick="window.location.href='login.html'">Sign In</button>
        <button class="nav-btn nav-btn-primary" onclick="window.location.href='signup.html'">Get Started</button>
      `;
    }
  }
});
