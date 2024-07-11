import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Reducers from './reducers';

const persistedReducer = persistReducer({
    key: 'root',
    storage,
    whitelist: ['cartReducer']
}, Reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };