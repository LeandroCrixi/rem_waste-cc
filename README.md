# Skip Selector App for REM Waste - Code Challenge

A React-based application that allows users to view, compare, and select different skip hire options. 
This was developed as part of a front-end coding challenge for REM Waste.

---

## Live Demo

Check it out here: [GitHub](https://github.com/LeandroCrixi/rem_waste-cc)

_For a code sandbox environment, see: [CodeSandbox](https://codesandbox.io/p/github/LeandroCrixi/rem_waste-cc/main?import=true)_

---

## Tech Stack

- React
- Vite
 - React Components
- CSS Modules
- API integration
- Deployed with Netlify

---

## Features

- Fetches skip hire options from an API
- Renders a list of skip cards with:
  - Image, price with VAT, size, and hire period
  - Warning if not allowed on public roads
- Each card contains a **"Select this Skip"** button
- Only one skip can be selected at a time
- A confirmation box at the bottom shows the selected skip's:
  - Final price (with VAT)
  - Size
- Visually highlighted selected button and border

---

## How It Works

1. Data is fetched using `useEffect` and stored in state.
2. A single `selectedId` tracks the active selection.
3. Clicking a button updates `selectedId`.
4. The selected skip's is passed to a bottom component (`SelectedSkip`) that shows the confirmation box.

---