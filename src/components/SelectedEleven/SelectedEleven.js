import React from 'react';

const SelectedEleven = (props) => {
    const card = props.card;
    // console.log(card);
    // let totalSalaries = 0;
    // for (let i = 0; i < card.length; i++) {
    //     const player = card[i];
    //     totalSalaries += player.salary;
    // }
    const totalSalaries = card.reduce((salary, player) => salary + player.salary, 0);
    parseInt(totalSalaries);

    return (
        <div>
            <h2>Selected Players: {card.length}</h2>
            <h2>Total Players Salaries: {totalSalaries}</h2>
        </div>
    );
};

export default SelectedEleven;