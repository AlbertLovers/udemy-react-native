import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { Dimensions } from 'react-native';
import configureStore from './src/store/configureStore';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';
import DetailScreen from './src/screens/Detail/Detail';

import { setIsPortraitMode } from './src/store/actions/device'

const store = configureStore();

store.dispatch(setIsPortraitMode(Dimensions.get('window').height > 360));

Dimensions.addEventListener('change', dimensions => {
	const isPortraitMode = dimensions.window.height > 360;
	store.dispatch(setIsPortraitMode(isPortraitMode));
});

// Register screens
Navigation.registerComponent(
	'paranoia.AuthScreen',
	() => AuthScreen,
	store,
	Provider
);

Navigation.registerComponent(
	'paranoia.SharePlaceScreen', 
	() => SharePlaceScreen,
	store,
	Provider
);

Navigation.registerComponent(
	'paranoia.FindPlaceScreen',
	() => FindPlaceScreen,
	store,
	Provider
);

Navigation.registerComponent(
	'paranoia.Detail',
	() => DetailScreen,
	store,
	Provider
);

Navigation.registerComponent(
	'paranoia.SideDrawer',
	() => SideDrawer
);

// Start app
Navigation.startSingleScreenApp({
	screen: {
		screen: 'paranoia.AuthScreen',
		title: 'Login'
	}
});