import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
                {
                    card.map(card => <SelectedEleven card={card}></SelectedEleven>)
                }
                {/* <SelectedEleven card={card}></SelectedEleven> */}
            </div>

            <div>
                <Cart card={card}></Cart>
            </div>

            <div className="players">
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