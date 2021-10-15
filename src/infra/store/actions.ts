/* action to be used to dispatch from react component */

import { TODO } from '../../models';
import { handleLaunchDashboard } from './actionCreators';
import { ENDPOINTS, LaunchDashboardPayload } from './types';

const apiCall = (endpoint: ENDPOINTS, actionHandler: TODO, payload?: any) => {
	// TODO 
}

export const launchDashboard = (payload: LaunchDashboardPayload) => {
	return apiCall(ENDPOINTS.LAUNCH_DASHBOARD, handleLaunchDashboard, payload)
};