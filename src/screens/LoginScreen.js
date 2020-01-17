import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
  };

  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };

  Login = async () => {
    const {email} = this.state;
    const {password} = this.state;

    const loginDetails = {
      email: email,
      password: password,
    };

    axios
      .post('http://192.168.1.239/huddle_api/public/api/login', loginDetails)
      .then(res => {
        AsyncStorage.setItem('token', res.data.success.token);
        AsyncStorage.setItem('first_name', res.data.success.first_name);
        AsyncStorage.setItem('email', res.data.success.email);
        AsyncStorage.setItem(
          'user_id',
          JSON.stringify(res.data.success.user_id),
        );
        this.props.navigation.navigate({routeName: 'Home'});
      })
      .catch(err =>
        Snackbar.show({
          title: 'Invalid credentials!!!',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: '#fff',
          color: 'red',
          action: {
            title: 'Close',
            color: 'green',
          },
        }),
      );
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require('../assets/bg.jpg')}
          style={styles.bgStyle}>
          <ScrollView>
            <View style={styles.logoContainer}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.logoStyle}
              />
            </View>
            <View>
              <View style={styles.formContainer}>
                <Text style={styles.formText}>Welcome Back,</Text>
                <Text style={styles.formTitle}> Login</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  label="Enter Your Email Address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType={'next'}
                  style={styles.emailInput}
                  onChangeText={val => this.onChangeText('email', val)}
                  theme={{
                    colors: {
                      primary: '#FFF',
                      underlineColor: 'transparent',
                    },
                  }}
                />
                <TextInput
                  label="Enter Your Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  style={styles.passwordInput}
                  onChangeText={val => this.onChangeText('password', val)}
                  theme={{
                    colors: {
                      primary: '#fff',
                      underlineColor: 'transparent',
                    },
                  }}
                />
                <View style={styles.btnContiners}>
                  <TouchableOpacity
                    style={styles.forgotPass}
                    onPress={() =>
                      this.props.navigation.navigate({routeName: 'Forgot'})
                    }>
                    <Text style={styles.forgotPassText}>Forgot Password?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={this.Login}>
                    <Text style={styles.loginText}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.bottmText}>
              <Text style={styles.btmTxt}>Do not Have An account ?</Text>
              <TouchableOpacity
                style={styles.signUpButton}
                onPress={() =>
                  this.props.navigation.navigate({routeName: 'Register'})
                }>
                <Text style={styles.signupTxt}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 25,
    color: 'white',
  },
  bgStyle: {
    height: '100%',
    width: '100%',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 220,
  },
  logoStyle: {
    height: 150,
    width: 150,
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  formText: {
    color: 'white',
    fontSize: 25,
  },
  formTitle: {
    color: 'white',
    fontSize: 35,
  },
  inputContainer: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  emailInput: {
    marginVertical: 10,
    backgroundColor: 'transparent',
  },
  passwordInput: {
    marginVertical: 10,
    backgroundColor: 'transparent',
  },
  btnContiners: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitBtn: {
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  forgotPassText: {
    fontSize: 15,
    color: 'white',
  },
  loginText: {
    fontSize: 22,
    color: '#000',
  },
  forgotPass: {
    justifyContent: 'flex-end',
  },
  bottmText: {
    flex: 1,
    justifyContent: 'flex-end',
    marginVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btmTxt: {
    color: 'white',
    fontSize: 15,
  },
  signupTxt: {
    color: 'red',
    fontSize: 22,
  },
});

export default LoginScreen;
