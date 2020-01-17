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

class RegisterScreen extends Component {
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
                    onPress={() =>
                      this.props.navigation.navigate({routeName: 'Home'})
                    }>
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
