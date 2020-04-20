import React, {Component} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AndroidBackHandler} from 'react-navigation-backhandler';

class AllTasksScreen extends Component {
  onBackButtonPressAndroid = () => {
    return true;
  };
  constructor(props) {
    super(props);
  }
  state = {
    userId: '',
  };

  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      AsyncStorage.getItem('user_id').then(user_id => {
        if (token) {
          this.setState({
            userId: user_id,
          });
        } else {
          this.props.navigation.navigate('Login');
        }
      });
    });
  }
  render() {
    return (
      <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid}>
        <ScrollView>
          <View style={styles.formContainer}>
            <Card
              title="New Tasks"
              style={{marginVertical: 8, backgroundColor: '#008200'}}
              onSelect={() => {
                this.props.navigation.navigate({
                  routeName: 'NewTask',
                  params: {
                    task_status: 1,
                    user_id: this.state.userId,
                  },
                });
              }}
            />
            <Card
              title="Countinued Tasks"
              style={{marginVertical: 8, backgroundColor: '#0000FF'}}
              onSelect={() => {
                this.props.navigation.navigate({
                  routeName: 'Countinued',
                  params: {
                    task_status: 2,
                    user_id: this.state.userId,
                  },
                });
              }}
            />
            <Card
              title="Pending Tasks"
              style={{marginVertical: 8, backgroundColor: '#FF8C00'}}
              onSelect={() => {
                this.props.navigation.navigate({
                  routeName: 'Pending',
                  params: {
                    task_status: 3,
                    user_id: this.state.userId,
                  },
                });
              }}
            />
            <Card
              title="On Hold Tasks"
              style={{marginVertical: 8, backgroundColor: '#9932CC'}}
              onSelect={() => {
                this.props.navigation.navigate({
                  routeName: 'OnHold',
                  params: {
                    task_status: 4,
                    user_id: this.state.userId,
                  },
                });
              }}
            />
            <Card
              title="Completed Tasks"
              style={{marginVertical: 8, backgroundColor: '#FF0000'}}
              onSelect={() => {
                this.props.navigation.navigate({
                  routeName: 'Completed',
                  params: {
                    task_status: 5,
                    user_id: this.state.userId,
                  },
                });
              }}
            />
          </View>
        
        </ScrollView>
      </AndroidBackHandler>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    // flex: 1,
    backgroundColor: '#efefef',
    display: 'flex',
    padding: 20,
  },
  addButton: {
    // flex: 1,
    marginTop: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'relative',
  },
  buttonContainer: {
    position: 'absolute',
    elevation: 5,
    bottom: 10,
    right: 10,
    borderRadius: 250,
    backgroundColor: '#C223CE',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
});

export default AllTasksScreen;
