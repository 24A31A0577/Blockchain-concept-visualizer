# Blockchain Concept Visualizer

A frontend web application designed to teach blockchain technology through interactive visualizations, structured learning modules, and quizzes.

---

## Project Structure

```
blockchain-visualizer/
│
├── index.html          # Landing page (Home + About Us + Footer)
├── login.html          # User login page
├── register.html       # User registration page
├── admin.html          # Admin dashboard (quiz question management)
├── modules.html        # Learning modules listing grid
├── module1.html        # Module 1 — Blockchain Basics
├── module2.html        # Module 2 — Block Structure
├── module3.html        # Module 3 — Hashing
├── module4.html        # Module 4 — Transactions
├── module5.html        # Module 5 — Mining
├── visualize.html      # Interactive Blockchain Visualizer
├── quiz.html           # Quiz page (student view)
│
├── style.css           # Styles for landing page (index.html)
├── modules.css         # Styles for modules listing page
├── m1.css              # Shared styles for all module content pages
├── login.css           # Styles for login page
├── register.css        # Styles for register page
├── admin.css           # Styles for admin dashboard
├── visualize.css       # Styles for blockchain visualizer
├── quiz.css            # Styles for quiz page
│
├── auth.js             # Register, login, logout, togglePassword logic
├── admin.js            # Add, display, delete quiz questions (admin)
├── blockchain.js       # Blockchain visualizer (addBlock, updateBlock)
├── visualize.js        # Duplicate of blockchain.js (used by visualize.html)
├── quiz.js             # Load quiz questions, submit, show scores
│
└── images/
    ├── about us.jpeg   # About Us section image
    ├── i1.jpeg         # Blockchain Basics module thumbnail
    ├── i2.jpeg         # Block Structure module thumbnail
    ├── i3.jpeg         # Hashing module thumbnail
    ├── i4.jpeg         # Transactions module thumbnail
    ├── i5.jpeg         # Mining module thumbnail
    └── i6.jpeg         # Quiz module thumbnail
```

---

## Features

- **User Authentication** — Register and login using `localStorage`. Admin access via hardcoded credentials. Password show/hide toggle on register page.
- **Learning Modules** — Six structured modules covering Blockchain Basics, Block Structure, Hashing, Transactions, Mining, and a Quiz. Each module includes explanatory content and an embedded YouTube video.
- **Interactive Blockchain Visualizer** — Add blocks dynamically, view previous/current hashes, and edit block data to see cascading hash updates in real time.
- **Quiz System** — Admin adds questions with 4 options and a correct answer. Students attempt the quiz and see their score with percentage.
- **Admin Dashboard** — Add, display, and delete quiz questions. Correct answers are highlighted in green.
- **Responsive UI** — Grid-based module layout with hover effects, smooth scrolling, and a sticky header.

---

## Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | HTML5, CSS3, Vanilla JavaScript   |
| Storage    | Browser `localStorage`            |
| Hashing    | Base64 encoding via `btoa()`      |
| Media      | Embedded YouTube iframes          |

---

## Getting Started

1. Clone or download the project folder.
2. Open `index.html` in any modern browser — **no server setup required**.
3. Register a new user account, or log in as admin.

### Admin Credentials
```
Email:    admin@gmail.com
Password: admin123
```

---

## Page Flow

```
index.html
    ├── login.html  ──────────────────> modules.html
    │       └── (admin login)  ──────> admin.html
    └── register.html ──────────────-> login.html

modules.html
    ├── module1.html  (Blockchain Basics)
    ├── module2.html  (Block Structure)
    ├── module3.html  (Hashing)
    ├── module4.html  (Transactions)
    ├── module5.html  (Mining)
    ├── quiz.html     (Quiz)
    └── visualize.html (Blockchain Visualizer)
```

---

## Module Overview

| Module | Topic              | Key Concepts Covered                                          |
|--------|--------------------|---------------------------------------------------------------|
| 1      | Blockchain Basics  | Decentralization, immutability, nodes, consensus, use cases   |
| 2      | Block Structure    | Block header, Merkle root, nonce, coinbase transaction        |
| 3      | Hashing            | SHA-256, avalanche effect, one-way functions, Keccak-256      |
| 4      | Transactions       | Peer-to-peer transfer, digital signatures, mempool, finality  |
| 5      | Mining             | Proof of Work, mining pools, block rewards, energy costs      |
| 6      | Quiz               | MCQ-based knowledge assessment with scoring                   |

---

## localStorage Keys Used

| Key             | Purpose                                      |
|-----------------|----------------------------------------------|
| `users`         | Array of registered user objects             |
| `loggedInUser`  | Currently logged-in user object              |
| `questions`     | Array of quiz questions added by admin       |
| `scores`        | Array of quiz score records per user email   |

---

## Known Limitations

- Passwords are stored in **plain text** in `localStorage` — not suitable for production. Use server-side hashing (e.g., bcrypt) for real deployments.
- The blockchain visualizer uses `btoa()` (Base64) as a simplified hash — not cryptographically secure; intended for educational demonstration only.
- No session expiry — users remain logged in until they manually log out.
- `visualize.js` and `blockchain.js` contain identical code — can be consolidated into one file.

---

## Future Improvements

- Backend integration (Node.js / Express + MongoDB) for persistent data
- Secure password hashing on the server side
- Real SHA-256 hashing in the blockchain visualizer
- Per-user progress tracking across modules
- Certificate or badge generation upon quiz completion
- Mobile-responsive redesign for smaller screens
