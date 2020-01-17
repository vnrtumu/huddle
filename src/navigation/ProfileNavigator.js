import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ProfileScreen from '../screens/ProfileScreen';

const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(ProfileNavigator);
