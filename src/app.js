import React, {Component, PropTypes} from 'react'
import {Table} from 'Component/table/table';
import {GameService} from 'DL/game/game.service';
import './styles.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                value: 8,
                symbol: 'spades'
            }
        };

        const gameService = new GameService();

        this.player1 = {
            name: 'Oskar'
        };
        this.player2 = {
            name: 'Opponent'
        };

        this.players = [
            {cards: gameService.pullOutPlayerCards(this.player1.name)},
            {cards: gameService.pullOutPlayerCards(this.player2.name)}
        ];

        this.board = {
            flop: gameService.pullOutFlop(),
            turn: gameService.pullOutTurn(),
            river: gameService.pullOutRiver()
        };
    }

    render() {
        return (
            <div className='app'>
                <Table players={this.players}
                       board={this.board}></Table>
            </div>
        )
    }

}