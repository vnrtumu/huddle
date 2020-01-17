import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPass from '../screens/ForgotPass';
import VerifyOtp from '../screens/VerifyOtp';
import ResetPass from '../screens/ResetPass';

import HuddleNavigator from './HuddleNavigator';

const AuthNavigator = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Forgot: {
    screen: ForgotPass,
    navigationOptions: {
      headerShown: false,
    },
  },
  Verify: {
    screen: VerifyOtp,
    navigationOptions: {
      headerShown: false,
    },
  },
  Reset: {
    screen: ResetPass,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: HuddleNavigator,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(AuthNavigator);
