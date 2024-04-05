import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./page/login";
import ErrorPage from "./page/404";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" component={LoginPage} /> {/* Public route */}
        <PrivateRoute exact path="/error" component={ErrorPage} /> {/* Protected route */}
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;
