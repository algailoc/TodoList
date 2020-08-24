import React, {useState} from 'react';
import {View, FlatList, Alert, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {removeTodo} from '../store/Action';
import {NewTodoDialogue} from './NewTodo';
import {EditTodoDialogue} from './EditTodo';
import {Item} from './Item';

export const TodoList = ({styles}) => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todo.todos);

  const [visible, setVisible] = useState(false);

  const [visibleRedact, setVisibleEdit] = useState(false);

  const [editId, setEditId] = useState('');
  const [editTitle, setEditTitle] = useState('');

  const buttonHandler = () => {
    setVisible(true);
  };

  const closeDialog = () => {
    setVisible(false);
    setVisibleEdit(false);
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
    setVisibleEdit(true);
    setEditId(id);
    setEditTitle(value);
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
              isBusy={todoList.isBusy}
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
        id={editId}
        title={editTitle}
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
