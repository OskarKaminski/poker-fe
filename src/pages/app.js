import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Table} from 'Component/table/table';
import {GameService} from 'DL/game/game.service';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import {Tables} from 'Pages/tables/tables';
import './app.scss';

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
                <BrowserRouter>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/table">Table</Link></li>
                            <li><Link to="/tables">Tables</Link></li>
                        </ul>

                        <Route path="/table" component={Table}/>
                        <Route path="/tables" component={Tables}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }

}