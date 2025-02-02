# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# 🚀 React + Vite Project

This is a **React project** powered by **Vite**, a fast and modern build tool.

## 📂 Project Structure

my-app/
│── node_modules/         # Installed dependencies
│── public/               # Static assets
│   ├── images/           # Public images
│   ├── videos/           # Public videos
│   ├── svgs/             # Public SVG files
│── src/                  # React source code
│   ├── assets/           # Images, stylesheets, etc.
│   │   ├── images/       # Local image files
│   │   ├── videos/       # Local video files
│   │   ├── svgs/         # Local SVG files
│   ├── components/       # Reusable React components
│   │   ├── Button/       # Example button component
│   │   │   ├── Button.jsx
│   │   │   ├── Button.scss
│   │   ├── Header/       # Example header component
│   │   │   ├── Header.jsx
│   │   │   ├── Header.scss
│   │   ├── Footer/       # Example footer component
│   │   │   ├── Footer.jsx
│   │   │   ├── Footer.scss
│   ├── styles/           # Global SCSS and CSS files
│   ├── App.jsx           # Main React component
│   ├── main.jsx          # Entry point
│── .gitignore            # Files to ignore in Git
│── index.html            # Main HTML file
│── package.json          # Dependencies & scripts
│── vite.config.js        # Vite configuration
└── README.md             # This file


## Available Commands**
Run the following commands in your terminal inside the project directory:

### Development**

npm run dev

- Starts the development server at http://localhost:5173/.

### Build for Production**

npm run build

- Generates optimized static files in the `dist/` folder.

### Preview Production Build**

npm run preview

- Runs a local server to preview the production build.

### Install Dependencies**

npm install

- Installs all required dependencies.

### Update Dependencies**

npm update

- Updates all outdated dependencies.

### Clean Cache (if needed)**

rm -rf node_modules package-lock.json && npm install

- Removes `node_modules` and reinstall dependencies.


## Configuration (`vite.config.js`)
The `vite.config.js` file contains the configuration for Vite. You can modify it to change the server port, enable proxy settings, or add plugins.

Example:


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Change the port if needed
  },
});


## Additional Resources**
- [Vite Documentation](https://vitejs.dev/)
- [React Official Docs](https://react.dev/)
- [ESBuild Performance](https://esbuild.github.io/)


## Conclusion**
Vite is faster, **lighter**, and **better optimized** for modern React projects than Create React App (CRA). Follow the commands above to manage your project efficiently.

---

### How to View All Commands?
To list all available commands in your project, open the terminal and run:

npm run

It will show all scripts available in `package.json`.


### Where to Find More Commands?
- Check your `package.json` file (`scripts` section).
- Visit the **Vite documentation**: [https://vitejs.dev/](https://vitejs.dev/)
- Use `npm help` for additional CLI commands.

