
import './App.css'
import Conter from './components/conter'
import Jaydip from './components/Jaydip';
// import { useContext } from 'react'
// import { CounterContext } from './context/CounterContext'
import { useCount } from './context/CounterContext';


function App() {

const { count } = useCount()
  
 console.log("counter : " , count);

  return (
    <>
    <div>
      <h1>Counter is {count}</h1>
      <Conter/>
      <Conter/>
      <Conter/>
      <Jaydip/>
    </div>
    </>
  )
}

export default App
