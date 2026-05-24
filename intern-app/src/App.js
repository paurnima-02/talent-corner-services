import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import DashboardPage from './DashboardPage';

function App() {
  return (
    <Router>

      <Routes>

        {/* Landing Page */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* Dashboard Page */}
        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

      </Routes>

    </Router>
  );
}

export default App;