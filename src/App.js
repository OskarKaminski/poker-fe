import React from 'react';
import {
    graphql,
    createFragmentContainer
} from 'react-relay';

const App = ({children}) => (
    <div className="app">
        App2
        {children}
    </div>
)

export default createFragmentContainer(
    App,
    graphql`
        fragment App_store on Store {
            ...Tables_store
        }
    `
);

