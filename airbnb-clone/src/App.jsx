import './App.css'
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'; // Assuming the data is in a file named "data.js" in the same directory as your App.jsx


function App() {
  const cards = data.map((item)=>{
    return <Card 
      key = {item.id}
      item= {item}
    />
  })

  return (
    <>
      <Header/>
      <Hero/>
      <section className="cards-list">
        {cards}
      </section>
    </>
  )
}
export default App
