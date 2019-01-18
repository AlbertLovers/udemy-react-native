import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

class MapInput extends Component {
	render() {
		return (
			<View style={ styles.container }>
				<View style={ styles.placeholder }>
					<Text>Image Preview</Text>
				</View>

				<View style={ styles.button }>
					<Button title='Locate me' onPress={ this.props.onPress }/>
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

export default MapInput;