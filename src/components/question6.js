import React, {useState} from 'react';

const Form = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [favColor, setFavColor] = useState('')
    const [favFood, setFavFood] = useState('')
    return (
        <div class="container">
            <label>Name </label><br/>
           <input onChange={(event) => setName(event.target.value)}/><br/>
           <label>Age </label><br/>
           <input onChange={(event) => setAge(event.target.value)}/><br/>
           <label>Favourite Colour </label><br/>
           <input onChange={(event) => setFavColor(event.target.value)}/><br/>
           <label>Favourite Food </label><br/>
           <input onChange={(event) => setFavFood(event.target.value)}/><br/><br/>

            <button onClick={()=>console.log(name, age, favColor, favFood)} style={{ height: 20, width: 50}}></button>
            
        </div>
    )
}

export default Form;

