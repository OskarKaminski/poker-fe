import React from 'react'
import PropTypes from 'prop-types';
import {Button} from 'Atom/Button/Button';
import {Card} from './Card/Card';
import './Seat.scss';

const renderPlayer = (nickname, avatar, chips, cards) => (
    <div className="seat">
        <div className="seat__avatar"><img src={avatar} alt=""/></div>
        <div className="seat__cards-and-stats">
            <div className="seat__cards">
                <Card {...cards[0]} />
                <Card {...cards[1]} />
            </div>
            <div className="seat__stats">
                <span>{nickname}</span>
                <span>{chips}</span>
            </div>
        </div>
    </div>
);

const renderEmptySeat = (key, onSit) => (
    <span onClick={() => {
    }}>Sit</span>
);

const renderSeat = (props) => {
    if (props.nickname) {
        return renderPlayer(props.nickname, props.avatar, props.chips, props.cards);
    }
    return renderEmptySeat(props.seatKey, props.onSit);
};

export const Seat = (props) => (
    <div className="seat">
        {renderSeat(props)}
    </div>
);

Seat.propTypes = {
    number: PropTypes.number,
    seatKey: PropTypes.number,
    nickname: PropTypes.string,
    avatar: PropTypes.string,
    chips: PropTypes.string,
    cards: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.shape({
            value: PropTypes.string,
            color: PropTypes.string
        }))
    )
    // onSit: PropTypes.func.isRequired
};