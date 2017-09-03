import React from 'react';
import 'babel-polyfill';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import BrowserProtocol from 'farce/lib/BrowserProtocol';
import queryMiddleware from 'farce/lib/queryMiddleware';
import createFarceRouter from 'found/lib/createFarceRouter';
import createRender from 'found/lib/createRender';
import { Resolver } from 'found-relay';
import {environment} from './adapters/relay-environment';
import routes from './routes';

const Router = createFarceRouter({
    historyProtocol: new BrowserProtocol(),
    historyMiddlewares: [queryMiddleware],
    routeConfig: routes,

    render: createRender({}),
});

const render = () => {
    ReactDOM.render(
        <Router resolver={new Resolver(environment)} />,
        document.getElementById('app')
    )
}

render();
// if (module.hot) {
//     module.hot.accept('Page/app', function () {
//         render();
//     })
// }