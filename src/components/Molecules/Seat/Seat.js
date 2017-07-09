import React, {PropTypes} from 'react'
import {Button} from 'Atom/Button/Button';
import './Seat.scss';

const renderPlayer = (player) => (
    <div>
        <span><strong>{player.login}: </strong></span>
        <span>{player.balance}</span>
    </div>
)

const renderEmptySeat = (number, onSit) => (
    <span onClick={()=>onSit(number)}>Sit</span>
)

export const Seat = (props) => (
    <div className="seat">
        {
            props.player ?
                renderPlayer(props.player) :
                renderEmptySeat(props.number, props.onSit)
        }
    </div>
)

Seat.propTypes = {
    number: PropTypes.number,
    player: PropTypes.object,
    onSit: PropTypes.func.isRequired
}