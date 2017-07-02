import React from 'react'
import {Player} from 'Component/player/player';
import {Board} from 'Component/board/board';
import './table.scss';

export const Table = (props) => {
    return (
        <div className="table">
            <div className="table__top-sit">
                <Player cards={props.players[0].cards}
                        board={props.board}></Player>
            </div>

            <Board data={props.board}></Board>

            <div className="table__bottom-sit">
                <Player cards={props.players[1].cards}
                        board={props.board}></Player>
            </div>

        </div>
    )
};