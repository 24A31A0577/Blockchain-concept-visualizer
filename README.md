# 🔗 Blockchain Concept Visualizer

> A frontend web application designed to teach blockchain technology through interactive visualizations, structured learning modules, admin-managed quizzes, and user authentication — all running entirely in the browser.

---

## 📌 Project Overview

The **Blockchain Concept Visualizer** is a browser-based educational platform that makes blockchain technology accessible and engaging for students and beginners. Users can register, log in, explore structured learning modules, interact with a live blockchain visualizer, and test their knowledge through a quiz system managed by an admin.

> **Note:** This project is **frontend-only**. All data is stored using `localStorage`. No backend server, database, or external API is used.

---

## 👩‍💻 Team Members

| Name |
|------|
| Guggilapu Bhanu Sai|
| Gottala Sangeetha Lakshmi|
| Ravula Leela Manohar |
|Guthi Sri Satya Mallika |

---

## 🚀 Features

### 🏠 Home Page (`index.html`)
- Sticky navigation bar with links to Home, About Us, and Login/Register
- Hero section introducing the platform with the tagline *"Explore blockchain technology through clear and interactive visualization"*
- **About Us** section with a side image and a detailed team description
- Footer with office address and contact information
- Smooth scroll navigation between sections

### 🔐 User Authentication (`login.html`, `register.html`)
- **Register Page** — collects Full Name, Username, Email, and Password; includes a Show/Hide password toggle
- **Login Page** — validates credentials against `localStorage`; supports both regular users and a hardcoded admin account
- **Admin Login** — special credentials redirect to the Admin Dashboard
- **Logout** — clears session from `localStorage` and redirects to login

### 🗂 Learning Modules (`modules.html`)
- Grid layout displaying six module cards, each with a thumbnail image and title
- Hover animation (scale effect) on each module card
- Direct button to launch the **Blockchain Visualizer**
- Modules covered:

| Module | Topic | Key Concepts |
|--------|-------|-------------|
| 1 | Blockchain Basics | Decentralization, immutability, nodes, consensus, use cases |
| 2 | Block Structure | Block header, Merkle root, nonce, coinbase transaction |
| 3 | Hashing | SHA-256, avalanche effect, one-way functions, Keccak-256 |
| 4 | Transactions | Peer-to-peer transfer, digital signatures, mempool, finality |
| 5 | Mining | Proof of Work, mining pools, block rewards, energy costs |
| 6 | Quiz | MCQ-based knowledge assessment with scoring |

### 📖 Module Pages (`module1.html` – `module5.html`)
- Each module presents structured educational content with headings, subheadings, and bold key terms
- An embedded **YouTube video** at the end of each module for deeper learning
- A **Back to Modules** button for easy navigation

### 🔗 Blockchain Visualizer (`visualize.html`)
- Click **Add Block** to dynamically add new blocks to the chain via a prompt
- Each block displays its **data**, **previous hash**, and **current hash**
- Blocks are connected visually using `<===>` arrows
- **Edit any block's data** directly via an input field — all subsequent block hashes automatically recalculate, demonstrating the **cascading hash effect**
- Hashing is simulated using `btoa()` (Base64 encoding) for educational clarity

### 📝 Quiz System (`quiz.html`, `admin.html`)
- **Admin Dashboard** — Admin can add questions with 4 options and a correct answer; questions are displayed with the correct answer highlighted in green; questions can be deleted
- **Student Quiz View** — Loads all admin-added questions dynamically; students select answers via radio buttons and submit for scoring
- Score is displayed as `X/Total (XX.XX%)` after submission
- Past scores per user are retrievable from `localStorage`

---

## 🗂 Project Structure

```
blockchain-visualizer/
│
├── index.html               # Landing page (Home + About Us + Footer)
├── login.html               # User login page
├── register.html            # User registration page
├── admin.html               # Admin dashboard (quiz question management)
├── modules.html             # Learning modules grid listing
├── module1.html             # Module 1 — Blockchain Basics
├── module2.html             # Module 2 — Block Structure
├── module3.html             # Module 3 — Hashing
├── module4.html             # Module 4 — Transactions
├── module5.html             # Module 5 — Mining
├── visualize.html           # Interactive Blockchain Visualizer
├── quiz.html                # Quiz page (student view)
│
├── style.css                # Styles for landing page (index.html)
├── modules.css              # Styles for modules listing page
├── m1.css                   # Shared styles for all module content pages
├── login.css                # Styles for login page
├── register.css             # Styles for register page
├── register (2).css         # Alternate register styles
├── admin.css                # Styles for admin dashboard
├── visualize.css            # Styles for blockchain visualizer
├── quiz.css                 # Styles for quiz page
│
├── auth.js                  # Register, login, logout, togglePassword logic
├── admin.js                 # Add, display, delete quiz questions (admin)
├── blockchain.js            # Blockchain visualizer logic (addBlock, updateBlock)
├── visualize.js             # Duplicate of blockchain.js (used by visualize.html)
├── quiz.js                  # Load quiz questions, submit, show scores
│
└── images/
    ├── about us.jpeg        # About Us section image
    ├── i1.jpeg              # Blockchain Basics module thumbnail
    ├── i2.jpeg              # Block Structure module thumbnail
    ├── i3.jpeg              # Hashing module thumbnail
    ├── i4.jpeg              # Transactions module thumbnail
    ├── i5.jpeg              # Mining module thumbnail
    └── i6.jpeg              # Quiz module thumbnail
```

---

## 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and content |
| CSS3 | Styling, responsive layout, hover effects |
| JavaScript (Vanilla) | Interactivity, auth logic, quiz engine, visualizer |
| `localStorage` (Browser API) | User data, quiz questions, session management |
| YouTube iframes | Embedded educational videos in each module |
| `btoa()` (Base64) | Simulated hashing in the blockchain visualizer |

---

## ⚙️ How to Run

Since this is a purely frontend project, no installation or server setup is required.

1. **Download or clone** the project folder.
2. Ensure all files (`html`, `css`, `js`, `images/`) are in the **same root directory**.
3. Open `index.html` in any modern web browser (Chrome, Firefox, Edge).
4. Use the **Login / Register** buttons to create an account or log in.
5. Navigate to **Modules** to start learning, or use the **Blockchain Visualizer**.

> **Tip:** For best results, use Google Chrome or Mozilla Firefox.

### 🔑 Admin Credentials
```
Email:    admin@gmail.com
Password: admin123
```

---

## 🗺 Page Flow

```
index.html
    ├── login.html  ──────────────────────> modules.html
    │       └── (admin login)  ──────────> admin.html
    └── register.html ──────────────────-> login.html

modules.html
    ├── module1.html  (Blockchain Basics)
    ├── module2.html  (Block Structure)
    ├── module3.html  (Hashing)
    ├── module4.html  (Transactions)
    ├── module5.html  (Mining)
    ├── quiz.html     (Quiz Assessment)
    └── visualize.html (Blockchain Visualizer)
```

---

## 💾 localStorage Keys Used

| Key | Purpose |
|-----|---------|
| `users` | Array of all registered user objects |
| `loggedInUser` | Currently logged-in user's object |
| `questions` | Array of quiz questions added by admin |
| `scores` | Array of quiz score records per user email |

---

## 🔒 Scope & Limitations

- This project is **frontend-only** as specified by lab guidelines.
- Passwords are stored in **plain text** in `localStorage` — not suitable for production. Use server-side hashing (e.g., bcrypt) for real deployments.
- The blockchain visualizer uses `btoa()` (Base64) as a simplified hash — not cryptographically secure; intended for educational demonstration only.
- No session expiry — users remain logged in until they manually log out.
- `visualize.js` and `blockchain.js` contain identical code — can be consolidated into one file.

---

## 🎯 Learning Objectives

By using this platform, users will be able to:

- Understand the core concepts of blockchain — blocks, chains, hashing, and consensus
- Visualize how blocks are linked and how editing one block cascades hash changes across the chain
- Learn about real-world hashing algorithms like SHA-256 and Keccak-256
- Understand how transactions, mining, and Proof of Work operate
- Test and reinforce their knowledge through an admin-managed quiz system

---

## 🔮 Future Improvements

- Backend integration (Node.js / Express + MongoDB) for persistent data storage
- Secure password hashing on the server side using bcrypt
- Real SHA-256 hashing in the blockchain visualizer
- Per-user progress tracking across modules
- Certificate or badge generation upon quiz completion
- Mobile-responsive redesign for smaller screens
- Session expiry and secure cookie-based authentication

---

## 📄 License

This project was developed for educational/lab purposes. Not intended for commercial use.

---

*Blockchain Concept Visualizer — Developed with 💻 and ☕ by the team.*
