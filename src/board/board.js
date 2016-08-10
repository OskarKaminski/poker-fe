import React, {PropTypes} from "react";
import Card from "../card/card"

const Board = ({flop, turn, river}) => {

    // Flop
    const flopContent = flop && (
            <div className="flop">
                <div className="card-holder">
                    {flop.map((card, key) => {
                        return (
                            <Card key={key} value={card.value} symbol={card.symbol}/>
                        );
                    })}
                </div>
                <div>Flop</div>
            </div>
        );

    // Turn
    const turnContent = turn && (
            <div className="turn">
                <div className="card-holder">
                    <Card value={turn.value}
                          symbol={turn.symbol}/>
                </div>
                Turn
            </div>
        );

    // River
    const riverContent = river && (
            <div className="river">
                <div className="card-holder">
                    <Card key={river.value + " " + river.symbol} value={river.value}
                          symbol={river.symbol}/>
                </div>
                River
            </div>
        );

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
    flop: PropTypes.array,
    turn: PropTypes.object,
    river: PropTypes.object
};

export default Board;