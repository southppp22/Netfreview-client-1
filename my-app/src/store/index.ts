import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../modules';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const enhanceReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const store = createStore(
    enhanceReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  const persistor = persistStore(store);
  return { store, persistor };
}
