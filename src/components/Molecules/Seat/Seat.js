import React from 'react'
import {PropTypes} from 'prop-types';
import {Button} from 'Atom/Button/Button';
import './Seat.scss';

const renderPlayer = (player) => (
    <div>
        <span><strong>{player.login}: </strong></span>
        <span>{player.balance}</span>
    </div>
)

const renderEmptySeat = (number, reserved, onSit) => {
    return reserved ?
        <span>Reserved</span> :
        <span onClick={()=>onSit(number)}>Sit</span>
}

export const Seat = (props) => (
    <div className="seat">
        {
            props.player ?
                renderPlayer(props.player) :
                renderEmptySeat(props.number, props.reserved, props.onSit)
        }
    </div>
)

Seat.propTypes = {
    number: PropTypes.number,
    player: PropTypes.object,
    onSit: PropTypes.func.isRequired
}