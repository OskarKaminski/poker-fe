export const tablesReducer = (state = [], action) => {
    switch(action.type){
        case 'STORE/UPDATE_TABLES':
            return action.payload
    }
    return state;
}