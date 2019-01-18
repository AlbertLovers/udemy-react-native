import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import DefaultTextInput from '../../components/Input/DefaultTextInput';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import MapInput from '../../components/Input/MapInput';
import PickImage from '../../components/Input/PickImage';
import HeaderText from '../../components/HeaderText/HeaderText';

class SharePlaceScreen extends React.Component {
	state = {
		placeName: ''
	};

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

	placeNameChangeHandler = val => {
		if(val.trim() !== '') {
			this.setState({ placeName: val });
		}
	};

	mapInputhandler = event => {
		alert('clicked');
	}

	onAddPlace = () => {
		this.props.addPlace(this.state.placeName);
		this.setState({ placeName: '' })
	};

	render() {
		return (
			<ScrollView>
				<View style={ styles.container }>
					<HeaderText>
						Share a place with us
					</HeaderText>

					<PickImage />

					<MapInput onPress={ this.mapInputhandler } />

					<DefaultTextInput placeholder='Place name' value={ this.state.placeName } onChangeText={ this.placeNameChangeHandler }/>

					<View style={ styles.button }>
						<Button title='Share place' onPress={ this.onAddPlace } />
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	button: {
		margin: 8
	},
	placeholder: {
		borderWidth: 1,
		borderColor: 'black',
		backgroundColor: '#eee',
		width: '80%',
		height: 150
	}
})

function mapDispatchToProps() {
	return {
		addPlace
	};
}

export default connect(
	null,
	mapDispatchToProps()
)(SharePlaceScreen);