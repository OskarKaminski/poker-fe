import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import React from 'react';
import { graphql } from 'react-relay';

import App from './App';
import Tables from './app/tables/Tables';
import Table from './pages/Table/Table';

const tableQuery = graphql`
query routesTableQuery($tableId: String){
    store {
        table(id: $tableId){
            ...Table_table
        }
    }
}
`

export default makeRouteConfig(
    <Route
        path="/"
        Component={App}
        query={graphql`
            query routesAppQuery{
                store {
                    ...App_store
                }
            }
          `}
    >
        <Route
            path="table"
            Component={Table}
            prepareVariables={params => ({tableId: '59abf1a01710ba3b74718220'})}
            query={tableQuery}
            render={({Component, props})=>{
                return <Component table={props.store.table} />
            }}
        />
    </Route>,
);