import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Landing page
import Home from './pages/home';

// Platform layout and pages
import PF_APP from './components/platform/PF_Layout';
import PF_APP_Home from './pages/platform/PF_home';
import PF_Profile from './pages/platform/PF_profile';
import PF_Artists from './pages/platform/PF_artists';

function App() {
  return (
    <Router>
      <div>
        <main className="w-screen pt-16">
          <Routes>
            {/* Landing page */}
            <Route path="/" element={<Home />} />

            {/* Platform layout wrapper */}
            <Route path="/app" element={<PF_APP />}>

              {/* Redirect /app to /app/home */}
              <Route index element={<Navigate to="home" replace />} />

              {/* Nested platform pages */}
              <Route path="home" element={<PF_APP_Home />} />
              <Route path="/app/profile" element={<PF_Profile />} />
              <Route path="/app/artists" element={<PF_Artists />} />

              {/* Optional 404 inside /app */}
              <Route path="*" element={<h1>Page Not Found in App</h1>} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
