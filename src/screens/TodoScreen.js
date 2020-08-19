import React from 'react';
import {View, Text} from 'react-native';
import {TodoList} from '../components/TodoList';
import {styles} from './styles/Styles';

export const TodoScreen = () => {
  return (
    <View>
      <View style={styles.titleView}>
        <Text style={styles.title}> Todo list </Text>
      </View>
      <TodoList styles={styles} />
    </View>
  );
};
