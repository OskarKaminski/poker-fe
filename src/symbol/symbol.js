import React from 'react';

export const Symbol = (props) => {

    let symbol;
    switch (props.symbol) {
        case 'spades':
            symbol = (<span>&spades;</span>);
            break;
        case 'clubs':
            symbol = (<span>&clubs;</span>);
            break;
        case 'diamonds':
            symbol = (<span>&diams;</span>);
            break;
        case 'hearts':
            symbol = (<span>&hearts;</span>);
            break;
    }

    return (
        <span>{symbol}</span>
    )
};