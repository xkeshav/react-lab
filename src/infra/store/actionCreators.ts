/* action creators*/
import { LAUNCH_CODE } from '../../models';
import { LaunchDashboardPayload, REDUX_ACTION_LIST, SystemErrorPayload } from './types';



export const handleLaunchDashboard = (payload: LaunchDashboardPayload) => ({
	type: REDUX_ACTION_LIST.LAUNCH_DASHBOARD,
	payload: { ...payload, launchCode: LAUNCH_CODE.DASHBOARD }
});

export const handleSystemError = (payload: SystemErrorPayload) => ({
	type: REDUX_ACTION_LIST.SYSTEM_ERROR,
	payload
});