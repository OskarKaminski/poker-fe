import React from 'react'
import {connect} from 'react-redux'
import map from 'lodash/map';
import {withRouter} from 'react-router-dom'
import {TablesListItem} from 'Molecule/TablesListItem/TablesListItem'
import {Button} from 'Atom/Button/Button'
import {addTable} from 'Adapter/tables';
import {dbFetchTables} from 'State/tables/tables.actions'
import './game-tables.scss'

const props = ({tables}) => ({tables});

@withRouter
@connect(props, {dbFetchTables})
export class GameTables extends React.Component {
    componentWillMount(){
        this.props.dbFetchTables();
    }
    addTable = () => {
        addTable({
            id: 1,
            name: 'table #1',
            stake: '0.10/0.20',
            numOfSeats: 4,
            players: []
        })
    }
    onJoinTable = (id) => {
        this.props.history.push(`/table/${id}`);
    }
    render() {
        return (
            <div className="game-tables">
                <Button label="Add new table"
                        onClick={this.addTable}/>
                {
                    this.props.tables &&
                    map(this.props.tables, ((table, key)=>(
                        <TablesListItem {...table}
                                        onJoinTable={this.onJoinTable}
                                        key={key}/>
                    )))
                }
            </div>
        )
    }
}
;