import React from 'react';
import PropTypes from 'prop-types';
import {Symbol} from 'Component/symbol/symbol';
import './card.css';

export const Card = (props) => {

    const labels = {
        11: 'J',
        12: 'Q',
        13: 'K',
        14: 'A'
    };

    const label = labels[props.data.value] || props.data.value;

    return (
        <div className='card'>
            <div className="card__left-top-corner">
                {label}<Symbol symbol={props.data.symbol} />
            </div>
            <div className="card__right-top-corner">
                {label}<Symbol symbol={props.data.symbol} />
            </div>
            <div className="card__left-down-corner">
                {label}<Symbol symbol={props.data.symbol} />
            </div>
            <div className="card__right-down-corner">
                {label}<Symbol symbol={props.data.symbol} />
            </div>
        </div>
    )
};

Card.propTypes = {
    data: PropTypes.object.isRequired
};