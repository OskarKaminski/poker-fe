import actions from '../actions';

// ACTIONS on store
export const tableUpdated = (payload, key) => ({
    type: actions.table.updated,
    payload,
    key
})