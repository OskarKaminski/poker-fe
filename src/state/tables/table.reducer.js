export const tableReducer = (state = [], action) => {
    switch(action.type){
        case 'CURRENT_TABLE_UPDATED':
            return action.payload
    }
    return state;
}