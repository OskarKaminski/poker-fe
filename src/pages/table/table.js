import React from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames';
import _ from 'lodash';
import {firebaseConnect, dataToJS} from 'react-redux-firebase'
import {Player} from 'Component/player/player';
import {Board} from 'Component/board/board';
import {Seat} from 'Molecule/Seat/Seat';
import './table.scss';

const getTableById = id => ({
    path: 'tables',
    queryParams: [
        'orderByChild=id',
        'limitToFirst=1',
        'equalTo=' + id
    ]
})

@firebaseConnect((props, firebase) => ([
    getTableById(props.match.params.id)
]))
@connect(({firebase}) => ({
    table: dataToJS(firebase, 'tables')
}))
export class Table extends React.Component {
    constructor(props) {
        super(props);
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
        const seat = {
            number,
            player: {
                login: 'Oskar',
                balance: 2000
            }
        }
        this.props.firebase.push(`/tables/${this.tableKey()}/seats`, seat);
    }

    render() {
        if (!this.props.table) {
            return null;
        }
        const table = this.tableData();
        const seats = this.seatsData();
        return (
            <div className={classNames('table', `table--seats-${table.numOfSeats}`)}>
                <div className="table__info">
                    <p>{table.name} {table.stake}</p>
                </div>
                {
                    _.map(seats, (seat) => (
                        <div className={classNames('table__seat', `table__seat--${seat.number}`)}
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