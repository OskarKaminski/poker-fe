import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {store} from 'State/store';
import ReactDOM from 'react-dom';
import App from 'Pages/app';

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('app')
    )
}

render();
if (module.hot) {
    module.hot.accept('Pages/app', function () {
        render();
    })
}