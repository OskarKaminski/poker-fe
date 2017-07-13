import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Route, Link, Switch, withRouter} from 'react-router-dom'
import {authStateChanged} from 'State/auth/auth.actions'
import {auth} from 'Adapter/firebase';
import {GameTable} from 'Page/game-table/game-table';
import {GameService} from 'DL/game/game.service';
import {GameTables} from 'Page/game-tables/game-tables';
import {Login} from 'Page/login/login';
import 'bootstrap/dist/css/bootstrap.css';
import './app.scss';

const mapStateToProps = ({auth}) => ({auth});

@withRouter
@connect(mapStateToProps, {authStateChanged})
export default class App extends Component {
    constructor(props) {
        super(props);
        auth.onAuthStateChanged(authData => {
            this.props.authStateChanged(authData)
        })
    }

    render() {
        if(!this.props.auth.uid){
            return (
                <div>
                    Loading...
                </div>
            )
        }
        return (
            <div className='app'>
                <Switch>
                    <Route path="/table/:id" component={GameTable}/>
                    <Route path="/tables" component={GameTables}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        )
    }

}