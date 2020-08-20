import React, {useState} from 'react';
import {View, FlatList, Text, Alert, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {removeTodo} from '../store/Action';
import {NewTodoDialogue} from './NewTodo';
import {RedactTodoDialogue} from './RedactTodo';

export const TodoList = ({styles}) => {
  const Item = ({title, id}) => (
    <TouchableOpacity
      onPress={() => {
        redactTodoHandler();
        getId(id);
      }}>
      <View style={styles.item}>
        <Text style={styles.text}>{title}</Text>
        <Icon
          name="delete-outline"
          size={30}
          color={'#CA5931'}
          onPress={() => deleteHandler(id)}
        />
      </View>
    </TouchableOpacity>
  );

  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todo.todos);

  const [visible, setVisible] = useState(false);

  const [visibleRedact, setVisibleRedact] = useState(false);

  const buttonHandler = () => {
    setVisible(true);
  };

  const closeDialog = () => {
    setVisible(false);
    setVisibleRedact(false);
  };

  const deleteHandler = (id) => {
    Alert.alert(
      'Are you sure you want to delete this todo?',
      '',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'Confirm', onPress: () => dispatch(removeTodo(id))},
      ],
      {cancelable: true},
    );
  };

  const redactTodoHandler = (id) => {
    setVisibleRedact(true);
  };

  // const getTodoValue = (id) => {
  //   const todo = todoList.find((t) => t.id === id);
  //   return todo;
  // };

  const getId = (id) => {
    console.log(id);
    return id;
  };

  return (
    <View style={styles.mainView}>
      <FlatList
        style={styles.todoList}
        data={todoList}
        renderItem={({item}) => <Item title={item.value} id={item.id} />}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
      <NewTodoDialogue
        visible={visible}
        closeDialog={closeDialog}
        styles={styles}
      />
      <RedactTodoDialogue
        visible={visibleRedact}
        closeDialog={closeDialog}
        styles={styles}
        id={getId}
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
