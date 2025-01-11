// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

import { useCount } from "../context/CounterContext"

export default function Conter() {
    // const {count , setCount} = useContext(CounterContext);

const {count , setCount} = useCount();

  return (
    <div>
        <button
        onClick={()=>setCount(count+1)}
        >Increment</button>
        <button
         onClick={()=>setCount(count-1)}
        >decrement</button>
   
    </div>
  )
}
