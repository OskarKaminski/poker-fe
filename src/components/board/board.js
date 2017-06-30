import React from 'react'
import {Card} from 'Component/card/card';
import './board.css';

export const Board = (props) => {
    const flop = props.data.flop.map((card, key) => {
        return (
            <Card key={key} data={card}></Card>
        )
    });

    return (
        <div className="board">
            <div className="cards">
                <div className="flop">
                    <div className="card-holder">
                        {flop}
                    </div>
                </div>
                <div className="turn">
                    <div className="card-holder">
                        <Card data={props.data.turn}></Card>
                    </div>
                </div>
                <div className="river">
                    <div className="card-holder">
                        <Card data={props.data.river}></Card>
                    </div>
                </div>
            </div>
        </div>
    )
};