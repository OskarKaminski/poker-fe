export const statusReducer = (state = 'no-table', action) => {
    switch(action.type){
        case 'STORE/LEAVING_TABLE':
            return 'no-table';
        case 'STORE/WATCHING':
            return 'watching';
        case 'STORE/RESERVATION':
            return 'reservation';
        case 'STORE/PLAYING':
            return 'playing';
    }
    return state;
}