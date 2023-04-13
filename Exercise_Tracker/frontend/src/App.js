// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';

function App() {

  const [exercise, setExercise] = useState([]);

  return (
    <>
      <Router>

          <header>
            <h1>Daily Exercise Tracker</h1>
            <p>Created with MongoDB, Express, React and Node. js</p>
          </header>

          <Navigation />

          <main>
            <Route path="/" exact>
              <HomePage setExercise={setExercise} />
            </Route>

            <Route path="/add-exercise">
              <CreatePage />
            </Route>
            
            <Route path="/edit-exercise">
              <EditPage exercise={exercise} />
            </Route>
          </main>

          <footer>
          <p>Last Modified <cite>&copy; 2022 Matthew Wenzel</cite></p>
          </footer>

      </Router>
    </>
  );
}

export default App;