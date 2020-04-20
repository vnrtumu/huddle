import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Task = props => {
  return (
    <View style={{...styles.card, ...props.style}}>
      <View style={styles.editButton}>
        <Text style={{...styles.cardTextStyle, color: props.colorCode}}>
          {props.title}
        </Text>
        <TouchableOpacity onPress={props.onEdit}>
          <FontAwesome
            name={props.icon}
            size={30}
            color="#C223CE"
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>

      <Text>{props.pointer}</Text>
      <Text style={{color: 'blue', marginVertical: 5}}>No. Of Hours: {props.noOfHours}</Text>
      <Text style={{color: 'orange', marginVertical: 5}}>Comments: {props.comments}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  editButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    padding: 15,
  },
  cardTextStyle: {
    color: 'red',
    fontSize: 22,
    fontWeight: '500',
  },
  chapterStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: 5,
  },
});

export default Task;
