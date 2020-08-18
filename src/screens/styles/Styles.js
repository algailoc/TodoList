import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
  },
  todoList: {
    marginLeft: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  text: {
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  addButton: {
    color: 'green',
  },
});
