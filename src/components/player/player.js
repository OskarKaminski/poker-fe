import React from 'react';
import {Card} from 'Component/card/card';
import {combinationService} from 'DL/combination/combination.service';
import './player.css';

export const Player = (props) => {
    const cards = props.cards.map((card, key) => {
        return (
            <Card key={key} data={card}></Card>
        )
    });

    const combination = combinationService.checkCombination([...props.cards,
        ...props.board.flop,
        props.board.turn,
        props.board.river]);

    return (
        <div>
            {cards}
            <div className="combination">
                <p>Your combinationId: {combination.combinationId}</p>
            </div>
        </div>
    )
};