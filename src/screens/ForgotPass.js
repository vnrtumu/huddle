import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import config from '../../config';

class ForgotPass extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.feedbackContainer}>
            <Text style={styles.headingTitle}>Forgot Password</Text>
            <Text style={{color: '#fff'}}>
              Please enter your registered email.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              label="Enter Your Registered Email Address"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType={'next'}
              style={styles.emailInput}
              theme={{
                colors: {
                  primary: '#FFF',
                  underlineColor: 'transparent',
                },
              }}
            />
            <TouchableOpacity
              style={styles.febButton}
              onPress={() => this.props.navigation.navigate('Verify')}>
              <Text style={styles.febButtonText}>Send Otp</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#C223CE',
  },
  feedbackContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  headingTitle: {
    fontSize: 22,
    color: '#fff',
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  emailInput: {
    marginVertical: 10,
    backgroundColor: 'transparent',
  },
  subjectInput: {
    marginVertical: 10,
  },
  textInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  febButton: {
    marginVertical: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  febButtonText: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default ForgotPass;
