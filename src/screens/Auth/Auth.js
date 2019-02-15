import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet, TextInput, ImageBackground, Dimensions } from 'react-native';

import startMainTabs from  '../MainTabs/startMainTabs';

import DefaultTextInput from '../../components/Input/DefaultTextInput';
import HeaderText from '../../components/HeaderText/HeaderText';
import ButtonWithBackground from '../../components/Input/ButtonWithBackground';

import validate from '../../util/validation';

import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends React.Component {
	state = {
		headerText: <HeaderText>Please Log in</HeaderText>,
		email: {
			value: '',
			valid: false,
			validationRules: {
				isEmail: true
			}
		},
		password: {
			value: '',
			valid: false,
			validationRules: {
				equalTo: 'confirmPassword',
				minLength: 6
			}
		},
		confirmPassword: {
			value: '',
			valid: false,
			validationRules: {
				equalTo: 'password'
			}
		}
	};

	loginHandler = () => {
		startMainTabs();
	}

	updateValue = (key, value) => {
		this.setState(prevState => {
			let item = { ...prevState[key] };
			let returnValue = { [key]: item };

			item.value = value;

			let connectedValues = {};
			const equalItem = item.validationRules.equalTo;
			if(equalItem) {
				let otherItem = { ...prevState[equalItem] };
				connectedValues.equalTo = otherItem.value;

				// Validate equality for both items to prevent value2 from remaining validated after changes in value1
				let otherConnectedValues = { equalTo: value }
				otherItem.valid = validate(otherItem.value, { equalTo: otherItem.validationRules.equalTo }, otherConnectedValues);
				returnValue[equalItem] = otherItem;
			}

			item.valid = validate(value, item.validationRules, connectedValues);
			
			return returnValue;
		});
	};

	render() {
		let headingText = null;
		const isPortraitMode = this.state.isPortraitMode;

		return (
			<ImageBackground source={ backgroundImage } style={ styles.backgroundImage }>
				<View style={ styles.container }>
					{ this.state.headerText }
					<View style={ styles.inputContainer }>
						<DefaultTextInput placeholder='Your e-mail address' style={ styles.input } value={ this.state.email.value } onChangeText={ (value) => this.updateValue('email', value) }/>

						<View style={ styles[ isPortraitMode ? 'portraitPasswordContainer' : 'landscapePasswordContainer' ] }>
							<View style={ styles[ isPortraitMode ? 'portraitPasswordWrapper' : 'landscapePasswordWrapper' ] }>
								<DefaultTextInput placeholder='Password' style={ styles.input } value={ this.state.password.value } onChangeText={ (value) => this.updateValue('password', value) }/>
							</View>

							<View style={ styles[ isPortraitMode ? 'portraitPasswordWrapper' : 'landscapePasswordWrapper' ] }>
								<DefaultTextInput placeholder='Confirm password' style={ styles.input } value={ this.state.confirmPassword.value } onChangeText={ (value) => this.updateValue('confirmPassword', value) }/>
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