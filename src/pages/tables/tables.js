import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import map from 'lodash/map';
import {firebaseConnect, dataToJS} from 'react-redux-firebase'
import {TablesListItem} from 'Molecule/TablesListItem/TablesListItem'
import {Button} from 'Atom/Button/Button'
import {addTable} from 'Adapter/tables';
import './tables.scss'

// @withRouter()
@firebaseConnect(['tables'])
@connect(({firebase}) => ({
    tables: dataToJS(firebase, 'tables')
}))
export class Tables extends React.Component {
    addTable = () => {
        addTable({
            id: 1,
            name: 'table #1',
            stake: '0.10/0.20',
            seats: 4,
            players: []
        })
    }
    onJoinTable = (id) => {
        console.log(id);
    }
    render() {
        return (
            <div className="tables">
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