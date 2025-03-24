import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18 uses `react-dom/client`
import App from './App';  // Import the App component
import './index.css';     // Import your CSS styles

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
