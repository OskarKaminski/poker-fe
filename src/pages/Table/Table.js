import './Table.scss';
import React from 'react'
import {
    graphql,
    createFragmentContainer
} from 'react-relay';

const Table = ({table}) => (
        <div className="game-table game-table--seats-5">
            <p>{table.name}</p>
            <p>{table.stake}</p>
        </div>
);

export default createFragmentContainer(
    Table,
    graphql`
        fragment Table_table on Table {
            name
            stake
        }
    `
)