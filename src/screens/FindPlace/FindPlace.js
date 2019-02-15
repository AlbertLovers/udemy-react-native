import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';
import ListContainer from '../../components/List/ListContainer';

class FindPlaceScreen extends React.Component {
	static navigatorStyle = {
		navBarButtonColor: 'orange'
	};

	state = {
		placesLoaded: false,
		removeAnimation: new Animated.Value(1),
		placesAnim: new Animated.Value(12)
	};

	constructor(props) {
		super(props);
		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
	};

	placesSearchHandler = () => {
		Animated.timing(this.state.removeAnimation, 
			{ 
				toValue: 0,
				duration: 500,
				useNativeDriver: true
			}
		).start(() => {
			this.setState({ placesLoaded: true });
			this.listFadeIn();
		});
	};

	listFadeIn = () => {
		Animated.timing(this.state.placesAnim, 
			{ 
				toValue: 1,
				duration: 500,
				useNativeDriver: true
			}
		).start();
	};

	onNavigatorEvent = event => {
		if(event.type === 'NavBarButtonPress' && event.id === 'sideDrawerToggle') {
			this.props.navigator.toggleDrawer({
				side: 'left'
			});
		}
	};

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
		let content; 
		if(this.state.placesLoaded) {
			content = (
				<Animated.View style={{ 
						opacity: this.state.placesAnim,
						transform: [{
							scale: this.state.placesAnim
						}]
					 }}>

					<ListContainer places={ this.props.places } onItemPressed={ this.itemSelectedHandler } />
				</Animated.View>
			);
		} else {
			content = (
				<Animated.View style={{ 
						opacity: this.state.removeAnimation,
						transform: [{
							scale: this.state.removeAnimation.interpolate({
								inputRange: [0, 1],
								outputRange: [12, 1] // ipv 1 -> 0 doen we 1 -> 12
							})
						}]
					 }}>

					<TouchableOpacity onPress={ this.placesSearchHandler }>
						<View style={ styles.searchButton }>
							<Text style={ styles.searchButtonText }>Find places</Text>
						</View>
					</TouchableOpacity>
				</Animated.View>
			);
		}

		return (
			<View style={ this.state.placesLoaded ? null : styles.buttonContainer }>
				{ content }
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

const styles = StyleSheet.create({
	buttonContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	searchButton: {
		borderColor: 'orange',
		borderWidth: 3,
		borderRadius: 50,
		padding: 20
	},
	searchButtonText: {
		color: 'orange',
		fontWeight: 'bold',
		fontSize: 26
	}
});