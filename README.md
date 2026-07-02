# Arankerzz — Placement Prep Portal

A premium, LeetCode-inspired placement preparation portal built with vanilla HTML, CSS, and JavaScript. Powered by **Firebase Authentication**.

## 🚀 Live Features

- **Interactive Daily Challenge** — clickable MCQ quiz on the landing page
- **LeetCode-style Problem List** — difficulty filtering, live search, company tags
- **Structured Learning Paths** — prep kits, certifications, topic grids
- **Firebase Authentication** — email/password login, signup, session management
- **AI Chatbot** — Prep Mate assistant on the learning page
- **Dark Premium Theme** — `#ffa116` orange accent, Inter font, glassmorphism cards

---

## 📁 Project Structure

```
├── index.html          # Landing page
├── login.html          # Sign in
├── signup.html         # Register
├── practice.html       # Problem list (LeetCode-style)
├── learning.html       # Learn + certifications
├── resource.html       # Study resources
├── resetPW.html        # Password reset
│
├── css/                # All stylesheets
│   ├── style.css       # Global design system (dark theme)
│   ├── index.css       # Landing page styles
│   ├── login.css       # Auth pages (login + signup)
│   ├── signup.css      # Signup additions
│   ├── practice.css    # Problem list styles
│   ├── learning.css    # Learning page styles
│   └── resources.css   # Resources page styles
│
├── js/                 # All JavaScript
│   ├── login.js        # Firebase sign-in
│   ├── signup.js       # Firebase sign-up
│   ├── learning.js     # Firebase auth state + logout
│   ├── chatbot.js      # Prep Mate chatbot
│   └── script.js       # Shared utilities
│
├── assets/             # Images and media
│   ├── airbnb.png
│   ├── stripe.png
│   ├── linkedin-logo.webp
│   └── ...
│
└── placement-portal-backend/   # Backend (Node.js)
```

---

## 🔧 Setup

### 1. Firebase Configuration
Firebase config is already embedded in `js/login.js`, `js/signup.js`, and `js/learning.js`.  
Make sure your Firebase project has **Authentication → Email/Password** enabled.

### 2. Run Locally (No build needed)
Simply open `index.html` in a browser, or use a local server:

```bash
# Using Node.js (if server.js is set up)
node server.js

# Or use VS Code Live Server extension
# Or Python:
python3 -m http.server 3000
```

### 3. Deploy

**Netlify** (Drag & Drop):
1. Go to [netlify.com](https://netlify.com)
2. Drag the project folder (excluding `node_modules`) to the deploy area
3. Done — static site deployed instantly

**GitHub Pages**:
```bash
git add .
git commit -m "Deploy Arankerzz"
git push origin main
# Enable GitHub Pages in repo Settings → Pages → Branch: main
```

**Firebase Hosting**:
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary BG | `#0a0a0f` |
| Accent Orange | `#ffa116` |
| Success Green | `#2cbb5d` |
| Error Red | `#ef4743` |
| Font | Inter + JetBrains Mono |

---

## 📄 License

MIT © 2025 Arankerzz. All rights reserved.
