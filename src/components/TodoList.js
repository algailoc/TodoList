import React, {useState} from 'react';
import {View, FlatList, Text, TextInput, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {addTodo, removeTodo} from '../store/Action';

export const TodoList = ({styles}) => {
  const Item = ({title, id}) => (
    <View style={styles.item}>
      <Text style={styles.text}>{title}</Text>
      <Icon
        name="delete-outline"
        size={30}
        color={'red'}
        onPress={() => deleteHandler(id)}
      />
    </View>
  );

  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todo.todos);

  const [value, setValue] = useState('');

  const buttonHandler = () => {
    if (value.trim().length > 0) {
      dispatch(addTodo(value));
      setValue('');
    } else {
      alert('No todo name');
    }
  };

  const deleteHandler = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={value}
      />
      <FlatList
        data={todoList}
        renderItem={({item}) => <Item title={item.value} id={item.id} />}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
      <Icon
        name="tooltip-plus-outline"
        size={40}
        style={styles.addButton}
        onPress={buttonHandler}
      />
    </View>
  );
};
