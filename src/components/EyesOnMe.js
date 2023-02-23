import React from 'react';

function EyesOnMe(){
    function focus(){
        console.log('Good!')
    }
    function blur(){
        console.log('Hey! Eyes on me!')
    }
    return (
        <div>
            <button onBlur={blur} onFocus={focus}>'Eyes on me'</button>
        </div>
    )
}

export default EyesOnMe;