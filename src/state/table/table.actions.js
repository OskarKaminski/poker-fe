import actions from '../actions';

// ACTIONS on store
export const tableUpdated = (payload) => ({
    type: actions.table.updated,
    payload
})