import { SET_IS_PORTRAIT_MODE } from './actionTypes';

export const setIsPortraitMode = (isPortraitMode) => {
	return {
		type: SET_IS_PORTRAIT_MODE,
		value: isPortraitMode
	};
};
