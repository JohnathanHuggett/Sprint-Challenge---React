import React from 'react';
import Char from './char.js'


const CharsList = (props) => {
    const { chars } = props;
    return (
        <div>
            {chars.map((char, index) => {
                return <Char key={index}  char={char} /> 
            })}
        </div>
    )
}

export default CharsList;