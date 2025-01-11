import { createContext, useState  , useContext} from "react";

export const CounterContext = createContext(null);


export const useCount = () =>{
    const {count , setCount} = useContext(CounterContext);
    return {count , setCount};
}


export const CounterProvider = (props)=>{
const[count , setCount] = useState(0);
    return(
        <CounterContext.Provider  value={{count , setCount}}>
            {props.children}
        </CounterContext.Provider>
    )

}

