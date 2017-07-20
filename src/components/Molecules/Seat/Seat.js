import React from 'react'
import {PropTypes} from 'prop-types';
import {Button} from 'Atom/Button/Button';
import './Seat.scss';

const renderPlayer = (player, status) => (
    <div>
        <span><strong>{player.displayName}: </strong></span>
        {
            status === 'reserved' ?
                <span>(Reserved)</span> :
                <span>{player.balance}</span>
        }
    </div>
)

const renderEmptySeat = (key, onSit) => (
    <span onClick={()=>onSit(key)}>Sit</span>
)

export const Seat = (props) => (
    <div className="seat">
        {
            props.player ?
                renderPlayer(props.player, props.status) :
                renderEmptySeat(props.seatKey, props.onSit)
        }
    </div>
)

Seat.propTypes = {
    number: PropTypes.number,
    seatKey: PropTypes.number,
    status: PropTypes.string,
    player: PropTypes.object,
    onSit: PropTypes.func.isRequired
}