import React, {PropTypes} from "react";
import Card, {labels} from "../card/card"

const Player = ({cards, combination, className}) => {

    let cardsContent = cards.map(card => {
        let key = card.value + " " + card.symbol;
        return (
            <Card key={key} value={card.value} symbol={card.symbol}/>
        );
    });

    let combinationContent = '';

    if (combination) {

        combinationContent = combination.kicker.map(v => {
            return labels[v] ? labels[v] : v;
        }).join(', ');

    }

    return (
        <div className={className + " player"}>
            {cardsContent}
            <div className="combination">
                <p>Your combination: {combinationContent}</p>
            </div>
        </div>
    );

};

Player.propTypes = {
    cards: PropTypes.array.isRequired,
    combination: PropTypes.object,
    className: PropTypes.string.isRequired
};

export default Player;