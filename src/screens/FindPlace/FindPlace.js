import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import ListContainer from '../../components/List/ListContainer';

class FindPlaceScreen extends React.Component {
	constructor(props) {
		super(props);
		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
	}

	onNavigatorEvent = event => {
		if(event.type === 'NavBarButtonPress' && event.id === 'sideDrawerToggle') {
			this.props.navigator.toggleDrawer({
				side: 'left'
			});
		}
	}

	itemSelectedHandler = key => {
		const place = this.props.places.find(item => item.key === key);
		this.props.navigator.push({
			screen: 'paranoia.Detail',
			title: place.name,
			backButtonHidden: true,
			passProps: {
				selectedPlace: place
			}
		});
	};

	render() {
		return (
			<View>
				<ListContainer places={ this.props.places } onItemPressed={ this.itemSelectedHandler } />
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {
		places: state.places.places
	};
}

export default connect(
	mapStateToProps
)(FindPlaceScreen);