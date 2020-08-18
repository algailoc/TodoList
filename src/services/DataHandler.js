import {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {TodoList} from '../components/TodoList';

export const DataHandler = async () => {
  const saveData = async () => {
    try {
      await AsyncStorage.setItem('Todo', JSON.stringify(state));
      // await AsyncStorage.setItem(
      //   'todoKey',
      //   JSON.stringify({id: '3', value: 'Take a bath'}),
      // );
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
  };

  const readData = async () => {
    try {
      const todo = JSON.parse(await AsyncStorage.getItem('todoKey'));

      if (todo !== null) {
        setTodos(todo);
      }
    } catch (e) {
      alert('Failed to fetch the data from storage');
    }
  };

  useEffect(() => {
    saveData();
    readData();
    // console.log(todos);
  }, [todos.length]);
};
