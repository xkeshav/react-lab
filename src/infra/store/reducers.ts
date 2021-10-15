import { RootStateOrAny } from 'react-redux';
import { LaunchActionType, REDUX_ACTION_LIST } from './types';



const initialState = null as any;

const launchReducer = (state: RootStateOrAny = initialState, action: LaunchActionType) => {
	switch (action.type) {
		case REDUX_ACTION_LIST.LAUNCH_DASHBOARD: {
			return { ...state, ...action.payload, isFetching: false }
		}
		default:
			return state;
	}
}

export default launchReducer;