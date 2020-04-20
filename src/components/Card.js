import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Card = props => {
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View style={{...styles.card, ...props.style}}>
        <Text style={styles.cardTextStyle}> {props.title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    flexDirection: 'row',
  },
  cardTextStyle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '500',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
});

export default Card;
