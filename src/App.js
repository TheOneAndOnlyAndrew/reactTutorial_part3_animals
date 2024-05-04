import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count+1);
    };

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>
                <div>Number of animals is {count}</div>
            </div>
        </div>
    );
}

export default App;