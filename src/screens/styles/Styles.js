import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainView: {},
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    fontSize: 20,
  },
  todoList: {
    height: '80%',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginBottom: 10,
    height: 27,
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
