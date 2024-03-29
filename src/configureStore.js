import logger from 'redux-logger'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import combinedReducer from './reducers'
import { queryMiddleware, errorMiddleware } from './middleware'
import { createBrowserHistory } from 'history'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const history = createBrowserHistory()

// This object defines where the storage takes place,
// in this case, it's in local storage in your browser.
const persistConfig = {
    key: "root",
    storage,
}

export default function configureStore(preloadedState) {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const persistedReducer = persistReducer(persistConfig, combinedReducer(history));

    const store = createStore(
        persistedReducer,
        preloadedState,
        composeEnhancer(
              applyMiddleware(
                  routerMiddleware(history), // for dispatching history actions
                  queryMiddleware({}),       // parse query strings right here
                  errorMiddleware,
                  logger
    )));
    const persistor = persistStore(store, null,
      () => {console.log("rehydrationComplete")}
    );

    return { store, persistor }
}
