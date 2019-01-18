import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
	<TouchableOpacity onPress={ props.onItemPressed }>
		<View style={ styles.default }>
			<Image resizeMode='contain' source={ props.image } style={ styles.image }/>
			<Text>{ props.name }</Text>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	default: {
		width: '100%',
		marginBottom: 5,
		padding: 10,
		backgroundColor: '#eee',
		flexDirection: 'row',
		alignItems: 'center',
	},
	image: {
		marginRight: 8,
		height: 30,
		width: 30
	}
});

export default listItem;