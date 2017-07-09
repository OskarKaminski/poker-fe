import React from 'react';
import './JoinOptions.scss';

export class JoinOptions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            money: 0
        }
    }
    onChangeMoney = (event) => {
        this.setState({
            money: event.target.value
        })
    }
    render(){
        return (
            <div className="join-options">
                <h5>Money</h5>
                <input type="number"
                       value={this.state.money}
                       onChange={this.onChangeMoney}
                       className="form-control"
                       placeholder="500"/>
                <button className="btn btn-primary btn-block"
                        onClick={()=>this.props.onJoin(this.state.money)}>Join</button>
            </div>
        )
    }
}