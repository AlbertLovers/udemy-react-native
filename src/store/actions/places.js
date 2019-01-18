import { ADD_PLACE, DELETE_PLACE } from './actionTypes';

export const addPlace = (name) => {
	return {
		type: ADD_PLACE,
		name: name
	};
};

export const deletePlace = (key) => {
	return {
		type: DELETE_PLACE,
		placeKey: key
	};
};
