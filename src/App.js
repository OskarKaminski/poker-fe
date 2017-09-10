import React from 'react';
import {
    graphql,
    createFragmentContainer
} from 'react-relay';

const App = ({children, store}) => (
    <div className="app">
        Num of users: {store.countUsers}
        {children}
    </div>
)

export default createFragmentContainer(
    App,
    graphql`
        fragment App_store on Store {
            countUsers
        }
    `
);

