import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import DetailScreen from './src/screens/Detail/Detail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

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