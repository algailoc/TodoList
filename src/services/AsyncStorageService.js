import AsyncStorage from '@react-native-community/async-storage';

class AsyncStorageService {
  static key = 'TodoKey';

  static async readData() {
    let todoList = [];

    try {
      const jsonValue = await AsyncStorage.getItem(AsyncStorageService.key);
      if (jsonValue !== null) {
        todoList = JSON.parse(jsonValue);
      } else {
        console.log('Array is empty');
      }
    } catch (e) {
      console.log('In read data on getting');
    }
    return todoList;
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
    // console.log(todoList);
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

    todoList = todoList.filter((todo) => todo.id !== id);

    try {
      const jsonValue = JSON.stringify(todoList);
      await AsyncStorage.setItem(AsyncStorageService.key, jsonValue);
    } catch (e) {
      console.log('In delete data on setting');
    }
    // console.log(todoList);

    return id;
  }

  static async editData({id, value}) {
    let todoList = [];

    try {
      const jsonValue = await AsyncStorage.getItem(AsyncStorageService.key);
      if (jsonValue !== null) {
        todoList = JSON.parse(jsonValue);
      }
    } catch (e) {
      console.log('In edit data on getting');
    }

    todoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.value = value;
      }
      return todo;
    });

    try {
      const jsonValue = JSON.stringify(todoList);
      await AsyncStorage.setItem(AsyncStorageService.key, jsonValue);
    } catch (e) {
      console.log('In edit data on setting');
    }
    console.log(todoList);
    return {id, value};
  }
}

export default AsyncStorageService;
