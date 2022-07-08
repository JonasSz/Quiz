import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LevelOne from './QuizLevels';
import Quiz from './Quiz';

function App() {
  return (
    <Router>
        
        <Routes>
            <Route path='/' element={<Quiz />}/>
            <Route path='/InGame' element={<LevelOne />}/>
        </Routes>
    </Router>
    );
}

export default App;