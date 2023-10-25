import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  }

  const clearCounter = () => {
    setCount(0)
  }

  return (
    <div>
      <h3>Counter</h3>

      <p>Count: {count}</p>

      <button onClick={onIncrement}>+</button>
      <button onClick={clearCounter}>Clear</button>
      <button onClick={() => { setCount(count - 1) }}>-</button>
    </div>
  )
}