import React, { Component } from 'react';
import { View, Image, Button, Text, StyleSheet } from 'react-native';
import imagePlaceholder from '../../assets/image.jpg';

class PickImage extends Component {
	render() {
		return (
			<View style={ styles.container }>
				<View style={ styles.placeholder }>
					<Image source={imagePlaceholder} style={ styles.previewImage } />
				</View>

				<View style={ styles.button }>
					<Button title='Pick image' onPress={ this.props.onPress }/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center'
	},
	previewImage: {
		width: '100%',
		height: '100%',
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
});

export default PickImage;