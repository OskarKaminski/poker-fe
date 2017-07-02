import React from 'react';
import {Provider} from 'react-redux';
import {store} from 'State/store';
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import ReactDOM from 'react-dom';
import App from 'Page/app';

const history = createHistory()

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
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