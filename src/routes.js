import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import React from 'react';
import { graphql } from 'react-relay';

import App from './App';
import Tables from './app/tables/Tables';
import Table from './components/Table/Table';

const tableQuery = graphql`
query routesTableQuery($tableId: String){
    viewer {
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
                viewer {
                    ...App_viewer
                }
            }
          `}
    >
        <Route
            path="table/:id"
            Component={Table}
            prepareVariables={params => {
                return {tableId: params.id}
            }}
            query={tableQuery}
            render={({Component, props})=>{
                return <Component table={props.viewer.table} />
            }}
        />
    </Route>,
);