import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index';

class DetailScreen extends Component {

	onDeleteHandler = () => {
		this.props.deletePlace(this.props.selectedPlace.key);
		this.props.navigator.pop();
	}

	render() {
		const { isPortraitMode, selectedPlace } = this.props;
const imageStyle =  [ styles.container,
					  isPortraitMode 
						 ? styles.portraitImageStyle 
						 : styles.landscapeImageStyle
					];
		return (
			<View style={ styles[ isPortraitMode ? 'portrait' : 'landscape' ] }>
				<View style={ imageStyle }>

					<Image source={ selectedPlace.image } style={ styles[isPortraitMode ? 'portraitImageStyle' : 'landscapeImageStyle'] } />
				</View>

				<View>
					<View>
						<Text style={ styles.textValue }>{ selectedPlace.name }</Text>
					</View>

					<View style={ styles.deleteButton }>
						<TouchableOpacity onPress={ this.onDeleteHandler }>
							<Icon size={ 30 }
								  name={ Platform.OS === 'android' ? 'md-trash' : 'ios-trash' }
								  color='red' />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		margin: 22,
		flex: 1
	},

	portrait: {
		flexDirection: 'column',
	},

	landscape: {
		flexDirection: 'row',
	},

	portraitImageStyle: {
		width: '50%',
		height: 200,
		flex: 3
	},

	landscapeImageStyle: {
		width: '50%',
		height: 200,
		flex: 3
	},

	textValue: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 28
	},

	deleteButton: {
		alignItems: 'center',
		flex: 1
	}
});

function mapStateToProps(state) {
	return {
		isPortraitMode: state.device.isPortraitMode
	};
}

function mapDispatchToProps() {
	return {
		deletePlace
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps()
)(DetailScreen);
