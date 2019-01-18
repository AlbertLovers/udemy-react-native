import { createStore, combineReducers } from 'redux';

import deviceReducer from './reducers/device';
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
	device: deviceReducer,
	places: placesReducer
});

const configureStore = () => {
	return createStore(rootReducer);
};

export default configureStore;