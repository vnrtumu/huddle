/* eslint-disable handle-callback-err */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  AsyncStorage,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Dropdown} from 'react-native-material-dropdown';
import config from '../../config';
import axios from 'axios';
// import Snackbar from 'react-native-snackbar';
import {WToast} from 'react-native-smart-tip';

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
      tasktypeName: '',
      noOfHours: '',
      comments: '',
    };
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  componentDidMount() {
    const project = this.props.navigation.getParam('projectName');
    const taskdescription = this.props.navigation.getParam('description');
    const status = this.props.navigation.getParam('statusId');
    const current_task_id = this.props.navigation.getParam('taskId');
    const taskType = this.props.navigation.getParam('tasktypeName');
    const no_of_hours = this.props.navigation.getParam('noOfHours');
    const comments = this.props.navigation.getParam('comments');

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
                  tasktypeName: taskType,
                  noOfHours: no_of_hours,
                  comments: comments,
                  status: 'New Task',
                });
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
                  tasktypeName: taskType,
                  noOfHours: no_of_hours,
                  comments: comments,
                  status: 'Countinued Task',
                });
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
                  tasktypeName: taskType,
                  // noOfHours: no_of_hours,
                  // comments: comments,
                  status: 'Pendig Task',
                });
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
                  tasktypeName: taskType,
                  noOfHours: no_of_hours,
                  comments: comments,
                  status: 'On Hold Task',
                });
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
                  tasktypeName: taskType,
                  noOfHours: no_of_hours,
                  comments: comments,
                  taskId: current_task_id,
                });
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
          no_of_hours: this.state.noOfHours,
          comments: this.state.comments,
        };

        console.log(taskDetails);
        axios
          .post(`${config.API_URL}/statusUpdate`, taskDetails, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then(res => {
            const toastOpts = {
              data: 'Task Updated Succesfully',
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
            this.props.navigation.navigate({routeName: 'AllTasks'});
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
            
          <TextInput
              value={this.state.projectName}
              autoCapitalize="none"
              disabled={true}
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
              value={this.state.tasktypeName}
              autoCapitalize="none"
              disabled={true}
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
              disabled={true}
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
              placeholder="Enter number of hours"
              value={this.state.noOfHours}
              autoCapitalize="none"
              returnKeyType={'next'}
              style={styles.emailInput}
              theme={{
                colors: {
                  primary: '#000',
                  underlineColor: 'transparent',
                },
              }}
              onChangeText={val => this.onChangeText('noOfHours', val)}
            />
            <TextInput
              placeholder="Enter Comment"
              value={this.state.comments}

              autoCapitalize="none"
              returnKeyType={'next'}
              style={styles.emailInput}
              theme={{
                colors: {
                  primary: '#000',
                  underlineColor: 'transparent',
                },
              }}
              onChangeText={val => this.onChangeText('comments', val)}
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
