import React from 'react'
import {Button} from 'Atom/Button/Button'
import './TablesListItem.scss'

export const TablesListItem = (props) => (
    <div className="tables-list-item">
        <div className="tables-list-item__name">{props.name}</div>
        <div className="tables-list-item__seats">{props.numOfSeats}</div>
        <div className="tables-list-item__stake">{props.stake}</div>
        <Button label="Join" onClick={()=>props.onJoinTable(props.tableKey)}/>
    </div>
)