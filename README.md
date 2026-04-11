# Budget Matrix

Budget Matrix is a simple expense tracking and budget management web app built with React and Vite. It helps users add income and expense transactions, track totals, view remaining budget, and keep data saved in the browser with localStorage.

## About The Project

This project is designed to make money tracking easy and clear. Users can log transactions, filter them by type, remove unwanted entries, and review a clean dashboard with summary cards. The app also includes a login page for a demo sign-in flow and simple content pages for Home, About, and Contact.

The design uses a warm amber and violet theme with Tailwind CSS and keeps the UI clean, readable, and responsive.

## Features

- Add income and expense transactions.
- Save transactions in localStorage.
- Delete transactions from the list.
- Filter transactions by All, Income, or Expense.
- View total income, total expenses, remaining budget, and savings rate.
- Demo login page with fixed username and password.
- Logout button on the dashboard that returns the user to Home.
- Responsive pages with a consistent theme.
- Footer links for company and legal pages.

## Demo Login

Use the following demo credentials to enter the dashboard:

- Username: `demoUser`
- Password: `demoPass123`

## Folder Structure

```text
BudgetMatrix/
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── lib/
│   └── utils.js
├── public/
│   └── favicons/
└── src/
	├── App.css
	├── App.jsx
	├── main.jsx
	└── components/
		├── layout/
		│   ├── Card.jsx
		│   ├── Footer.jsx
		│   ├── Header.jsx
		│   ├── Navbar.jsx
		│   └── Page.jsx
		└── pages/
			├── About.jsx
			├── Contact.jsx
			├── Cookies.jsx
			├── Dashboard.jsx
			├── Home.jsx
			├── Login.jsx
			├── Privacy.jsx
			└── Terms.jsx
```

## Pages

- Home: landing page with project introduction and a Get Started button.
- Login: demo login form that redirects to the dashboard.
- Dashboard: transaction manager with summary cards and filters.
- About: project overview and purpose.
- Contact: contact form and support information.
- Terms, Privacy, Cookies: simple informational pages linked from the footer.

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS
- DaisyUI

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser and use the login page to access the dashboard.

## Future Enhancements

- Add real user authentication.
- Store transactions in a backend database.
- Add charts and graphs for spending analysis.
- Add monthly budget goals and alerts.
- Add search and sort options for transactions.
- Add export and import for transaction data.
- Add category-based analytics.
- Add dark mode support.

## Notes

- This is a demo project, so the login credentials are fixed.
- Transactions currently persist only in the browser through localStorage.
- The app is built to stay simple and easy to understand.
