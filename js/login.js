// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  GithubAuthProvider, 
  signInWithPopup 
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCElSztsflZeyVdYD_xH1KYEfNFAwexY98",
  authDomain: "placement-prep-portal.firebaseapp.com",
  projectId: "placement-prep-portal",
  storageBucket: "placement-prep-portal.appspot.com",
  messagingSenderId: "1069359392527",
  appId: "1:1069359392527:web:417d334fa18ba4a800007a",
  measurementId: "G-NBJ1V27FG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// User-friendly error messages helper
function getErrorMessage(error) {
  switch (error.code) {
    case 'auth/invalid-credential':
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return 'Invalid email or password. Please check your credentials and try again.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/too-many-requests':
      return 'Access to this account has been temporarily disabled due to many failed login attempts. You can reset your password or try again later.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection.';
    case 'auth/popup-closed-by-user':
      return 'Sign in popup was closed before completing.';
    default:
      return error.message || 'Login failed. Please try again.';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const submitBtn = document.getElementById("submit");

  // Email / Password Login
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Please enter both email and password!");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Signing In...";

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const name = userCredential.user.displayName || email.split('@')[0];
      alert(`Welcome back, ${name}!`);
      window.location.href = "learning.html";
    } catch (error) {
      alert(getErrorMessage(error));
      console.error("Login Error:", error);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Sign In";
    }
  });

  // Social Sign In (Google / GitHub)
  const socialBtns = document.querySelectorAll(".auth-socials .social-btn");
  if (socialBtns.length >= 2) {
    // Google Button (First)
    socialBtns[0].addEventListener("click", async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        alert(`Welcome back, ${result.user.displayName || result.user.email}!`);
        window.location.href = "learning.html";
      } catch (error) {
        if (error.code !== 'auth/popup-closed-by-user') {
          alert(getErrorMessage(error));
        }
      }
    });

    // GitHub Button (Second)
    socialBtns[1].addEventListener("click", async () => {
      try {
        const result = await signInWithPopup(auth, githubProvider);
        alert(`Welcome back, ${result.user.displayName || result.user.email}!`);
        window.location.href = "learning.html";
      } catch (error) {
        if (error.code !== 'auth/popup-closed-by-user') {
          alert(getErrorMessage(error));
        }
      }
    });
  }
});
