import React from 'react'
import {connect} from 'react-redux'
import {firebaseConnect, dataToJS} from 'react-redux-firebase'

@firebaseConnect(['tables'])
@connect(({firebase}) => ({
    tables: dataToJS(firebase, 'tables')
}))
export class Tables extends React.Component {
    render() {
        console.log(this.props.tables);
        return (
            <div className="tables">
            </div>
        )
    }
}
;