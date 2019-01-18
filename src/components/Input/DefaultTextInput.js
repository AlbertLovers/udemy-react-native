import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const DefaultTextInput = props => {
	return (
			<TextInput 
			   underlineColorAndroid='transparent'
			   { ...props }
			   style={ [styles.textInput, props.style] }
		 />
	 );
}


export default DefaultTextInput;

const styles = StyleSheet.create({
	textInput: {
		width: '100%',
		borderWidth: 1,
		borderColor:'#eee',
		padding: 5,
		margin: 8
	}
});
