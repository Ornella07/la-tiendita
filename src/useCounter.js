import {useState} from "react"

export const useCount = (initial = 0, min, max)=> {
    if(initial < min || initial > max) initial = min

    const [count, setCount] = useState(initial)

    const decrement = () =>{
        if(count > min) setCount( prevCount - 1)
    }
    const increment = () => {
        if(count < max) setCount( prevCount + step)
    }
    const reset = () => {
        setCount(initial)
}
    return {
        count,
        increment,
        decrement,
        reset
    }
}



export default useCounter