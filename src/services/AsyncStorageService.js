import AsyncStorage from '@react-native-community/async-storage';
import {TodoList} from '../components/TodoList';

class AsyncStorageService {
  static key = 'TodoKey';

  static async readData(arr) {
    let todoList = [];

    try {
      const jsonValue = await AsyncStorage.getItem(AsyncStorageService.key);
      if (jsonValue !== null) {
        arr = JSON.parse(jsonValue);
      }
    } catch (e) {
      console.log('In read data on getting');
    }
    return arr;
  }

  static async writeData(value) {
    const id = Date.now().toString();
    const todo = {id, value};

    let todoList = [];

    try {
      const jsonValue = await AsyncStorage.getItem(AsyncStorageService.key);
      if (jsonValue !== null) {
        todoList = JSON.parse(jsonValue);
      }
    } catch (e) {
      console.log('In write data on getting');
    }

    todoList.push(todo);

    try {
      const jsonValue = JSON.stringify(todoList);
      await AsyncStorage.setItem(AsyncStorageService.key, jsonValue);
    } catch (e) {
      console.log('In write data on setting');
    }
    console.log(todoList);
    return todo;
  }

  static async deleteData(id) {
    let todoList = [];

    try {
      const jsonValue = await AsyncStorage.getItem(AsyncStorageService.key);
      if (jsonValue !== null) {
        todoList = JSON.parse(jsonValue);
      }
    } catch (e) {
      console.log('In delete data on getting');
    }

    try {
      await AsyncStorage.removeItem(AsyncStorageService.key);
    } catch (e) {
      console.log('In delete on removing');
    }

    todoList = todoList.filter((todo) => todo.id !== id);

    try {
      const jsonValue = JSON.stringify(todoList);
      await AsyncStorage.setItem(AsyncStorageService.key, jsonValue);
    } catch (e) {
      console.log('In delete data on setting');
    }
    console.log(todoList);

    return id;
  }

  static async editData() {}
}

export default AsyncStorageService;
