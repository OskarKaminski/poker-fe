// ACTIONS on DB
export const dbFetchTables = () => ({
    type: 'DB/FETCHING_TABLES'
});

// ACTIONS on store
export const storeUpdateTables = (payload) => ({
    type: 'STORE/UPDATE_TABLES',
    payload
})