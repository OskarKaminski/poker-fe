export const tablesReducer = (state = [], action) => {
    switch(action.type){
        case 'TABLES__UPDATE':
            return action.tables
    }
}