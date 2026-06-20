# 💳 Credit CIBIL Score Tracker

A React-based web application to check, monitor, and improve your CIBIL credit score — built as a project for the **Front End Development Frameworks and UI Engineering (25CS1201E)** course at KL Deemed to be University, Hyderabad.

---

## 📋 About the Project

The Credit CIBIL Score Tracker lets users register, log in, and access a personalized dashboard showing their current credit score, score trend, and key financial indicators such as payment history, credit utilization, and credit age. Beyond basic score tracking, it includes dispute filing, personalized improvement tips, loan/card eligibility hints, notifications, an admin panel, and report export — ten functional modules in total.

The entire application is built on the frontend using React Hooks, the Context API for global state management, and React Router DOM for protected, multi-page navigation — without any external UI framework, using plain CSS for styling.

---

## ✨ Features / Modules

| # | Module | Description |
|---|--------|-------------|
| 1 | **Score Display** | Visual score indicator on the dashboard with color-coded status (Excellent/Good/Average/Poor) |
| 2 | **Report View** | Breakdown of score factors — payment history, credit utilization, credit age, new enquiries |
| 3 | **Score Trend Chart** | 6-month bar chart showing score movement over time |
| 4 | **History** | Chronological log of every score check |
| 5 | **Dispute Form** | Report incorrect entries in your credit report, tracked with Pending/Resolved status |
| 6 | **Improvement Tips** | Personalized tips based on your current score band |
| 7 | **Eligibility Hint** | Shows which loans/cards you currently qualify for |
| 8 | **Notifications** | In-app alerts with unread badge count |
| 9 | **Admin Panel** | Separate login to view all users and resolve disputes |
| 10 | **Export** | Download your score report (.txt) or history (.csv) |

---

## 🛠️ Tech Stack

- **React.js** — component-based UI library
- **React Router DOM** — client-side routing with protected routes
- **Context API** — global state management
- **JavaScript (ES6+)** — hooks, array methods, modules
- **Plain CSS3** — custom styling, no external UI framework
- **Vite** — build tool and dev server

---

## 📁 Folder Structure

```
src/
├── context/
│   └── UserContext.js       → Global state (user, scores, disputes, notifications)
├── components/
│   └── Navbar.jsx           → Shared navigation bar
├── pages/
│   ├── LoginPage.jsx
│   ├── SignupPage.jsx
│   ├── Dashboard.jsx
│   ├── CheckScore.jsx
│   ├── History.jsx
│   ├── DisputeForm.jsx
│   ├── ImprovementTips.jsx
│   ├── EligibilityHint.jsx
│   ├── Notifications.jsx
│   ├── AdminPanel.jsx
│   └── ExportReport.jsx
├── App.jsx                  → Routes and global state setup
└── App.css                  → Styling
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** installed. Check with:
```bash
node -v
```
If not installed, download it from [nodejs.org](https://nodejs.org).

### Installation

1. Clone the repository
```bash
git clone https://github.com/charvikbattagiri057/Credit-Cibil-Score-Tracker.git
```

2. Navigate into the project folder
```bash
cd Credit-Cibil-Score-Tracker
```

3. Install dependencies
```bash
npm install
```

4. Run the development server
```bash
npm run dev
```

5. Open the link shown in the terminal (usually `http://localhost:5173`) in your browser.

---

## 🔐 Admin Access

To access the Admin Panel, log in with:
```
Email: admin@cibil.com
Password: (any password, 4+ characters)
```

---

## 👥 Team Members

| Name | Roll Number |
|------|-------------|
| Battagiri Ranga Charvik | 2520040108 |
| R. Gnaneshwar | 2520040076 |

**Course:** Front End Development Frameworks and UI Engineering (25CS1201E)
**Institution:** KL Deemed to be University, Hyderabad
**Batch:** 2025–2029

---

## 📄 License

This project was developed for academic purposes as part of a university course submission.
