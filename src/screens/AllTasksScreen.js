import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/FontAwesome';

class AllTasksScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={{flex: 1}}>
            <View style={styles.formContainer}>
              <Card
                title="New Tasks"
                style={{marginVertical: 8, backgroundColor: '#008200'}}
                onSelect={() => {
                  this.props.navigation.navigate({
                    routeName: 'NewTask',
                  });
                }}
              />
              <Card
                title="Countinued Tasks"
                style={{marginVertical: 8, backgroundColor: '#0000FF'}}
                onSelect={() => {
                  this.props.navigation.navigate({
                    routeName: 'Countinued',
                  });
                }}
              />
              <Card
                title="Pending Tasks"
                style={{marginVertical: 8, backgroundColor: '#FF8C00'}}
                onSelect={() => {
                  this.props.navigation.navigate({
                    routeName: 'Pending',
                  });
                }}
              />
              <Card
                title="On Hold Tasks"
                style={{marginVertical: 8, backgroundColor: '#9932CC'}}
                onSelect={() => {
                  this.props.navigation.navigate({
                    routeName: 'OnHold',
                  });
                }}
              />
              <Card
                title="Completed Tasks"
                style={{marginVertical: 8, backgroundColor: '#FF0000'}}
                onSelect={() => {
                  this.props.navigation.navigate({
                    routeName: 'Completed',
                  });
                }}
              />
            </View>
            <View style={styles.addButton}>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => this.props.navigation.navigate('CreateNew')}>
                <Icon name="plus" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
  },
  formContainer: {
    backgroundColor: '#efefef',
    display: 'flex',
    padding: 20,
  },
  addButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttonContainer: {
    elevation: 5,
    position: 'absolute',
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
