import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/root-reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { autonotificationWatcher, logoutMethodWatcher } from './store/sagas/auth';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(
    applyMiddleware(saga, thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(autonotificationWatcher);
saga.run(logoutMethodWatcher);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
