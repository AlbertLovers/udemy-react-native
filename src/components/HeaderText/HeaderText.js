import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HeaderText = props => {
	return (
		<Text { ...props } style={ [styles.headerStyle, props.style] } >{ props.children }</Text>
	);
};

const styles = StyleSheet.create({
	headerStyle: {
		fontSize: 28,
		fontWeight: 'bold'
	}
});

export default HeaderText;