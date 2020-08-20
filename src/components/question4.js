import React, {useState} from 'react';


const Alert = () => {  
    const testAlert = () => {
alert('hi')
    }
    return (
         <div>  
             <button onClick={testAlert}> Test</button>
              </div>
    );
}



export default Alert;

