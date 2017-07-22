export const combinationReducer = (state = {}, action) => {
    switch(action.type){
        case 'STORE/UPDATE_COMBINATION':
            return action.combination;
        case 'STORE/RESET_COMBINATION':
            return {};
    }
    return state;
}