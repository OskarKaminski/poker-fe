import React, {Component} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {Table} from 'Page/table/table';
import {GameService} from 'DL/game/game.service';
import {Tables} from 'Page/tables/tables';
import {Login} from 'Page/login/login';
// import 'tether';
import 'bootstrap/dist/css/bootstrap.css';
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
                <Switch>
                    <Route path="/table/:id" component={Table}/>
                    <Route path="/tables" component={Tables}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        )
    }

}