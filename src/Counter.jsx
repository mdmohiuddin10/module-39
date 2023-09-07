import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0)
    const handleAdd =() =>{
        const newCount = count +1;
        setCount(newCount)
    } 

    const handleRedius =() =>{
        const newCount = count - 1;
        setCount(newCount)
    }

    return (
        <div style={{border:'2px solid yellow'}}>
            <h3>counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRedius}>Reduce</button>
        </div>
    )
}