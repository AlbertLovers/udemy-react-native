import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ImageBackground, Dimensions } from 'react-native';
import startMainTabs from  '../MainTabs/startMainTabs';
import DefaultTextInput from '../../components/Input/DefaultTextInput';
import HeaderText from '../../components/HeaderText/HeaderText';
import ButtonWithBackground from '../../components/Input/ButtonWithBackground';
import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends React.Component {
	loginHandler = () => {
		startMainTabs();
	}

	render() {
		let headingText = null;
		if(Dimensions.get('window').height > 500) {
			headingText = <HeaderText>Please Log in</HeaderText>;
		}

		return (
			<ImageBackground source={ backgroundImage } style={ styles.backgroundImage }>
				<View style={ styles.container }>
					{ headingText }
					<View style={ styles.inputContainer }>
						<DefaultTextInput placeholder='Your e-mail address' style={ styles.input } />
						<View style={ styles.passwordContainer }>
							<DefaultTextInput placeholder='Password' style={ styles.input } />
							<DefaultTextInput placeholder='Confirm password' style={ styles.input } />
						</View>
					</View>

					<View style={ styles.buttons }>
						<ButtonWithBackground color='#29aaf4' onPress={ this.loginHandler }>Submit</ButtonWithBackground>
						<ButtonWithBackground color='#29aaf4'>Switch to login</ButtonWithBackground>
					</View>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 0.8,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttons: {
		flex: 0.2,
		flexDirection: 'row'
	},
	inputContainer: {
		width: '80%',
	},
	input: {
		backgroundColor: '#eee',
		borderColor: '#bbb'
	},
	backgroundImage: {
		width: '100%',
		flex: 1
	},
	passwordContainer: {
		flexDirection: Dimensions.get('window').height > 500 ? 'column' : 'row';
	}

});

export default AuthScreen;