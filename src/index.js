import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import App from 'Pages/app';

const render = () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
}

render();
if (module.hot) {
    module.hot.accept('Pages/app', function() {
        render();
    })
}