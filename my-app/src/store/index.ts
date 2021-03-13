import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../modules';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { refreshToken } from '../middleware/refresh';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login'],
};

const enhanceReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const store = createStore(
    enhanceReducer,
    composeWithDevTools(applyMiddleware(refreshToken, thunk))
  );
  const persistor = persistStore(store);
  return { store, persistor };
}
