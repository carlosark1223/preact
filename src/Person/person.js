import React from 'react';

const person = (props) => {
    // return <p>Im a person and Im {Math.floor((Math.random()*30))} years old</p>
    return (
        <div>
            <p>Im a {props.name} and Im {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;