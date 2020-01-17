import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Task from '../components/Task';

class CountinuedTaskScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <Task
            title="Alberta"
            pointer="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            style={styles.chapterCardtext}
            colorCode="#0000FF"
            onEdit={() => {
              this.props.navigation.navigate({
                routeName: 'EditTask',
              });
            }}
          />
          <Task
            title="Ilearn online"
            pointer="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            style={styles.chapterCardtext}
            colorCode="#0000FF"
            onEdit={() => {
              this.props.navigation.navigate({
                routeName: 'EditTask',
              });
            }}
          />
          <Task
            title="Capability"
            pointer="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            style={styles.chapterCardtext}
            colorCode="#0000FF"
          />
          <Task
            title="Huddle Meeting Mobile"
            pointer="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            style={styles.chapterCardtext}
            colorCode="#0000FF"
          />
          <Task
            title="Huddle Meeting Web"
            pointer="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            style={styles.chapterCardtext}
            colorCode="#0000FF"
          />
          <Task
            title="Capability"
            pointer="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            style={styles.chapterCardtext}
            colorCode="#0000FF"
          />
          <Task
            title="Huddle Meeting Mobile"
            pointer="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            style={styles.chapterCardtext}
            colorCode="#0000FF"
          />
          <Task
            title="Huddle Meeting Web"
            pointer="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            style={styles.chapterCardtext}
            colorCode="#0000FF"
          />
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
