import { combineReducers, Reducer } from 'redux';
import { LAUNCH_CODE } from '../models';
import DashboardPage from '../pages/DashboardPage';
import ErrorPage from '../pages/ErrorPage';
import launchReducer from './store/reducers';

export const rootReducer: Reducer<any, any> = combineReducers({
	launched: launchReducer
});

export type MyAppState = ReturnType<typeof rootReducer>;

export const launchMapper = new Map()
	.set(LAUNCH_CODE.DASHBOARD, DashboardPage)
	.set(LAUNCH_CODE.ERROR, ErrorPage);