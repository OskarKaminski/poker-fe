import React from 'react';
import {
    graphql,
    createFragmentContainer
} from 'react-relay';
import Tables from './app/tables/Tables';

const App = ({store}) => (
    <div className="app">
        <Tables
            store={store}
        />
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

