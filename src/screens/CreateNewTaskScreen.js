import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Dropdown} from 'react-native-material-dropdown';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import config from '../../config';

class CreateNewTaskScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }
  state = {
    project_department_id: '',
    description: '',
    userId: '',
  };
  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      AsyncStorage.getItem('user_id').then(user_id => {
        if (token) {
          this.setState({
            userId: user_id,
          });
          const userId = {
            user_id: user_id,
          };
          axios
            .post(`${config.API_URL}/projectsDepartments`, userId, {
              headers: {
                Authorization: 'Bearer ' + token,
              },
            })
            .then(res => {
              this.setState({
                dataSource: [...res.data.success],
              });
            })
            .catch(err =>
              Snackbar.show({
                title: 'Something Went Wrong!',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: '#fff',
                color: 'red',
                action: {
                  title: 'Close',
                  color: 'green',
                },
              }),
            );
        }
      });
    });
  }

  onChangeText = (key, value) => {
    this.setState({[key]: value});
  };

  CreateNewTask = async () => {
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        const {description} = this.state;
        const taskDetails = [
          {
            description: description,
            project_department_id: this.state.project_department_id,
            user_id: this.state.userId,
          },
        ];
        axios
          .post(`${config.API_URL}/createNewTask`, taskDetails, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then(res => {
            this.props.navigation.navigate({
              routeName: 'NewTask',
              params: {
                task_status: 1,
                user_id: this.state.userId,
              },
            });
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
      }
    });

  };
  render() {
    const {dataSource} = this.state;
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.feedbackContainer}>
            <Text style={styles.headingTitle}>Create New Task</Text>
          </View>
          <View style={styles.inputContainer}>
            <Dropdown
              label="Select Project"
              data={dataSource}
              valueExtractor={({id, name}) => name}
              value={dataSource.id}
              selectedItem={({id}) => id}
              fontSize={16}
              baseColor="black"
              labelColor="#fff"
              onChangeText={(value, index, data) => {
                // alert(JSON.stringify(data[index]['id']));
                this.setState({
                  project_department_id: JSON.stringify(data[index]['id']),
                });
              }}
            />
            <TextInput
              label="Enter The Task Description"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType={'next'}
              style={styles.emailInput}
              onChangeText={value => this.onChangeText('description', value)}
              theme={{
                colors: {
                  primary: '#000',
                  underlineColor: 'transparent',
                },
              }}
            />

            <TouchableOpacity
              style={styles.febButton}
              onPress={this.CreateNewTask}>
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
