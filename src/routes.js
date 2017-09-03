import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import React from 'react';
import { graphql } from 'react-relay';

import App from './App';


export default makeRouteConfig(
    <Route
        path="/"
        Component={App}
        query={graphql`
                query routes_Query{
                    store {
                        ...App_store
                    }
                }
              `}

    >
    </Route>,
);