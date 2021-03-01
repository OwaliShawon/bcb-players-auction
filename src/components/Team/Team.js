import React, { useEffect, useState } from 'react';
import fakeData from '../fakeData/data';
import Player from '../Player/Player';

const Team = () => {
    const [players, setPlayers] = useState(fakeData);
    const [card, setCard] = useState([]);

    useEffect(() => {
        
    }, [])
    return (
        <div>
            <h1>This is All Players for Team Creation</h1>
            {
                players.map(player => <Player
                    player={player}
                ></Player>)
            }
        </div>
    );
};

export default Team;