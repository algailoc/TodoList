import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Item = ({title, id, deleteHandler, styles}) => (
  <View style={styles.item}>
    <Text style={styles.text}>{title}</Text>
    <Icon
      name="delete-outline"
      size={30}
      color={'#CA5931'}
      onPress={() => deleteHandler(id)}
    />
  </View>
);
