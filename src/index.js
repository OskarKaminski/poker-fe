import React from 'react';
import 'babel-polyfill';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.css';
// import {Provider} from 'react-redux';
// import {store} from 'State/store';
// import {ConnectedRouter} from 'react-router-redux'
// import {history} from 'History';
import ReactDOM from 'react-dom';
// import App from 'Page/app';
// import QuotesLibrary from './pages/quotes/quotes';
import {
    QueryRenderer,
    graphql
} from 'react-relay';
import {environment} from './adapters/relay-environment';
import App from './App';

const render = () => {
    ReactDOM.render(
        <QueryRenderer
            environment={environment}
            query={graphql`
                query src_indexQuery{
                    store {
                        ...App_store
                    }
                }
              `}
            variables={{}}
            render={({error, props}) => {
                if (props) {
                    return <App store={props.store} />;
                } else {
                    return <div>Loading</div>;
                }
            }}
        />,
        document.getElementById('app')
    )
}

render();
// if (module.hot) {
//     module.hot.accept('Page/app', function () {
//         render();
//     })
// }