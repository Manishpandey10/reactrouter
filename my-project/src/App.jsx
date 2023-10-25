import { useState } from 'react'

import './App.css'
import Header from './component/Header/header'
import Footer from './component/Footer/footer'
import Home from './component/Home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
