import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
	places: [],
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_PLACE: 
			return addPlace({ ...state }, action.name);
		case DELETE_PLACE:
			return deletePlace({ ...state }, action.placeKey);
		default:
			return state;
	}
};

function deletePlace(state, key) {
	return {
		places: state.places.filter(opt => {
			return opt.key !== key;
		}),
		selectedPlace: null
	};
}

function addPlace(state, name) {
	state.places = state.places.concat(
		{
			key: name + Math.random(),
			name: name,
			image: {
				uri: 'https://www.onlineveilingmeester.nl/images/800x600/2371/2371_11_0.jpg'
			}
		}
	);

	return state;
}

export default reducer;