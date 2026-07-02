/**
 * js/auth.js — Centralized Firebase Authentication & Session Persistence
 * Keeps user session active globally in localStorage across SPA route changes.
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { 
  getAuth, 
  setPersistence, 
  browserLocalPersistence,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile,
  sendPasswordResetEmail,
  GoogleAuthProvider, 
  GithubAuthProvider, 
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCElSztsflZeyVdYD_xH1KYEfNFAwexY98",
  authDomain: "placement-prep-portal.firebaseapp.com",
  projectId: "placement-prep-portal",
  storageBucket: "placement-prep-portal.appspot.com",
  messagingSenderId: "1069359392527",
  appId: "1:1069359392527:web:417d334fa18ba4a800007a",
  measurementId: "G-NBJ1V27FG0"
};

// Initialize App & Auth
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Force Browser Local Persistence
setPersistence(auth, browserLocalPersistence).catch(err => {
  console.warn("Persistence set warning:", err);
});

// Current User State
export let currentUser = null;
const authCallbacks = [];

export function onAuthUpdate(callback) {
  authCallbacks.push(callback);
  if (currentUser !== null) callback(currentUser);
}

// Global Auth Listener
onAuthStateChanged(auth, (user) => {
  currentUser = user;
  updateNavbarUI(user);
  authCallbacks.forEach(cb => cb(user));
});

// Helper: Friendly error messages
export function getFriendlyErrorMessage(error) {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'An account with this email address already exists. Please sign in.';
    case 'auth/invalid-credential':
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return 'Invalid email or password. Please check your credentials.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters long.';
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again later or reset password.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection.';
    case 'auth/popup-closed-by-user':
      return 'Sign in popup was closed before completion.';
    default:
      return error.message || 'Authentication failed. Please try again.';
  }
}

// Auth Actions
export async function loginEmail(email, password) {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res.user;
}

export async function signupEmail(name, email, password) {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(res.user, { displayName: name });
  return res.user;
}

export async function loginGoogle() {
  const res = await signInWithPopup(auth, googleProvider);
  return res.user;
}

export async function loginGithub() {
  const res = await signInWithPopup(auth, githubProvider);
  return res.user;
}

export async function resetPassword(email) {
  await sendPasswordResetEmail(auth, email);
}

export async function logoutUser() {
  await signOut(auth);
}

// Navbar UI Sync
function updateNavbarUI(user) {
  const navRight = document.getElementById("navAuthRight");
  if (!navRight) return;

  if (user) {
    const name = user.displayName || user.email.split('@')[0];
    const initial = name.charAt(0).toUpperCase();
    navRight.innerHTML = `
      <div style="display:flex;align-items:center;gap:0.75rem;">
        <div style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,var(--accent),#ff6b35);color:#000;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.85rem;">${initial}</div>
        <span style="font-size:0.875rem;font-weight:600;color:var(--text-primary);">${name}</span>
        <button id="globalLogoutBtn" class="nav-btn nav-btn-ghost" style="padding:0.35rem 0.75rem;font-size:0.8rem;">Sign Out</button>
      </div>
    `;
    document.getElementById("globalLogoutBtn")?.addEventListener("click", async () => {
      await logoutUser();
      alert("Signed out successfully!");
      window.location.hash = "#home";
    });
  } else {
    navRight.innerHTML = `
      <a href="#login" class="nav-btn nav-btn-ghost" style="text-decoration:none;">Sign In</a>
      <a href="#signup" class="nav-btn nav-btn-primary" style="text-decoration:none;">Get Started</a>
    `;
  }
}
