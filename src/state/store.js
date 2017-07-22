import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from './reducers';
import {config} from 'Adapter/firebase.config';
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import {authSaga} from './auth/auth.saga';
import {seatsSaga} from './seats/seats.saga';
import {tableSaga} from './table/table.saga';

const devtools = window['devToolsExtension'] ?
    window['devToolsExtension']() : f => f;
const history = createHistory()
const interceptorMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(interceptorMiddleware, sagaMiddleware),
        devtools,
    )
);

sagaMiddleware.run(authSaga);
sagaMiddleware.run(seatsSaga);
sagaMiddleware.run(tableSaga);