import React from 'react'
import logo from './logo.svg'

import { Counter } from './features/counter/Counter'
import './App.css'
import Header from './componats/Header.js'
import Home from './componats/Home'
function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
    </div>
  )
}

export default App