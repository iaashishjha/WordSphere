import React from "react"
import Navbar from "./components/navbar"
import Footer from "./components/Footer"
import Manager from "./components/Manager"



function App() {
  

  return (
    <>
    <Navbar/>
    <div className="bg-[url('/assets/background.jpg')] bg-cover bg-center">
    <Manager/>
    </div>
    <Footer/>
    
      
    </>
  )
}

export default App
