import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
function sideMenu(sources, id) {
	return {
		leftButtons: [
			{
				icon: sources[2],
				title: 'Menu',
				id: id
			}
		]
	};
}

const startTabs = () => {
	Promise.all([
		Icon.getImageSource(Platform.OS === 'android' ? 'md-map' : 'ios-map', 30),
		Icon.getImageSource(Platform.OS === 'android' ? 'md-share-alt' : 'ios-share-alt', 30),
		Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30),
	]).then(sources => {
		Navigation.startTabBasedApp({
			tabs: [
				{
					screen: 'paranoia.SharePlaceScreen',
					label: 'Share place',
					title: 'Share place',
					icon: sources[1],
					navigatorButtons: sideMenu(sources, 'sideDrawerToggle')
				},
				{
					screen: 'paranoia.FindPlaceScreen',
					label: 'Find place',
					title: 'Find place',
					icon: sources[0],
					navigatorButtons: sideMenu(sources, 'sideDrawerToggle')
				}
			],
			tabsStyle: {
				tabBarSelectedButtonColor: 'orange'
			},
			drawer: {
				left: {
					screen: 'paranoia.SideDrawer'
				}
			},
			appStyle: {
				tabBarSelectedButtonColor: 'orange'
			}
		})
	});
}

export default startTabs;