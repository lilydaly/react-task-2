import React, {useState} from 'react';

const Greeter = () => {
    const [greet, setGreet] = useState('Stranger')
    return (
<div>
<input onChange={(event) => setGreet(event.target.value)}></input>
<p>Hello {greet}, good to see you!</p>
</div>
    )
}

export default Greeter;