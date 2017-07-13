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
import './game-table.scss';

const getTableById = id => ({
    path: 'tables',
    queryParams: [
        'orderByChild=id',
        'limitToFirst=1',
        'equalTo=' + id
    ]
})

@withRouter
@connect(null, {getCurrentUser})
export class GameTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showJoinOptions: false
        }
    }

    tableData = () => {
        return _.toArray(this.props.table)[0];
    }
    seatsData = () => {
        const numOfSeats = this.tableData().numOfSeats;
        return _.map(new Array(numOfSeats), (el, i) => {
            const seatOccupied = _.find(this.tableData().seats, {number: i+1});
            return seatOccupied || {number: i+1};
        })
    }
    tableKey = () => {
        return _.keys(this.props.table)[0];
    }
    onSit = (number) => {
        this.setState({
            showJoinOptions: number
        });
    }
    onJoinOptionsEnter = (money) => {
        getCurrentUser().then(user => {
            const seat = {
                number: this.state.showJoinOptions,
                player: {
                    login: user.login,
                    balance: money
                }
            }
            this.props.firebase.update(`/users/${currentUserId()}`, {balance: user.balance - money});
            this.props.firebase.push(`/tables/${this.tableKey()}/seats`, seat);
            this.setState({showJoinOptions: false});
        })
    }
    render() {
        if (!this.props.table) {
            return null;
        }
        const table = this.tableData();
        const seats = this.seatsData();
        return (
            <div className={classNames('game-table', `game-table--seats-${table.numOfSeats}`)}>
                {/*<div className="game-table__info">*/}
                    {/*<p>{table.name} {table.stake}</p>*/}
                {/*</div>*/}
                {
                    this.state.showJoinOptions &&
                    <JoinOptions onJoin={this.onJoinOptionsEnter}/>
                }
                {
                    _.map(seats, (seat) => (
                        <div className={classNames('game-table__seat', `game-table__seat--${seat.number}`)}
                             key={seat.number}>
                            <Seat number={seat.number}
                                  player={seat.player}
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