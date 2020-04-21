/* eslint-disable handle-callback-err */
import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, AsyncStorage, Image} from 'react-native';
import Task from '../components/Task';
import axios from 'axios';
// import Snackbar from 'react-native-snackbar';
import config from '../../config';
import {WToast} from 'react-native-smart-tip';

class NewTaskScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }
  componentDidMount() {
    const userId = this.props.navigation.getParam('user_id');
    const user_id = {
      user_id: userId,
    };
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        axios
          .post(`${config.API_URL}/allNewTasks`, user_id, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then(res => {
            // console.log(res.data.success);
            this.setState({
              dataSource: [...res.data.success],
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
    });
  }
  render() {
    const {dataSource} = this.state;
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          {dataSource.map((data, i) => (
            <Task
              key={i}
              icon="edit"
              title={data.project_name}
              pointer={data.description}
              style={styles.chapterCardtext}
              colorCode="#008200"
              noOfHours={data.no_of_hours}
              comments={data.comments}
              onEdit={() => {
                this.props.navigation.navigate({
                  routeName: 'EditTask',
                  params: {
                    projectName: `${data.project_name}`,
                    description: `${data.description}`,
                    taskId: `${data.task_id}`,
                    statusId: `${data.status_id}`,
                    tasktypeName: `${data.type_name}`,
                    noOfHours: `${data.no_of_hours}`,
                    comments: `${data.comments}`,
                  },
                });
              }}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 25,
    marginHorizontal: 20,
  },
  chapterCardtext: {
    marginVertical: 5,
  },
});

export default NewTaskScreen;
