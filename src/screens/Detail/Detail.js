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
		return (
			<View style={ styles.default }>
				<View>
					<Image source={ this.props.selectedPlace.image } style={ styles.image } />
					<Text style={ styles.textValue }>{ this.props.selectedPlace.name }</Text>
				</View>
				
				<View>
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
	default: {
		margin: 22
	}, 
	image: {
		flexBasis: '50%',
		width: '100%',
		height: 200
	},
	textValue: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 28
	},
	deleteButton: {
		alignItems: 'center'
	}
});

function mapDispatchToProps() {
	return {
		deletePlace
	};
}

export default connect(
	null,
	mapDispatchToProps()
)(DetailScreen);
