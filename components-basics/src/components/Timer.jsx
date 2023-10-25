import { useState } from "react";

export default function Timer(props) {
    const [time, setTime] = useState(props.startTime);

    // let time = 0;
    // Note: Don't use setTimeout, useEffect is more appropriate!!
    setTimeout(() => {
        setTime(time + 1);
    }, 2000);

    return (
        <div>
            <h2>Timer</h2>

            <p>{time}</p>
        </div>
    );
}