import React from 'react';
import PropTypes from 'prop-types';
import {Symbol} from './Symbol/Symbol';
import './Card.scss';

export const Card = (props) => {

    const labels = {
        11: 'J',
        12: 'Q',
        13: 'K',
        14: 'A'
    };

    const label = labels[props.value] || props.value;

    return (
        <div className='card'>
            <div className="card__left-top-corner">
                {label}<Symbol symbol={props.color} />
            </div>
            <div className="card__right-top-corner">
                {label}<Symbol symbol={props.color} />
            </div>
            <div className="card__left-down-corner">
                {label}<Symbol symbol={props.color} />
            </div>
            <div className="card__right-down-corner">
                {label}<Symbol symbol={props.color} />
            </div>
        </div>
    )
};

Card.propTypes = {
    value: PropTypes.string,
    color: PropTypes.string
};