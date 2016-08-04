import React from 'react'
import {Player} from '../player/player';
import {Board} from '../board/board';

export const Table = (props) => {
    return (
        <div>
            <div className="table table__top-sit">
                <Player cards={props.players[0].cards}
                        board={props.board}></Player>
            </div>

            <Board data={props.board}></Board>

            <div className="table table__bottom-sit">
                <Player cards={props.players[1].cards}
                        board={props.board}></Player>
            </div>

        </div>
    )
};