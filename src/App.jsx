// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './team'
import Users from './users'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      <Users></Users>

      <Team></Team>

      <Person></Person>
      <Student grade={grade} score={score}></Student>
      <Student grade={grade+1} score={score}></Student>
      <Student></Student>
      <Developer></Developer>
    </>
  )
}

function Person(){
  const age = 25;
  const money = 20;
  const person = {name: 'Sakib', age: 12};
  return <h3>I am {person.name} with age: {age}. Money {money}</h3>

}
const {grade, score} = {grade:7, score: 99};
// const {grade1, score1} = {grade1:8, score1: '90'};

// eslint-disable-next-line react/prop-types
function Student({grade=1, score=0}){
  
  return (
    <div className='student'>
      <h3>This is a Student</h3>
      <p>Name: </p>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Developer(){
  const devStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={devStyle}>
      <h5>Developer</h5>
      <p>Coding: </p>
    </div>
  )
}
export default App
