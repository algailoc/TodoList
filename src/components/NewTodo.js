import {ConfirmDialog} from 'react-native-simple-dialogs';
import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTodo} from '../store/Action';

export const NewTodoDialogue = ({visible, closeDialog, styles}) => {
  const [value, setValue] = useState('');

  // const showDialogue = () => {
  //   setVisible(true);
  // };

  const dispatch = useDispatch();

  const positiveHandler = () => {
    if (value.trim().length > 0) {
      dispatch(addTodo(value));
      setValue('');
      closeDialog();
    } else {
      alert('No todo name');
    }
  };

  return (
    <ConfirmDialog
      visible={visible}
      title="New todo"
      onTouchOutside={closeDialog}
      titleStyle={styles.dialogue}
      // buttonsStyle={styles.positive}
      positiveButton={{
        title: 'CONFIRM',
        onPress: positiveHandler,
        style: styles.positive,
      }}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setValue(text)}
          value={value}
        />
      </View>
    </ConfirmDialog>
  );
};
