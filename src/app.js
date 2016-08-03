import React, {Component, PropTypes} from 'react'
import {Card} from './card/card';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                value: 8,
                symbol: 'spades'
            }
        }
    }

    render() {
        return (
            <div className='app'>
                <h1>Comments</h1>
                <Card data={this.state.data}></Card>
            </div>
        )
    }

}