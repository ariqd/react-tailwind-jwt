import React from 'react';
import './App.css';
import './css/tailwind.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="bg-gray-300 h-screen">
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
