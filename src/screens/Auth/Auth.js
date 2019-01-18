import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet, TextInput, ImageBackground, Dimensions } from 'react-native';

import startMainTabs from  '../MainTabs/startMainTabs';

import DefaultTextInput from '../../components/Input/DefaultTextInput';
import HeaderText from '../../components/HeaderText/HeaderText';
import ButtonWithBackground from '../../components/Input/ButtonWithBackground';

import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends React.Component {
	state = {
		headerText: <HeaderText>Please Log in</HeaderText>
	};

	loginHandler = () => {
		startMainTabs();
	}

	render() {
		let headingText = null;
		const isPortraitMode = this.state.isPortraitMode;

		return (
			<ImageBackground source={ backgroundImage } style={ styles.backgroundImage }>
				<View style={ styles.container }>
					{ this.state.headerText }
					<View style={ styles.inputContainer }>
						<DefaultTextInput placeholder='Your e-mail address' style={ styles.input } />

						<View style={ styles[ isPortraitMode ? 'portraitPasswordContainer' : 'landscapePasswordContainer' ] }>
							<View style={ styles[ isPortraitMode ? 'portraitPasswordWrapper' : 'landscapePasswordWrapper' ] }>
								<DefaultTextInput placeholder='Password' style={ styles.input } />
							</View>

							<View style={ styles[ isPortraitMode ? 'portraitPasswordWrapper' : 'landscapePasswordWrapper' ] }>
								<DefaultTextInput placeholder='Confirm password' style={ styles.input } />
							</View>
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
	landscapePasswordContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	portraitPasswordContainer: {
		flexDirection: 'column',
		justifyContent: 'flex-start'
	},
	landscapePasswordWrapper: {
		width: '45%'
	},
	portraitPasswordWrapper: {
		width: '100%'
	}
});

const mapStateToProps = function(state) {
	return {
		isPortraitMode: state.device.isPortraitMode
	};
}

export default connect(
	mapStateToProps
)(AuthScreen);