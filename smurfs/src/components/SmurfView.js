import React from 'react';



const SmurfView = props => {

    return (
        <ul>
            {
            props.smurf.map(smurf => (
                <li key={smurf.name}>
                <p>Name: {smurf.name}</p>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
                <p>---------------------------</p>
                </li>
            ))}
        </ul>
    )
}


export default SmurfView


