import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, AsyncStorage} from 'react-native';
import Task from '../components/Task';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';

class CountinuedTaskScreen extends Component {
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
          .post(
            'http://192.168.1.239/huddle_api/public/api/continuedTasks',
            user_id,
            {
              headers: {
                Authorization: 'Bearer ' + token,
              },
            },
          )
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
  }
  render() {
    const {dataSource} = this.state;
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          {dataSource.map((data, i) => (
            <Task
              key={i}
              title={data.project_name}
              pointer={data.description}
              style={styles.chapterCardtext}
              colorCode="#0000FF"
              onEdit={() => {
                this.props.navigation.navigate({
                  routeName: 'EditTask',
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

export default CountinuedTaskScreen;
