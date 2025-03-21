import React, { useState, useMemo } from 'react'

const Memo = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculations = useMemo(() => {
    console.log("Calculating sum...");
    let sum = 0;
    for (let i = 0; i <= 1000000; i++) {
      sum += i;
      console.log("value of i : ", i);
    }
    return sum;
  }, []); // Cached on initial render

  return (
    <div>
      <p>Expensive calculation result: {expensiveCalculations}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p>Count: {count}</p>
    </div>
  )
}

export default Memo;
