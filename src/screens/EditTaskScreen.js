/* eslint-disable handle-callback-err */
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
import config from '../../config';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';

class EditTaskScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      projectName: '',
      description: '',
      statusId: '',
      taskId: '',
      status: '',
    };
  }
  componentDidMount() {
    const project = this.props.navigation.getParam('projectName');
    const taskdescription = this.props.navigation.getParam('description');
    const status = this.props.navigation.getParam('statusId');
    const current_task_id = this.props.navigation.getParam('taskId');

    AsyncStorage.getItem('token').then(token => {
      if (token) {
        switch (status) {
          case '1':
            axios
              .get(`${config.API_URL}/conStatus`, {
                headers: {
                  Authorization: 'Bearer ' + token,
                },
              })
              .then(res => {
                this.setState({
                  dataSource: [...res.data.success],
                  projectName: project,
                  description: taskdescription,
                  taskId: current_task_id,
                  status: 'New Task',
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
            break;

          case '2':
            axios
              .get(`${config.API_URL}/conStatus`, {
                headers: {
                  Authorization: 'Bearer ' + token,
                },
              })
              .then(res => {
                this.setState({
                  dataSource: [...res.data.success],
                  projectName: project,
                  description: taskdescription,
                  taskId: current_task_id,
                  status: 'Countinued Task',
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
            break;

          case '3':
            axios
              .get(`${config.API_URL}/status`, {
                headers: {
                  Authorization: 'Bearer ' + token,
                },
              })
              .then(res => {
                this.setState({
                  dataSource: [...res.data.success],
                  projectName: project,
                  description: taskdescription,
                  taskId: current_task_id,
                  status: 'Pendig Task',
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
            break;

          case '4':
            axios
              .get(`${config.API_URL}/onHoldStatus`, {
                headers: {
                  Authorization: 'Bearer ' + token,
                },
              })
              .then(res => {
                this.setState({
                  dataSource: [...res.data.success],
                  projectName: project,
                  description: taskdescription,
                  taskId: current_task_id,
                  status: 'On Hold Task',
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
            break;

          default:
            axios
              .get(`${config.API_URL}/conStatus`, {
                headers: {
                  Authorization: 'Bearer ' + token,
                },
              })
              .then(res => {
                this.setState({
                  dataSource: [...res.data.success],
                  projectName: project,
                  description: taskdescription,
                  taskId: current_task_id,
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
      }
    });
  }

  updateTaskStatus = async () => {
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        const taskDetails = {
          task_id: this.state.taskId,
          status_id: this.state.statusId,
        };

        console.log(taskDetails);
        axios
          .post(`${config.API_URL}/statusUpdate`, taskDetails, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then(res => {
            Snackbar.show({
              title: 'updated successfully',
              duration: Snackbar.LENGTH_SHORT,
              backgroundColor: '#fff',
              color: 'green',
              action: {
                title: 'Close',
                color: 'green',
              },
            });
            this.props.navigation.navigate({routeName: 'AllTasks'});
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
            <Text style={styles.headingTitle}>Edit This Task</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.headingTitleTask}>
              Task Number is: #{this.state.taskId}
            </Text>
            <TextInput
              value={this.state.projectName}
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
            <TextInput
              value={this.state.description}
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

            <Dropdown
              label={this.state.status}
              data={dataSource}
              valueExtractor={({id, name}) => name}
              value={dataSource.id}
              selectedItem={({id}) => id}
              fontSize={16}
              baseColor="black"
              labelColor="#fff"
              onChangeText={(value, index, data) => {
                this.setState({
                  statusId: JSON.stringify(data[index]['id']),
                });
              }}
            />
            <TouchableOpacity
              style={styles.febButton}
              onPress={this.updateTaskStatus}>
              <Text style={styles.febButtonText}>Update Task</Text>
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
  headingTitleTask: {
    fontSize: 22,
  },
});

export default EditTaskScreen;
