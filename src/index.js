import React from 'react';
import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';
// import {Provider} from 'react-redux';
// import {store} from 'State/store';
// import {ConnectedRouter} from 'react-router-redux'
// import {history} from 'History';
import ReactDOM from 'react-dom';
// import App from 'Page/app';
import Relay from 'react-relay/classic';
// import QuotesLibrary from './pages/quotes/quotes';
import {QueryRenderer, graphql} from 'react-relay';
import {environment} from './adapters/relay-environment';
import AppHomeRoute from './routes/AppHomeRoute';

const Quote = ({quote}) => (
<div className="card card-outline-info mb-3 text-center">
    <div className="card-block">
        <blockquote className="card-blockquote">
            <p>{quote.text}</p>
            <footer>{quote.author}</footer>
        </blockquote>
    </div>
</div>
)

const QuoteContainer = Relay.createContainer(Quote, {
    fragments: {
        quote: () => Relay.QL`
            fragment on Quote {
              text,
              author
            }
        `
    }
});

const Quotes = ({store}) => (
    <div className="quotes-list">
        {
            store.allQuotes.map(quote => (
                <QuoteContainer
                    key={quote.id}
                    quote={quote}
                />
            ))
        }
    </div>
)

const QuotesContainer = Relay.createContainer(Quotes, {
    fragments: {
        store: () => Relay.QL`
            fragment on Users {
                allQuotes {
                  id,
                  ${QuoteContainer.getFragment('quote')}
                }
            }
        `
    }
});

Relay.injectNetworkLayer(
    new Relay.DefaultNetworkLayer('http://localhost:3002/graphql')
);

const render = () => {
    ReactDOM.render(
        <Relay.Renderer
            environment={Relay.Store}
            Container={QuotesContainer}
            queryConfig={new AppHomeRoute()}
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