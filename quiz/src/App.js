import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LevelOne from './LevelOne';
import Quiz from './Quiz';

function App() {
  return (
    <Router>
        
        <Routes>
            <Route path='/' element={<Quiz />}/>
            <Route path='/Level1' element={<LevelOne />}/>
        </Routes>
    </Router>
    );
}

export default App;