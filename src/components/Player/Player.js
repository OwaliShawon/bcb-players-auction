import React from 'react';
import './Player.css';

const Player = (props) => {
    // console.log(props);
    const {image, first_name, last_name, salary} = props.player;
    return (
        <div className="player">
            <img src={image} alt=""/>
            <h3>{first_name} {last_name}</h3>
            <h5>His Salary: {salary}</h5>
            <button>Add Player</button>
        </div>
    );
};

export default Player;