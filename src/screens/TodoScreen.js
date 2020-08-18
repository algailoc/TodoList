import React from 'react';
import {View, Text} from 'react-native';
import {TodoList} from '../components/TodoList';
import {styles} from './styles/Styles';

export const TodoScreen = () => {
  const buttonPressHandler = () => {
    console.log('TodoScreen->buttonPressHandler()');
  };

  return (
    <View>
      <Text> Todo title </Text>
      <TodoList styles={styles} onButtonPressHandler={buttonPressHandler} />
    </View>
  );
};
