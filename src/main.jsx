import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SpeedInsights } from "@vercel/speed-insights/react";



// Ensure the ID inside quotes matches the ID in your index.html
const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
        <SpeedInsights />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element. Check your index.html ID!");
}