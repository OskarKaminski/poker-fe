// ACTIONS on DB
export const dbFetchTables = () => ({
    type: 'DB/FETCHING_TABLES'
});
export const dbFetchTable = (id) => ({
    type: 'DB/FETCHING_TABLE',
    id
});

// ACTIONS on store
export const storeUpdateTables = (payload) => ({
    type: 'STORE/UPDATE_TABLES',
    payload
})
export const storeUpdateTable = (payload) => ({
    type: 'CURRENT_TABLE_UPDATED',
    payload
})