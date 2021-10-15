import { RootStateOrAny } from 'react-redux';
import { TODO } from '../../models';

export enum REDUX_ACTION_LIST {
	LAUNCH_DASHBOARD = "LAUNCH_DASHBOARD",
	SYSTEM_ERROR = "SYSTEM_ERROR"
}

export enum ENDPOINTS {
	LAUNCH_DASHBOARD = "launchDashboard",
	SAVE_DATA = "saveData"
}


export interface StoreState {
	initialState: RootStateOrAny;
}

/* payload */

// TODO: define typings
export type LaunchDashboardPayload = {
	[index: string]: TODO;
	data: TODO;
};

export type SystemErrorPayload = {
	[index: string]: string | number | boolean;
	isError: boolean;
	data: any;
};

/* actions creator */

export interface LaunchDashboardAction {
	readonly type: REDUX_ACTION_LIST.LAUNCH_DASHBOARD;
	readonly payload: LaunchDashboardPayload;
}

export interface SystemErrorAction {
	readonly type: REDUX_ACTION_LIST.SYSTEM_ERROR;
	readonly payload: SystemErrorPayload;
}

export type LaunchActionType = LaunchDashboardAction | SystemErrorAction;


/* action */