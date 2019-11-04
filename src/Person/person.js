import React from 'react';
import './Person.css';

const person = (props) => {
    // return <p>Im a person and Im {Math.floor((Math.random()*30))} years old</p>
    return (
        <div className='Person'>
            <p onClick={props.click}>Im {props.name} and Im {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;