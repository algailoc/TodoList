import React, {useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {removeTodo} from '../store/Action';
import {NewTodoDialogue} from './NewTodo';

export const TodoList = ({styles}) => {
  const Item = ({title, id}) => (
    <View style={styles.item}>
      <Text style={styles.text}>{title}</Text>
      <Icon
        name="delete-outline"
        size={30}
        color={'#CA5931'}
        onPress={() => deleteHandler(id)}
      />
    </View>
  );

  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todo.todos);

  const [visible, setVisible] = useState(false);

  const buttonHandler = () => {
    setVisible(true);
  };

  const closeDialog = () => {
    setVisible(false);
  };

  const deleteHandler = (id) => {
    dispatch(removeTodo(id));
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
      <Icon
        name="tooltip-plus-outline"
        size={40}
        style={styles.addButton}
        onPress={buttonHandler}
      />
    </View>
  );
};
