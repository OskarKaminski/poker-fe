import {card} from './card/card';
import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'
import {Card} from './card/card';

class ReactApp extends Component {

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

render(
    <ReactApp/>,
    document.getElementById('content')
);