import React, {PropTypes} from "react";
import Card from "../card/card"

const Board = ({flop, turn, river}) => {

    // Flop
    let flopContent = '';

    if (flop) {

        let flopCards = flop.map(card => {

            return (
                <Card key={card.value + " " + card.symbol} value={card.value} symbol={card.symbol}/>
            );

        });

        flopContent = (
            <div className="flop">
                <div className="card-holder">
                    {flopCards}
                </div>
                <div>Flop</div>
            </div>
        );

    }

    // Turn
    let turnContent = '';

    if (turn) {

        turnContent = (
            <div className="turn">
                <div className="card-holder">
                    <Card key={turn.value + " " + turn.symbol} value={turn.value}
                          symbol={turn.symbol}/>
                </div>
                Turn
            </div>
        );

    }

    // River
    let riverContent = '';

    if (river) {

        riverContent = (
            <div className="river">
                <div className="card-holder">
                    <Card key={river.value + " " + river.symbol} value={river.value}
                          symbol={river.symbol}/>
                </div>
                River
            </div>
        );

    }

    return (
        <div className="board">
            <div className="cards">
                {flopContent}
                {turnContent}
                {riverContent}
            </div>
        </div>
    );

};

Board.propTypes = {
    flop: PropTypes.array.isRequired,
    turn: PropTypes.object.isRequired,
    river: PropTypes.object.isRequired
};

export default Board;