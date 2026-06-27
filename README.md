![Playwright Tests Status](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions/workflows/playwright.yml/badge.svg)

# Sauce Demo Automation Portfolio Project

A robust end-to-end (E2E) automation framework built using **Playwright** and **Javascript** to test the Sauce Demo e-commerce website. This project demonstrates industry-standard testing practices, including the Page Object Model (POM), CI/CD integration, and robust reporting.

---

## 🚀 Key Features Demonstrated
*   **Page Object Model (POM):** Built scalable, maintainable, and reusable page components.
*   **Data-Driven Testing:** Parameterized user login flows (valid users, locked-out users, problem users).
*   **E2E Workflows:** Automating the full user journey from login, filtering products, adding items to the cart, to final checkout validation.
*   **CI/CD Pipeline:** Fully integrated with GitHub Actions to run tests automatically on every code push.
*   **Detailed Reporting:** Generates clean HTML execution reports with screenshots on failure.

## 🛠️ Tech Stack & Tools
*   **Language:** Javascript
*   **Testing Framework:** Playwright
*   **CI/CD:** GitHub Actions
*   **Reporting:** Playwright HTML Reporter

## ⚙️ How to Setup and Run Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/sadia049/Web_Automation_Playwright.git
cd YOUR_REPO_NAME
\`\`\`

### 2. Install dependencies
\`\`\`bash
npm install
npx playwright install
\`\`\`

### 3. Run all tests
\`\`\`bash
npx playwright test
\`\`\`

### 4. View the report
\`\`\`bash
npx playwright show-report
\`\`\`