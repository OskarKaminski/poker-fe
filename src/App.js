import React from 'react';
import {
    graphql,
    createFragmentContainer
} from 'react-relay';

const App = ({children, viewer}) => (
    <div className="app">
        Num of users: {viewer.countUsers}
        {children}
    </div>
)

export default createFragmentContainer(
    App,
    graphql`
        fragment App_viewer on Viewer {
            countUsers
        }
    `
);

