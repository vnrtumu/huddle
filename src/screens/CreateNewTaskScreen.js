import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Dropdown} from 'react-native-material-dropdown';

class CreateNewTaskScreen extends Component {
  render() {
    let data = [
      {
        value: 'Alberta',
      },
      {
        value: 'Huddle Meeting',
      },
      {
        value: 'Ilearn Online',
      },
    ];
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.feedbackContainer}>
            <Text style={styles.headingTitle}>Create New Task</Text>
          </View>
          <View style={styles.inputContainer}>
            <Dropdown
              label="Select Project"
              data={data}
              fontSize={16}
              baseColor="black"
              labelColor="#fff"
            />
            <TextInput
              label="Enter Your Registered Email Address"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType={'next'}
              style={styles.emailInput}
              theme={{
                colors: {
                  primary: '#000',
                  underlineColor: 'transparent',
                },
              }}
            />

            <TouchableOpacity
              style={styles.febButton}
              onPress={() => this.props.navigation.navigate('NewTask')}>
              <Text style={styles.febButtonText}>Create Task</Text>
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
  },
  feedbackContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  headingTitle: {
    fontSize: 22,
    color: '#C223CE',
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  emailInput: {
    marginVertical: 10,
    fontSize: 18,
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
    backgroundColor: '#C223CE',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  febButtonText: {
    color: '#fff',
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default CreateNewTaskScreen;
