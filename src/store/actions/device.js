import { SET_DIMENSION_VALUES } from './actionTypes';

export const setDimensonValues = values => {
	return {
		type: SET_DIMENSION_VALUES,
		value: values
	};
};
