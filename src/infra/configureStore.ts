import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import launchReducer from './store/reducers';
import { StoreState } from './store/types';



export const configureStore = ({ initialState }: StoreState) => {
	const middleware = [thunk];
	const middlewareEnhancer = applyMiddleware(...middleware);
	const enhancer = [middlewareEnhancer];
	const composedEnhancer = composeWithDevTools(...enhancer);
	const store = createStore(launchReducer, initialState, composedEnhancer);
	return store;
}