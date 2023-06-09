import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './Sample.css'; // Import the CSS file

// Component for the profile page
const Profile = ({ onExit, menuOpen }) => {
  const handleExitClick = () => {
    onExit(); // Call the provided callback function when the exit button is clicked
  };

  return (
    <div className="container">
      <h2>Profile Page</h2>
      <ul style={{ display: menuOpen ? 'block' : 'none' }}>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
      <button onClick={handleExitClick}>Exit</button> {/* Add the exit button */}
    </div>
  );
};

// Component for the dashboard page
const Dashboard = () => {
  return (
    <div className="container">
      <h2>Dashboard Page</h2>
      {/* Dashboard content */}
    </div>
  );
};

// Component for the settings page
const Settings = () => {
  return (
    <div className="container">
      <h2>Settings Page</h2>
      {/* Settings content */}
    </div>
  );
};

// App component
const Apps = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleExit = () => {
    setMenuOpen(false); // Close the menu options when the exit button is clicked
    console.log("Exit button clicked");
  };

  return (
    <Router>
      <div>
        <h1>My App</h1>
        <button onClick={() => setMenuOpen(!menuOpen)}>Toggle Menu</button> {/* Button to toggle menu options */}
        <ul style={{ display: menuOpen ? 'block' : 'none' }}>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/profile" element={<Profile onExit={handleExit} menuOpen={menuOpen} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Apps;
