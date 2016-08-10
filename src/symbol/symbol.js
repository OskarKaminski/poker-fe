import React, {PropTypes} from 'react';

const Symbol = ({symbol}) => {

    let symbolContent;
    switch (symbol) {
        case 'spades':
            symbolContent = (<span>&spades;</span>);
            break;
        case 'clubs':
            symbolContent = (<span>&clubs;</span>);
            break;
        case 'diamonds':
            symbolContent = (<span>&diams;</span>);
            break;
        case 'hearts':
            symbolContent = (<span>&hearts;</span>);
            break;
    }

    return (
        <span>{symbolContent}</span>
    )

};

Symbol.propTypes = {
    symbol: PropTypes.string.isRequired
};

export default Symbol;