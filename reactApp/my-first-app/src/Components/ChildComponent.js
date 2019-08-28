import React from 'react'

 function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('Asante')}>Click to greet</button>
        </div>
    )
}
export default ChildComponent