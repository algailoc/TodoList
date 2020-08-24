import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DotIndicator} from 'react-native-indicators';

export const Item = ({title, id, isBusy, deleteHandler, styles}) => {
  if (!isBusy) {
    return (
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
  } else {
    return (
      <View style={styles.item}>
        <DotIndicator color="#5CA88B" count={3} size={10} />
      </View>
    );
  }
};
