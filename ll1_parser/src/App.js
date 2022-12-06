import React from 'react'
import "./App.css"
function App() {
  return (
    <div className="landingPage">
      <h1>Hello</h1>
      <div className='landingPage_intro'>
        <h2>Kathmandu University</h2>
        <h2> Department of Computer Science and Engineering</h2>
        <h2>Dhulikhel, Kavre</h2>
        <h3> A Mini Project</h3>
        <h3>on</h3>
        <h2>"LL1 Parser"</h2>
        <h2>COMP 409</h2>
        <h3>
(For partial fulfillment of 4th Year/ Ist Semester in Computer Engineering)
</h3>
<br />
    <h2>Submitted by</h2>
    <h2>Nischal Bhandari(10)</h2>
    <h2>Nabin Ghimire(17)</h2>
    <h2>Ankit Khatiwada(24)</h2>
    <h2>Babin Khatri(26)</h2>
    <h2>Amar Kumar Mandal(58)</h2>
    <br />
    <br />
    <h2>Submitted to</h2>
    <h2>Mr. Sushil Nepal</h2>
    <h2>Department of Computer Science and Engineering</h2>
    <button onClick={()=>document.querySelector('.landingPage_intro').classList.toggle('active')}>Display Project</button>
    </div>
    </div>
  )
}

export default App