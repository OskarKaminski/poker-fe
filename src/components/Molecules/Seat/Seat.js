import React from 'react'
import {PropTypes} from 'prop-types';
import {Button} from 'Atom/Button/Button';
import './Seat.scss';

const renderPlayer = (player, status) => (
    <div>
        <span><strong>{player.displayName}</strong></span>
    </div>
)
const renderReserved = () => (
    <span>Reserved</span>
)

const renderEmptySeat = (key, onSit) => (
    <span onClick={() => onSit(key)}>Sit</span>
)

const renderSeat = (props) => {
    switch (props.status) {
        case 1:
            return renderReserved();
            break;
        case 2:
            return renderPlayer(props.player, props.status);
            break;
        default:
            return renderEmptySeat(props.seatKey, props.onSit);
    }
};

export const Seat = (props) => (
    <div className="seat">
        {renderSeat(props)}
    </div>
)

Seat.propTypes = {
    number: PropTypes.number,
    seatKey: PropTypes.number,
    status: PropTypes.number,
    player: PropTypes.object,
    onSit: PropTypes.func.isRequired
}