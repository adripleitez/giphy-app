import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GifDetail from './pages/GifDetails'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

function App() {

  return (
      <div className="App">
        <section className="App-content">            
          <Router>
            <Routes>
              <Route exact path="/" element={<HomePage/>} />
              <Route exact path="/gif/:id" element={<GifDetail/>}/>
              <Route element={<NotFound/>} path="/:rest/*" />
            </Routes>
          </Router>
        </section>
      </div>
  );
}

export default App;