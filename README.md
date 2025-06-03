# Reusable Define List Generator
A tool which can create reusable complex define lists in seconds.

## Functions
- Add value to rows
- Collapse duplicate row names and merge their stylevars
- Add/ Remove Style Vars as per requirement
- Reset button to clear all fields
- Generate list in a second
- Display errors messages on screen if something is wrong
- Copy output to clipboard
- Download output list as text file

## TODOs [upcoming features]
- Stylevar name out of focus, while typing stylevar name.
- Add groups for rows
- Load define list from .txt file or by pasting it in output box
- Make editable output box
- remove specific rows with row labels (adding where="report,notdp")
- add new rows
- Create Docs about the tool.


### 1 => Removed rows from list:
---------------------------------
- load list from txt file or copy paste list in output section
- input labels which rows are removed
- click remove rows/ add where="report,notdp"

### 2 => Add new rows in list:
--------------------------------
- load list from txt file or copy paste list in output section
- add list rows and stylevars (if any)
- Generate list with new rows added

## How to install
### Method 1: Online Mode
- Go to [defineListGen Tool](https://codak2.github.io/defineListGen/)
- Use directly in your browser.

### Method 2: Local Mode
- You need to install nodejs and terminal to run the program
- Download this repo from green Code button > Local > Download ZIP
- Extract the ZIP 
- right click > select "Open in Terminal"
- run `npm install` and wait until it finish installing all dependencies
- Then run `npm run dev` and wait for few seconds
- It will start up in browser directly or give you link in terminal to open it.



---

## Made with React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
