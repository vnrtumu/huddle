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

class ResetPass extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.feedbackContainer}>
            <Text style={styles.headingTitle}>Update Password</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              label="New Password"
              autoCapitalize="none"
              secureTextEntry
              autoCorrect={false}
              style={styles.subjectInput}
              onChangeText={val => this.onChangeText('new_password', val)}
              theme={{
                colors: {
                  primary: '#FFF',
                  underlineColor: 'transparent',
                },
              }}
            />
            <TextInput
              label="Confirm Password"
              autoCapitalize="none"
              secureTextEntry
              autoCorrect={false}
              style={styles.subjectInput}
              onChangeText={val => this.onChangeText('c_password', val)}
              theme={{
                colors: {
                  primary: '#FFF',
                  underlineColor: 'transparent',
                },
              }}
            />
            <TouchableOpacity
              style={styles.febButton}
              onPress={this.UpdatePassword}>
              <Text style={styles.febButtonText}>Update Password</Text>
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
  },
  subjectInput: {
    marginVertical: 10,
    backgroundColor: 'transparent',
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

export default ResetPass;
