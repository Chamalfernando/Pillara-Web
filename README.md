# Pillara | Never Miss a Pill, Worry Less

Pillara is a modern, warm, and ultra-accessible landing page and interactive simulator for **Pillara**, the AI-powered medicine companion app. Designed with ultimate accessibility in mind, the landing page introduces the application's key capabilities and includes a fully functional, browser-based app simulator for user interaction.

## 🚀 Key Features

- **Interactive App Simulator:** Experience the mobile application's look and feel directly in the browser.
- **AI Chat Companion Simulator:** A mock chatbot that allows users to ask medicine-related questions (e.g., food interactions, safety precautions, antibiotic completion) and receive instant, simulated AI guidance.
- **Daily Medicine Tracker:** An interactive medication checklist with dynamic, SVG-based progress circle calculations and custom completion greetings.
- **Ultra-Accessible Design:** High-contrast color palettes, large readable typography (Nunito Sans), clear hierarchy, and smooth CSS transitions.
- **Mobile Responsive Layout:** Fits all viewports from widescreen monitors down to small mobile screens.

---

## 📁 Project Structure

The project has a lightweight, modular structure keeping development simple and high-performing:

- **[`index.html`](index.html)** - Core markup containing semantic HTML5 structures, SEO meta elements, landing page sections, and the SVG phone mockup.
- **[`index.css`](index.css)** - Modular stylesheet built with Vanilla CSS using CSS variables (custom color tokens, transition timers, and typography guidelines) to provide responsive layouts and animations.
- **[`index.js`](index.js)** - Interactive behavior, containing simulator tab-toggling, AI chat response simulation logic, and progress-tracking maths.
- **[`.github/workflows/ci.yml`](.github/workflows/ci.yml)** - Simplified GitHub Actions workflow that handles validation.

---

## 🛠️ GitHub Actions CI Pipeline

The project includes a simple GitHub Actions CI pipeline designed to keep the code quality high:

1. **Lint and Validate:** Automatically validates `index.html` structure using `htmlhint` on every commit or pull request targeting the `main` or `master` branches.
2. If there are any syntax errors or unclosed HTML tags, the build will fail, alerting you to potential structure issues.

---

## 💻 Running Locally

Since this is a client-side static site, no complicated setup or dependency installation is required:

### Option A: Standard Open
Simply double-click the [`index.html`](index.html) file in your file explorer to open the landing page in your browser.

### Option B: Local Web Server (Recommended)
To prevent potential CORS or path issues and preview performance accurately, run a lightweight local server:

- **Using Node.js (`http-server`):**
  ```bash
  npx http-server .
  ```
- **Using Python:**
  ```bash
  python -m http.server 8000
  ```
- **Using VS Code:**
  Install the **Live Server** extension and click **Go Live** at the bottom-right corner.

---

## 🎨 Technology Stack

- **Markup:** Semantic HTML5
- **Styling:** Vanilla CSS3 (Grid, Flexbox, Keyframes, Custom Variables)
- **Scripting:** Pure Vanilla JS (ES6+)
- **CI/CD:** GitHub Actions
- **Icons:** Inline optimized SVGs
- **Fonts:** Nunito Sans (Google Fonts)
