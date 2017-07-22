import actions from '../actions';

export const updatedTables = (payload) => ({
    type: actions.tables.updated,
    payload
})