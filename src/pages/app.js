import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Route, Link, Switch, withRouter} from 'react-router-dom'
import {authStateChanged} from 'State/auth/auth.actions'
import {userUpdated} from 'State/user/user.actions'
import {auth} from 'Adapter/firebase';
import {onUserChange} from 'Adapter/user';
import {GameTable} from 'Page/game-table/game-table';
import {GameService} from 'DL/game/game.service';
import {GameTables} from 'Page/game-tables/game-tables';
import {Login} from 'Page/login/login';
import 'bootstrap/dist/css/bootstrap.css';
import './app.scss';

const mapStateToProps = ({user}) => ({user});

@withRouter
@connect(mapStateToProps, {authStateChanged, userUpdated})
export default class App extends Component {
    constructor(props) {
        super(props);
        auth.onAuthStateChanged(authData => {
            props.authStateChanged(authData)
            onUserChange(authData.uid, props.userUpdated)
        })
        this.state = {
            fullScreen: false
        }
    }

    componentDidMount(){
        document.onwebkitfullscreenchange = () => {
            this.setState((previous) => {
                fullScreen: !previous.fullScreen
            });
        }

        // Fix for mozilla
        document.onmozfullscreenchange = document.onwebkitfullscreenchange;
    }

    enterFillScreen = () => {
        // TODO - add fullscreen for mozilla
        document.getElementById('app').webkitRequestFullscreen();
    }

    render() {
        if (!this.props.user.uid) {
            return (
                <div>
                    Loading...
                </div>
            )
        }
        return (
            <div className='app'>
                {
                    !document.webkitFullscreenElement &&
                    <div className="app__full-screen-btn">
                        <div className="btn" onClick={this.enterFillScreen}>Full screen</div>
                    </div>

                }
                <Switch>
                    <Route path="/table/:id" component={GameTable}/>
                    <Route path="/tables" component={GameTables}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        )
    }

}