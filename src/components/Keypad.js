import React from 'react';
// Code Keypad Component Here

function Keypad (){
    function handle(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input onChange={handle} type="password"></input>
        </div>
    );
}

export default Keypad;