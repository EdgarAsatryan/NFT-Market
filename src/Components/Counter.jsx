import { useState } from "react"

function Counter () {
    let [count,setCounter] = useState(0)
    function increment() {
        setCounter(count= count + 1)
    }
      function decrement() {
        setCounter(count= count - 1)
    }
    return (
        <div>
            <button onClick={increment}>increment</button>
            <h1>{count}</h1>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}
export default Counter