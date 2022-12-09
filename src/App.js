import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import PlayGround from './components/PlayGround';
import ScoreBoard from './components/ScoreBoard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Game from './pages/Game';

function App() {

   const [choice, setChoice] = useState(null)
   const [score, setScore] = useState(0)

   return (
      <div className="App">
         <div className='text-white text-5xl font-bold text-center h-screen flex flex-col justify-between overflow-y-hidden py-5'>
            <ScoreBoard
               score={score}
            />
            <Router>
               <Routes>

                  <Route path='/' exact element={<PlayGround
                     setChoice={setChoice}
                  />} />

                  <Route path='/game' exact element={<Game 
                     choice={choice}
                     setScore={setScore}
                     score={score}
                  />} />

               </Routes>
            </Router>
            <Footer />
         </div>
      </div>
   );
}

export default App;
