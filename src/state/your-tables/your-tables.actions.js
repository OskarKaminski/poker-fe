// ACTIONS on DB
export const dbAddYourTable = (tableKey, seatKey) => ({
    type: 'DB/ADD_YOUR_TABLE'
});
export const dbRemoveYourTable = (tableKey) => ({
    type: 'DB/REMOVE_YOUR_TABLE'
});

// ACTIONS on store
export const storeAddYourTable = (payload) => ({
    type: 'STORE/ADD_YOUR_TABLE',
    payload
})
export const storeRemoveYourTable = (payload) => ({
    type: 'STORE/REMOVE_YOUR_TABLE',
    payload
})