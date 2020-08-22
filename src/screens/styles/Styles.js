import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainView: {},
  input: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
  },
  todoList: {
    height: '80%',
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
    marginVertical: 5,
  },
  titleView: {
    marginBottom: 30,
    borderBottomWidth: 3,
    borderBottomColor: '#8BE0BF',
    borderRadius: 10,
  },
  addButton: {
    color: '#3DCD52',
    alignSelf: 'center',
  },
  positive: {
    marginHorizontal: '38%',
  },
  dialogue: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  loader: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '80%',
  },
});
