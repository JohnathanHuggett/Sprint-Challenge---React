import React, { Component } from 'react';
import './char.css'

// I know this is a "useless constructor" I just wanted to use a class here because I used a stateless function in charList 
export default class CharList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { char } = this.props;

        return (
    
        <div className="Person-Card" >
            <h4> {char.name} </h4>
            <div>
                Gender: {char.gender} <br/> 
                Birth: {char.birth_year} <br/>
                Height: {char.height} <br/>
                Weight: {char.mass} <br/>
                Hair Color: {char.hair_color} <br/>
                Skin Color: {char.skin_color} <br/>
                Eye Color: {char.eye_color} <br/>
            </div>
        </div>
        )
    }
}