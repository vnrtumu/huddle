/* eslint-disable handle-callback-err */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {WToast} from 'react-native-smart-tip';

import axios from 'axios';
// import Snackbar from 'react-native-snackbar';
import config from '../../config';

class RegisterScreen extends Component {
  state = {
    first_name: '',
    email: '',
    phone: '',
    password: '',
  };

  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };

  RegisterHandler = async () => {
    const {first_name} = this.state;
    const {email} = this.state;
    const {phone} = this.state;
    const {password} = this.state;

    const userDetails = {
      first_name: first_name,
      email: email,
      phone: phone,
      password: password,
      confirm_password: password,
    };

    axios
      .post(`${config.API_URL}/register`, userDetails)
      .then(res => {
        const toastOpts = {
          data: 'Success! Go to login',
          textColor: '#ffffff',
          backgroundColor: '#444444',
          duration: WToast.duration.LONG, //1.SHORT 2.LONG
          position: WToast.position.TOP, // 1.TOP 2.CENTER 3.BOTTOM
          icon: (
            <Image
              source={require('../assets/logo.png')}
              style={{width: 32, height: 32, resizeMode: 'contain'}}
            />
          ),
        };
        WToast.show(toastOpts);
        this.props.navigation.navigate("Login");
      })
      .catch(err => {
        const toastOpts = {
          data: 'Error',
          textColor: '#ffffff',
          backgroundColor: '#444444',
          duration: WToast.duration.LONG, //1.SHORT 2.LONG
          position: WToast.position.TOP, // 1.TOP 2.CENTER 3.BOTTOM
          icon: (
            <Image
              source={require('../assets/logo.png')}
              style={{width: 32, height: 32, resizeMode: 'contain'}}
            />
          ),
        };
        WToast.show(toastOpts);
      });
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
                <Text style={styles.formText}>Create Your Account</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  label="Enter Your Name"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType={'next'}
                  style={styles.emailInput}
                  theme={{
                    colors: {
                      primary: '#fff',
                      underlineColor: 'transparent',
                    },
                  }}
                  onChangeText={val => this.onChangeText('first_name', val)}
                />
                <TextInput
                  label="Enter Your Email Address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType={'next'}
                  style={styles.emailInput}
                  theme={{
                    colors: {
                      primary: '#fff',
                      underlineColor: 'transparent',
                    },
                  }}
                  onChangeText={val => this.onChangeText('email', val)}
                />
                <TextInput
                  label="Enter Your Mobile Number"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType={'next'}
                  style={styles.emailInput}
                  theme={{
                    colors: {
                      primary: '#fff',
                      underlineColor: 'transparent',
                    },
                  }}
                  onChangeText={val => this.onChangeText('phone', val)}
                />
                <TextInput
                  label="Enter Your Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  style={styles.passwordInput}
                  theme={{
                    colors: {
                      primary: '#fff',
                      underlineColor: 'transparent',
                    },
                  }}
                  onChangeText={val => this.onChangeText('password', val)}
                />
                <View style={styles.btnContiners}>
                  <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={this.RegisterHandler}>
                    <Text style={styles.loginText}>Register</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.bottmText}>
              <Text style={styles.btmTxt}>Already a Huddle Meeting User?</Text>
              <TouchableOpacity
                style={styles.signUpButton}
                onPress={() =>
                  this.props.navigation.navigate({routeName: 'Login'})
                }>
                <Text style={styles.signupTxt}> Login</Text>
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
    marginVertical: 8,
    backgroundColor: 'transparent',
  },
  passwordInput: {
    marginVertical: 8,
    backgroundColor: 'transparent',
  },
  btnContiners: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  submitBtn: {
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 25,
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

export default RegisterScreen;
