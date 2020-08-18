import React, {useState} from 'react';
import {View, FlatList, Text, TextInput, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import {styles} from '../screens/styles/Styles';
import {initialState, todoReducer} from '../store/TodoReducer';
import {addTodo} from '../store/Action';
import {ADD_TODO} from '../store/types/types';

export const TodoList = ({styles, onButtonPressHandler}) => {
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  // const todos = [
  //   {id: '1', value: 'Write the app'},
  //   {id: '2', value: 'Do something'},
  // ];

  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todo.todos);

  console.log(todoList.length);

  const [value, setValue] = useState('');

  const buttonHandler = () => {
    // const name = {
    //   firstName: 'John',
    //   secondName: 'Smith',
    //   age: 45,
    //   gender: '-',
    // };
    // func({firstName: 'J', secondName: 'S'});
    // func1(name);
    // func2(name.firstName, name.secondName);
    // const {sum} = func3({x: 2, y: 0, z: 6});
    // console.log(sum);

    dispatch(addTodo(value));

    onButtonPressHandler();
  };

  const func = ({firstName, secondName}) => {
    console.log(firstName, secondName);
  };

  const func3 = ({x, y, z}) => {
    const result = {
      x,
      y,
      z,
      sum: x + y + z,
    };
    return result;
  };

  const func1 = (userName) => {
    const {firstName, secondName} = userName;
    console.log(firstName, secondName);
  };

  const func2 = (one, two) => {
    console.log(one, two);
  };

  return (
    <View>
      <TextInput onChangeText={(text) => setValue(text)} />
      <Button title="one" onPress={buttonHandler} />
      <FlatList
        data={todoList}
        renderItem={({item}) => <Item title={item.value} />}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </View>
  );
};
