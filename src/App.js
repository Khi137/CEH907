import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import DemoRedux from './DemoRedux/DemoRedux';
import Menubar from './Layout/MenuBar';
import SimpleChart from './pages/Dashboard/SimpleChart';

const App = () => {
    return (
        <Router>
            <div>
                <Menubar />
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    {/* <Route path="/demoredux" element={<DemoRedux />} /> */}
                    <Route path="/dashboard" element={<SimpleChart />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
