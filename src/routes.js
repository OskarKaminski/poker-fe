import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import React from 'react';
import { graphql } from 'react-relay';

import App from './App';
import Tables from './app/tables/Tables';
import GameTable from './pages/game-table/game-table';


export default makeRouteConfig(
    <Route
        path="/"
        Component={App}
        query={graphql`
                query routes_App_Query{
                    store {
                        ...App_store
                    }
                }
              `}
    >
        <Route
            path='tables'
            Component={Tables}
            query={graphql`
                query routes_Tables_Query{
                    store {
                        ...Tables_store
                    }
                }
              `}
        />
        <Route
            path='table'
            Component={GameTable}
            query={graphql`
                query routes_gameTable_Query{
                    store {
                        table(id: "59abf1a01710ba3b74718220") {
                            name,
                            stake
                        }
                    }
                }
              `}
        />
    </Route>,
);