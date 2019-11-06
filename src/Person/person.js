import React from 'react';
import './Person.css';
// import Radium from 'radium';

const person = (props) => {
    // return <p>Im a person and Im {Math.floor((Math.random()*30))} years old</p>

    // //Esto funciona con la libreria Radium con {StyleRoot}
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    return (
        <div className='Person'>
            <p onClick={props.click}>Im {props.name} and Im {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;