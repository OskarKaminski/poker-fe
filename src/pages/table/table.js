import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash';
import {firebaseConnect, dataToJS} from 'react-redux-firebase'
import {Player} from 'Component/player/player';
import {Board} from 'Component/board/board';
import './table.scss';

const getTableById = id => ({
    path: 'tables',
    queryParams: [
        'orderByChild=id',
        'limitToFirst=1',
        'equalTo='+id
    ]
})

@firebaseConnect((props, firebase) => ([
    getTableById(props.match.params.id)
]))
@connect(({firebase}) => ({
    table: dataToJS(firebase, 'tables')
}))
export class Table extends React.Component{
    constructor(props){
        super(props);
    }
    tableData = () => {
        return _.toArray(this.props.table)[0];
    }
    render(){
        if(!this.props.table){
            return null;
        }
        const table = this.tableData();
        return (
            <div className="table">
                <div className="table__info">
                    <p>{table.name} {table.stake}</p>
                </div>
                <div className="table__top-sit">

                </div>

                {/*<Board data={props.board}></Board>*/}

                <div className="table__bottom-sit">
                </div>

            </div>
        )
    }
};