import React, {useState} from 'react';


const Counter = () => {
    const [count, setCount] = useState(0)
    return (
<div>

<button style={{fontSize: 30, width: 30, height: 30 }} onClick={() => setCount(count + 1)}>+ </button>
<button style={{fontSize: 30, width: 30, height: 30 }} onClick={() => setCount(count - 1)}>-</button>

<p>{count}</p>
</div>
    )
}
export default Counter;