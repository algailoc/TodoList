import React, {useState, useEffect} from 'react';
import {View, FlatList, Alert, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {removeTodo, readTodo} from '../store/Action';
import {NewTodoDialogue} from './NewTodo';
import {EditTodoDialogue} from './EditTodo';
import {Item} from './Item';

export const TodoList = ({styles}) => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todo.todos);

  const [visible, setVisible] = useState(false);

  const [visibleRedact, setVisibleRedact] = useState(false);

  const [redactId, setRedactId] = useState('');
  const [redactTitle, setRedactTitle] = useState('');

  const arr = [];

  useEffect(() => {
    dispatch(readTodo(arr));
  });

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

  const redactTodoHandler = (id, value) => {
    setVisibleRedact(true);
    setRedactId(id);
    setRedactTitle(value);
  };

  return (
    <View style={styles.mainView}>
      <FlatList
        style={styles.todoList}
        data={todoList}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              redactTodoHandler(item.id, item.value);
            }}>
            <Item
              styles={styles}
              title={item.value}
              id={item.id}
              deleteHandler={deleteHandler}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
      <NewTodoDialogue
        visible={visible}
        closeDialog={closeDialog}
        styles={styles}
      />
      <EditTodoDialogue
        visible={visibleRedact}
        closeDialog={closeDialog}
        styles={styles}
        id={redactId}
        title={redactTitle}
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
