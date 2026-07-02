// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  updateProfile,
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
    case 'auth/email-already-in-use':
      return 'An account with this email address already exists. Please sign in instead.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters long.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection.';
    case 'auth/popup-closed-by-user':
      return 'Sign in popup was closed before completing.';
    default:
      return error.message || 'Signup failed. Please try again.';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const submitBtn = document.getElementById("submit");

  // Email / Password Signup
  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !email || !password) {
      alert("Please fill in all required fields!");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Creating Account...";

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Attach full name to user profile
      await updateProfile(userCredential.user, { displayName: name });
      
      alert(`Welcome to Arankerzz, ${name}! Your account has been created successfully.`);
      window.location.href = "learning.html";
    } catch (error) {
      alert(getErrorMessage(error));
      console.error("Signup Error:", error);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Create Account";
    }
  });

  // Social Sign In (Google / GitHub)
  const socialBtns = document.querySelectorAll(".auth-socials .social-btn");
  if (socialBtns.length >= 2) {
    // Google Button (First)
    socialBtns[0].addEventListener("click", async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        alert(`Signed in as ${result.user.displayName || result.user.email}!`);
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
        alert(`Signed in as ${result.user.displayName || result.user.email}!`);
        window.location.href = "learning.html";
      } catch (error) {
        if (error.code !== 'auth/popup-closed-by-user') {
          alert(getErrorMessage(error));
        }
      }
    });
  }
});
