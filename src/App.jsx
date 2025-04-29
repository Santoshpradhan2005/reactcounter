import { useEffect } from 'react';
import { useState } from 'react'

function App() {
  

  return <div>
  
    <Counter></Counter>



    </div>
  
}

function Counter() {
  const [count,setCount] = useState(0)
  console.log("counter");
  
  useEffect(function () {
      setInterval(() => {
    setCount(count =>count+1);
    // setCount(function(count){
    //return count +1})
    
  }, 1000);
  console.log("mount");
  },[])


  function increaseCount(){
setCount(count+1);
  }


  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>increase count </button>

  </div>
}
export default App