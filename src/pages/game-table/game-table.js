import './game-table.scss';
import React from 'react'
import _ from 'lodash';
import {connect} from 'react-redux'
import classNames from 'classnames';
import {withRouter} from 'react-router-dom'
//Adapters
import {listenTable, reserveSeat} from 'Adapter/tables';
//Components
import {Player} from 'Component/player/player';
import {Board} from 'Component/board/board';
import {Seat} from 'Molecule/Seat/Seat';
import {JoinOptions} from 'Molecule/JoinOptions/JoinOptions';
//State
import {seatReserved} from 'State/seats/seats.actions';
import {tableUpdated} from 'State/table/table.actions';
import {checkSeatNumber} from 'State/user/user.actions';

const props = ({table, user}) => ({table, user});

const trackUserSeat = (seats, userId) => {
    return _.find(seats, seat => {
        return seat.player && seat.player.uid === userId;
    })
}

@withRouter
@connect(props, {tableUpdated, seatReserved, checkSeatNumber})
export class GameTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showJoinOptions: false
        }
    }

    componentDidMount() {
        const tableKey = this.props.match.params.id;
        listenTable(tableKey, table => {
            this.props.tableUpdated(table, tableKey);
            this.props.checkSeatNumber(table, this.props.user.uid);
        });
    }

    onSit = (number) => {
        this.props.seatReserved(number);
    }
    onJoinOptionsEnter = (number, money) => {
        const tableKey = this.props.match.params.id;
        const user = {
            uid: this.props.player.uid,
            displayName: this.props.user.displayName
        }
        this.props.dbSeatSit(tableKey, number, user, money);
        // this.props.dbSeatEnroll(money);
    }

    render() {
        const seats = this.props.table.seats;
        const numOfSeats = seats && seats.length;
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
                    _.map(seats, (seat, key) => (
                        <div className={classNames('game-table__seat', `game-table__seat--${seat.no}`)}
                             key={seat.no}>
                            <Seat number={seat.no}
                                  seatKey={key}
                                  player={seat.player}
                                  status={seat.status}
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