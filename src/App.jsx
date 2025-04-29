import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return <div>
  <h2>hii</h2>
    <Counter></Counter>
    </div>
  
}

function Counter() {


  const [count,setCount] = useState(0)
  
  function increaseCount(){
setCount(count+1);
  }

function decreaseCount() {
  setCount(count-1);
}
function resetCount() {
  setCount(0);
}

  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>increase count </button>
    <button onClick={decreaseCount}>decrease count</button>
    <button onClick={resetCount}>reset count</button>
  </div>
}
export default App