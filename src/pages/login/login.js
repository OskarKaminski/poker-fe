import React from 'react';
import {getUser} from 'Adapter/user';
import {connect} from 'react-redux';
import {login} from 'State/auth/auth.actions';
import './login.scss';

const props = ({auth}) => ({auth});

@connect(props, {login})
export class Login extends React.Component {
    onLogin = () => {
        this.props.login();
        this.props.history.push('/tables');
    }
    render() {
        return (
            <div>
                <section id="wrapper" className="login-register">
                    <img className="login-register__image"
                         src="https://www.elie.net/image/public/1476988497/fuller-house-exposing-high-end-poker-cheating-devices.jpg?w=1200&h=600&c=2"
                         alt=""/>
                </section>
                <div className="login-box login-sidebar">
                    <div className="white-box">
                        <a href="" className="text-center db">
                            <img className="logo-img"
                                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/World_Series_of_Poker_logo.svg/2000px-World_Series_of_Poker_logo.svg.png"
                                 alt="Home"/>
                        </a>
                        <button className="btn btn-primary btn-block"
                                onClick={()=>this.onLogin('facebook')}
                                type="button">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}