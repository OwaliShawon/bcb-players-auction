import React from 'react';

const SelectedEleven = (props) => {
    const { image, first_name, last_name, salary } = props.card;

    return (
        <div>
            <h2>Name: {first_name} {last_name}</h2>
            <h2>Salary: {salary}</h2>
        </div>
    );
};

export default SelectedEleven;