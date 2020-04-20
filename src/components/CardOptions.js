import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CardOptions = props => {
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View style={{...styles.card, ...props.style}}>
        <FontAwesome
          name={props.icon}
          size={30}
          color="#C223CE"
          style={styles.iconStyle}
        />
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
    color: 'black',
    fontSize: 22,
    fontWeight: '500',
  },
  iconStyle: {
    marginHorizontal: 10,
  },
});

export default CardOptions;
