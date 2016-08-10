import React, {PropTypes} from "react";
import Card, {labels} from "../card/card"

const Player = ({cards, combination, id}) => {

    const cardsContent = cards.map((card, key) => {
        return (
            <Card key={key} value={card.value} symbol={card.symbol}/>
        );
    });

    const combinationContent = combination && (
            combination.kicker.map(v => {
                return labels[v] ? labels[v] : v;
            }).join(', ')
        );

    return (
        <div className={"player"} id={"player" + id}>
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
    id: PropTypes.number.isRequired
};

export default Player;