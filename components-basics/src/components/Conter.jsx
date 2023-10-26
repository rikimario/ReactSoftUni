import { useState } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);

    const onIncrement = () => {
        setCount(count + 1);
    }

    const clearCounter = () => {
        setCount(0)
    }

    let message = null;

    switch (count) {
        case 1:
            message = 'First blood'
            break;
        case 2:
            message = 'Double kill'
            break;
        case 3:
            message = 'Triple Kill'
            break;
        case 3:
            message = 'Multi Kill'
            break;
        case 4:
            message = 'Unstoppable'
            break;
        case 5:
            message = 'God like'
            break;
        default:
            message = 'Monster kill';
    }


    return (
        <div>
            <h3>Counter</h3>

            {count < 0
                ? <p>Invalid count!</p>
                : null
            }

            {count == 0 && <p>Please start incrementing!</p>}
            <h4>{message}</h4>
            <p>Count: {count}</p>

            <button onClick={onIncrement}>+</button>
            <button onClick={clearCounter}>Clear</button>
            <button onClick={() => { setCount(count - 1) }}>-</button>
        </div>
    )
}