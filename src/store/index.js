import {createStore,applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import history from '@/history';
let routerWare = routerMiddleware(history);

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//applyMiddelware使用中间件
let store = createStore(reducers, composeEnhancers(applyMiddleware(promise, thunk, routerWare, logger)));
window.store = store;
export default store;