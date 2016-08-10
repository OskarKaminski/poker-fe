import React, {PropTypes} from "react";
import Player from "../player/player"
import Board from "../board/board"

const Table = ({players, board}) => {

    // @TODO Decide how and where players are placed

    return (
        <div className="table">
            {players.map((player) => {
                return (
                    <Player key={player.id}
                            cards={player.cards}
                            combination={player.combination}
                            id={player.id}/>
                );
            })}

            <Board {...board} />
        </div>
    );

};

Table.propTypes = {
    players: PropTypes.array.isRequired,
    board: PropTypes.object.isRequired
};

export default Table;