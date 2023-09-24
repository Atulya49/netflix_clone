import React from 'react'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './components/Home/Home'
import './App.scss'
import Header from './components/Header/Header'
const App = () => {
  return (
      <Router>
        <Header/> 
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
  )
}
export default App
