import React from 'react';

const Cart = (props) => {
    console.log(props.card);

    const card = props.card;
    const totalSalaries = card.reduce((salary, player) => salary + player.salary, 0);

    return (
        <div>
            <br/>
            <h2>Total Players Costing: ${(totalSalaries).toFixed(2)}</h2>
        </div>
    );
}

export default Cart;