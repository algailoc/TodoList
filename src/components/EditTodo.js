import React, {useState, useEffect} from 'react';
import {View, TextInput} from 'react-native';
import {ConfirmDialog} from 'react-native-simple-dialogs';
import {useDispatch} from 'react-redux';
import {editTodo} from '../store/Action';

export const EditTodoDialogue = ({visible, closeDialog, styles, id, title}) => {
  // console.log(id, title);

  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(title);
  }, [title]);

  const dispatch = useDispatch();

  const positiveHandler = () => {
    // console.log(id, value);
    if (value.trim().length > 0) {
      dispatch(editTodo(id, value));
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
