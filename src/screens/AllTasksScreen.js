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

class AllTasksScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      if (!token) {
        this.props.navigation.navigate('Login');
      }
    });
  }
  render() {
    return (
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
                  user_id: 2,
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
                  user_id: 2,
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
                  user_id: 2,
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
                  user_id: 2,
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
                  user_id: 2,
                },
              });
            }}
          />
        </View>
        <View style={styles.addButton}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() =>
              this.props.navigation.navigate({
                routeName: 'CreateNew',
                params: {
                  user_id: 2,
                },
              })
            }>
            <Icon name="plus" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>
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
