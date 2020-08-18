import {ADD_TODO, REMOVE_TODO} from './types/types';

export function addTodo(value) {
  const action = {
    type: ADD_TODO,
    payload: value,
  };
  return action;
}
export function removeTodo(id) {
  const action = {
    type: REMOVE_TODO,
    payload: id,
  };
  return action;
}
