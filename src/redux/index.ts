import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import gallery from './reducers/gallery';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(gallery, composeWithDevTools(applyMiddleware(thunk)));

export default store;