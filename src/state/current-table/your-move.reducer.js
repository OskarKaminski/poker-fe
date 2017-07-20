export const yourMoveReducer = (state = false, action) => {
    switch(action.type){
        case 'STORE/YOUR_MOVE':
            return true;
        case 'STORE/END_OF_YOUR_MOVE':
            return false;
    }
    return state;
}