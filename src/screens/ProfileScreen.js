/* eslint-disable handle-callback-err */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
} from 'react-native';

import CardOptions from '../components/CardOptions';
import Icon from 'react-native-vector-icons/Fontisto';
import ImagePicker from 'react-native-image-picker';

import axios from 'axios';
// import Snackbar from 'react-native-snackbar';
import {WToast} from 'react-native-smart-tip';

import config from '../../config';
import { NavigationEvents } from "react-navigation";




export default class ProfileScreen extends Component {
  state = {
    ImageSource: null,
  };

  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        axios
          .get(`${config.API_URL}/profileDisplay`, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then(res => {
            this.setState({
              email: res.data.success.email,
              first_name: res.data.success.first_name,
              phone: res.data.success.phone,
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
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, imgResponse => {
      // console.log('Response = ', imgResponse);

      if (imgResponse.didCancel) {
        console.log('User cancelled photo picker');
      } else if (imgResponse.error) {
        console.log('ImagePicker Error: ', imgResponse.error);
      } else if (imgResponse.customButton) {
        console.log('User tapped custom button: ', imgResponse.customButton);
      } else {
        let source = {uri: imgResponse.uri};

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          ImageSource: source,
        });
      }
    });
  }

  clearAsyncStorage = () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
          <NavigationEvents onDidFocus={() => this.componentDidMount()} />
        <View style={styles.prrileContainer}>
          <View style={styles.photoContainer}>
            {this.state.ImageSource === null ? (
              <Image
                source={require('../assets/profile.jpg')}
                style={styles.profileImg}
              />
            ) : (
              <Image
                style={styles.profileImg}
                source={this.state.ImageSource}
              />
            )}
            <View style={styles.uploadIconContainer}>
              <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                <Icon
                  name="camera"
                  size={25}
                  color="#C223CE"
                  style={styles.uploadIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.textStyle}>{this.state.first_name}</Text>
          </View>
        </View>
        <View style={styles.settingsContainer}>
          <CardOptions
            title={this.state.email}
            icon="envelope"
            style={styles.cardOptions}
          />
          <CardOptions
            title={this.state.phone}
            icon="phone"
            style={styles.cardOptions}
            onSelect={() =>
              this.props.navigation.navigate({routeName: 'Change'})
            }
          />

          {/* <TouchableOpacity onPress={this.clearAsyncStorage}> */}
          <CardOptions
            title="Log Out"
            icon="sign-out"
            style={styles.cardOptions}
            onSelect={this.clearAsyncStorage}
          />
          {/* </TouchableOpacity> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  prrileContainer: {
    height: 250,
    width: '100%',
    backgroundColor: '#C223CE',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  photoContainer: {
    backgroundColor: 'white',
    width: 120,
    height: 120,
    borderRadius: 60,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 28,
  },
  profileImg: {
    height: 120,
    width: 120,
    borderRadius: 60,
    position: 'absolute',
  },
  nameContainer: {
    marginTop: 175,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  uploadIconContainer: {
    marginTop: 90,
    marginLeft: 90,
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  uploadIcon: {
    color: 'black',
    alignSelf: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    color: 'white',
    alignSelf: 'center',
  },
  locationTextStyle: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
  },
  settingsContainer: {
    marginVertical: 25,
    marginHorizontal: 20,
  },
  cardOptions: {
    marginVertical: 10,
    padding: 8,
  },
});
