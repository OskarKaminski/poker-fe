import React from 'react';
import {
    graphql,
    createFragmentContainer
} from 'react-relay';

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

export const QuoteContainer = createFragmentContainer(
    Quote,
    graphql`
        fragment Quote_quote on Quote {
          text,
          author
        }
    `
);