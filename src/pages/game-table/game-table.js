import './game-table.scss';
import React from 'react'
import _ from 'lodash';
import {connect} from 'react-redux'
import classNames from 'classnames';
import {withRouter} from 'react-router-dom'
//Adapters
import {listenTable} from 'Adapter/tables';
//Components
import {Player} from 'Component/player/player';
import {Board} from 'Component/board/board';
import {Seat} from 'Molecule/Seat/Seat';
import {JoinOptions} from 'Molecule/JoinOptions/JoinOptions';
//State
import {dbSeatReservation, dbSeatSit, dbSeatEnroll} from 'State/seats/seats.actions';
import {storeUpdateTable} from 'State/tables/tables.actions';

const props = ({currentTable, player}) => ({currentTable, player});

@withRouter
@connect(props, {dbSeatReservation, dbSeatSit, dbSeatEnroll, storeUpdateTable})
export class GameTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showJoinOptions: false
        }
    }
    componentDidMount(){
        const tableKey = this.props.match.params.id;
        listenTable(tableKey, this.props.storeUpdateTable)
    }
    onSit = (number) => {
        const tableKey = this.props.match.params.id;
        const user = {
            uid: this.props.player.uid,
            displayName: this.props.player.profile.displayName
        }
        this.props.dbSeatReservation(tableKey, number, user);
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
        const seats = this.props.currentTable.seats;
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