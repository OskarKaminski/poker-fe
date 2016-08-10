import React, {PropTypes} from "react";
import Player from "../player/player"
import Board from "../board/board"

const Table = ({player1, player2, flop, turn, river}) => {

    return (
        <div className="table">
            <div className="top-sit">
                <Player cards={player2.cards}
                        combination={player2.combination}
                        className="player2"/>
            </div>

            <Board flop={flop}
                   turn={turn}
                   river={river}/>

            <div className="bottom-sit">
                <Player cards={player1.cards}
                        combination={player1.combination}
                        className="player1"/>
            </div>
        </div>
    );

};

Table.propTypes = {
    player1: PropTypes.object.isRequired,
    player2: PropTypes.object.isRequired,
    flop: PropTypes.array.isRequired,
    turn: PropTypes.object.isRequired,
    river: PropTypes.object.isRequired
};

export default Table;