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
      header: null,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      header: null,
    },
  },
  Forgot: {
    screen: ForgotPass,
    navigationOptions: {
      header: null,
    },
  },
  Verify: {
    screen: VerifyOtp,
    navigationOptions: {
      header: null,
    },
  },
  Reset: {
    screen: ResetPass,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: HuddleNavigator,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AuthNavigator);
