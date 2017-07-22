import actions from '../actions';

export const tablesReducer = (state = [], action) => {
    switch(action.type){
        case actions.tables.updated:
            return action.payload
    }
    return state;
}