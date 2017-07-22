export const cardsReducer = (state = [], action) => {
    switch(action.type){
        case 'STORE/UPDATE_CARDS':
            return action.cards;
        case 'STORE/DROP_CARDS':
            return [];
    }
    return state;
}