import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash';
import {firebaseConnect, dataToJS} from 'react-redux-firebase'
import {Player} from 'Component/player/player';
import {Board} from 'Component/board/board';
import './table.scss';

@firebaseConnect(['tables'])
@connect(({firebase}) => ({
    tables: dataToJS(firebase, 'tables')
}))
export class Table extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.match.params);
    }
    componentDidMount(){
        const tableId = this.props.match.params.id;
        const table = _.find(this.props.tables, {$key: tableId});
        console.log(table);
    }
    render(){
        return (
            <div className="table">
                <div className="table__top-sit">

                </div>

                {/*<Board data={props.board}></Board>*/}

                <div className="table__bottom-sit">
                </div>

            </div>
        )
    }
};