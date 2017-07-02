import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from 'State/store';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import ReactDOM from 'react-dom';
import App from 'Page/app';

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter history={history}>
                <App/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('app')
    )
}

render();
if (module.hot) {
    module.hot.accept('Page/app', function () {
        render();
    })
}