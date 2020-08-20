import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {ConfirmDialog} from 'react-native-simple-dialogs';
import {useDispatch, useSelector} from 'react-redux';
import {redactTodo} from '../store/Action';

export const RedactTodoDialogue = ({visible, closeDialog, styles, id}) => {
  const [value, setValue] = useState(value);

  const todos = useSelector((state) => state.todo.todos);

  const todo = todos.find((t) => t.id === id);

  // const todoValue = () => {
  //   const todo = todos.find((t) => t.id === id);
  //   return todo.value;
  // };

  const dispatch = useDispatch();

  const positiveHandler = () => {
    if (value.trim().length > 0) {
      dispatch(redactTodo(id, value));
      closeDialog();
    } else {
      alert('No todo name');
    }
  };

  return (
    <ConfirmDialog
      visible={visible}
      title="Insert new todo name"
      onTouchOutside={closeDialog}
      titleStyle={styles.dialogue}
      positiveButton={{
        title: 'CONFIRM',
        onPress: positiveHandler,
        style: styles.positive,
      }}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(t) => setValue(t)}
          value={value}
        />
      </View>
    </ConfirmDialog>
  );
};
