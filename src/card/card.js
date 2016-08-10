import React, {Component, PropTypes} from 'react';
import Symbol from '../symbol/symbol';

export const labels = {
    11: 'J',
    12: 'Q',
    13: 'K',
    14: 'A'
};

const Card = ({value, symbol}) => {

    const label = labels[value] || value;

    return (
        <div className='card'>
            <div className="card__left-top-corner">
                {label}<Symbol symbol={symbol}/>
            </div>
            <div className="card__right-top-corner">
                {label}<Symbol symbol={symbol}/>
            </div>
            <div className="card__left-down-corner">
                {label}<Symbol symbol={symbol}/>
            </div>
            <div className="card__right-down-corner">
                {label}<Symbol symbol={symbol}/>
            </div>
        </div>
    )

};

Card.propTypes = {
    value: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired
};

export default Card;