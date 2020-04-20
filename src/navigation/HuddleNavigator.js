import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import ProfileNavigator from './ProfileNavigator';
import TaskNavigator from './TaskNavigator';

import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CreateNewTaskScreen from '../screens/CreateNewTaskScreen';

const tabScreenConfig = {
  AllTasks: {
    screen: TaskNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Fontisto name="nav-icon-grid" size={24} style={{color: '#fff'}} />
        );
      },
      tabBarColor: '#512DA8',
      tabBarLabel: 'All Tasks',
    },
  },
  Profile: {
    screen: ProfileNavigator,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => {
        return <Icon name="user" size={24} style={{color: '#fff'}} />;
      },
      tabBarColor: '#C223CE',
    },
  },
  CreateNew: {
    screen: CreateNewTaskScreen,
    navigationOptions: {
      tabBarLabel: 'CreateNew',
      tabBarIcon: ({tintColor}) => {
        return <Icon name="plus" size={24} style={{color: '#fff'}} />;
      },
      tabBarColor: 'green',
    },
  },
};

const HuddleNavigator = createMaterialBottomTabNavigator(tabScreenConfig, {
  activeTintColor: 'white',
  inactiveColor: '#3e2465',
  shifting: true,
  barStyle: {
    backgroundColor: '#008000',
  },
});

export default createAppContainer(HuddleNavigator);
