import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18 and above
import './index.css'; // Ensure this imports Tailwind CSS correctly
import App from './App';
import { HashRouter as Router } from 'react-router-dom'; // Import HashRouter and rename it to Router for clarity

const root = ReactDOM.createRoot(document.getElementById('root')); // For React 18+
root.render(
  <React.StrictMode>
    <Router> {/* Use HashRouter here */}
      <App />
    </Router>
  </React.StrictMode>
);
