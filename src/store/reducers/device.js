import { ADD_PLACE, DELETE_PLACE, SET_IS_PORTRAIT_MODE } from '../actions/actionTypes';

const initialState = {
	isPortraitMode: true
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_IS_PORTRAIT_MODE:
			return setIsPortraitMode(Object.assign({}, state.device), action.value);
		default:
			return state;
	}
};

function setIsPortraitMode(state, value) {
	state.isPortraitMode = value;

	return state;
}

export default reducer;