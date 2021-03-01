import React, { useEffect, useState } from 'react';
import fakeData from '../fakeData/data';
import Player from '../Player/Player';
import SelectedEleven from '../SelectedEleven/SelectedEleven';
import './Team.css';

const Team = () => {
    const [players, setPlayers] = useState([]);
    const [card, setCard] = useState([]);

    useEffect(() => {
        setPlayers(fakeData)
    }, [])

    const handleAddPlayer = (player) => {
        const newCard = [...card, player];
        setCard(newCard);
    }

    return (
        <div className="all-players">
            <div className="selected-players">
                <SelectedEleven card={card}></SelectedEleven>
            </div>

            <div className="players">
                {/* <h1>This is All Players for Team Creation</h1> */}
                <h2>Total Players: {players.length}</h2>
                {/* <h2>Selected Players: {card.length}</h2> */}
                <h1>{card.salary}</h1>
                {
                    players.map(player => <Player
                        player={player}
                        handleAddPlayer={handleAddPlayer}
                    ></Player>)
                }
            </div>
        </div>

    );
};

export default Team;