import React from 'react';
import {
    graphql,
    createFragmentContainer
} from 'react-relay';
import {QuoteContainer} from './Quote';

const Quotes = ({store}) => {
    return (
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
}

export const App = createFragmentContainer(
    Quotes,
    graphql`
        fragment App_store on Users {
            countUsers,
            allQuotes {
                id,
                ...Quote_quote
            }
        }
    `
);

