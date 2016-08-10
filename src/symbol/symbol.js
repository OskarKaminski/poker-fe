import React, {PropTypes} from 'react';

const Symbol = ({symbol}) => {

    switch (symbol) {
        case 'spades':
            return (<span>&spades;</span>);
            break;
        case 'clubs':
            return (<span>&clubs;</span>);
            break;
        case 'diamonds':
            return (<span>&diams;</span>);
            break;
        case 'hearts':
            return (<span>&hearts;</span>);
            break;
    }

    throw new Error('Unknown symbol: ' + symbol);

};

Symbol.propTypes = {
    symbol: PropTypes.string.isRequired
};

export default Symbol;