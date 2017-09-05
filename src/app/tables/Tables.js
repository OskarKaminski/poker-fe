import React from 'react'
import PropTypes from 'prop-types';
import {
    graphql,
    createFragmentContainer
} from 'react-relay';
import TablesItem from './tables-item/TablesItem';
import './tables.scss'

const Tables = ({store}) => {
    console.log({'store': store});
    return (
        <div className="game-tables">
            {
                store.tables.map((table, key) => (
                    <TablesItem key={table.id} table={table}/>
                ))
            }
        </div>
    )
}
// GameTables.PropTypes = {
//     tables: PropTypes.array.isRequired,
//     addTable: PropTypes.func
// }
export default createFragmentContainer(
    Tables,
    graphql`
        fragment Tables_store on Store {
            tables {
                id
                ...TablesItem_table
            }
        }
    `
)