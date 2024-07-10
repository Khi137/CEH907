import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import DemoRedux from './DemoRedux/DemoRedux';
import Menubar from './Layout/MenuBar';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />


                </Routes>
            </div>
        </Router>
    );
};

export default App;
