import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import App from './app';

const render = () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
}

render();
if (module.hot) {
    module.hot.accept('./app', function() {
        render();
    })
}