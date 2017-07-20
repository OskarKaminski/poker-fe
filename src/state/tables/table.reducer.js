export const tableReducer = (state = [], action) => {
    switch(action.type){
        case 'STORE/UPDATE_TABLE':
            return action.payload
    }
    return state;
}