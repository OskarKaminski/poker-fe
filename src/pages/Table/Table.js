import './Table.scss';
import React from 'react'
import _ from 'lodash';
import classNames from 'classnames';
import {
    graphql,
    createFragmentContainer
} from 'react-relay';
//Components
import {Seat} from 'Molecule/Seat/Seat';

const Table = ({store}) => (
    <div className="game-table game-table--seats-5">
        {/*{*/}
        {/*_.map(seats, (seat, key) => (*/}
        {/*<div className={classNames('game-table__seat', `game-table__seat--${seat.no}`)}*/}
        {/*key={seat.no}>*/}
        {/*<Seat number={seat.no}*/}
        {/*seatKey={key}*/}
        {/*player={seat.player}*/}
        {/*onSit={props.onSit}/>*/}
        {/*</div>*/}
        {/*))*/}
        {/*}*/}
        <p>{store.table.name}</p>
        <p>{store.table.stake}</p>


    </div>
);

export default createFragmentContainer(
    Table,
    graphql`
        fragment Table_store on Store {
            table{
                name
                stake
           }
        }
    `
)