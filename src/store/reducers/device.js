import { SET_DIMENSION_VALUES } from '../actions/actionTypes';

const initialState = {
	isPortraitMode: true
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_DIMENSION_VALUES:
			return Object.assign({}, state.device, action.value);
		default:
			return state;
	}
};

export default reducer;