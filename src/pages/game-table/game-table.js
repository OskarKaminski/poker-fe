import React from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames';
import {withRouter} from 'react-router-dom'
import _ from 'lodash';
import {getCurrentUser, currentUserId} from 'Adapter/user';
import {Player} from 'Component/player/player';
import {Board} from 'Component/board/board';
import {Seat} from 'Molecule/Seat/Seat';
import {JoinOptions} from 'Molecule/JoinOptions/JoinOptions';
import {dbFetchSeats, seatReservation} from 'State/seats/seats.actions';
import './game-table.scss';

const props = ({user, seats}) => ({user, seats});

@withRouter
@connect(props, {dbFetchSeats, seatReservation})
export class GameTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showJoinOptions: false
        }
    }
    componentDidMount(){
        this.props.dbFetchSeats(this.props.match.params.id);
    }
    onSit = (number) => {
        this.props.seatReservation(number, this.props.user.displayName);
        this.setState({
            showJoinOptions: number
        });
    }
    onJoinOptionsEnter = (money) => {
        const seat = {
            number: this.state.showJoinOptions,
            player: {
                login: this.props.user.login,
                balance: money
            }
        }
        this.props.firebase.update(`/users/${currentUserId()}`, {balance: user.balance - money});
        this.props.firebase.push(`/tables/${this.tableKey()}/seats`, seat);
        this.setState({showJoinOptions: false});
    }
    render() {
        const numOfSeats = this.props.seats.length;
        const seats = this.props.seats;
        return (
            <div className={classNames('game-table', `game-table--seats-${numOfSeats}`)}>
                {/*<div className="game-table__info">*/}
                    {/*<p>{table.name} {table.stake}</p>*/}
                {/*</div>*/}
                {
                    this.state.showJoinOptions &&
                    <JoinOptions onJoin={this.onJoinOptionsEnter}/>
                }
                {
                    _.map(seats, (seat) => (
                        <div className={classNames('game-table__seat', `game-table__seat--${seat.no}`)}
                             key={seat.no}>
                            <Seat number={seat.no}
                                  player={seat.player}
                                  reserved={seat.reserved}
                                  onSit={this.onSit}/>
                        </div>
                    ))
                }

                {/*<Board data={props.board}></Board>*/}


            </div>
        )
    }
}
;