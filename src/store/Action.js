import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  ADD_TODO_BEGIN,
  ADD_TODO_ERROR,
  ADD_TODO_FINISHED,
  REMOVE_TODO_BEGIN,
  REMOVE_TODO_ERROR,
  REMOVE_TODO_FINISHED,
  EDIT_TODO_BEGIN,
  EDIT_TODO_ERROR,
  EDIT_TODO_FINISHED,
  READ_TODO,
  READ_TODO_BEGIN,
  READ_TODO_ERROR,
  READ_TODO_FINISHED,
} from './types/types';

export function readTodo(data) {
  const action = {
    type: READ_TODO,
    payload: data,
  };
  return action;
}

export function readTodoBegin(data) {
  const action = {
    type: READ_TODO_BEGIN,
    payload: data,
  };
  return action;
}

export function readTodoFinished(data) {
  const action = {
    type: READ_TODO_FINISHED,
    payload: data,
  };
  return action;
}

export function readTodoError(data) {
  const action = {
    type: READ_TODO_ERROR,
    payload: data,
  };
  return action;
}

export function addTodo(value) {
  const action = {
    type: ADD_TODO,
    payload: value,
  };
  return action;
}

export function addTodoBegin() {
  const action = {
    type: ADD_TODO_BEGIN,
    payload: undefined,
  };
  return action;
}

export function addTodoFinished(id, value, isBusy) {
  const action = {
    type: ADD_TODO_FINISHED,
    payload: {id, value, isBusy},
  };
  return action;
}

export function addTodoError() {
  const action = {
    type: ADD_TODO_ERROR,
    payload: undefined,
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

export function removeTodoBegin(id) {
  const action = {
    type: REMOVE_TODO_BEGIN,
    payload: id,
  };
  return action;
}

export function removeTodoFinished(id) {
  const action = {
    type: REMOVE_TODO_FINISHED,
    payload: id,
  };
  return action;
}

export function removeTodoError(id) {
  const action = {
    type: REMOVE_TODO_ERROR,
    payload: id,
  };
  return action;
}

export function editTodo(id, value) {
  const action = {
    type: EDIT_TODO,
    payload: {id, value},
  };
  return action;
}

export function editTodoBegin(id) {
  const action = {
    type: EDIT_TODO_BEGIN,
    payload: id,
  };
  return action;
}

export function editTodoFinished(id, value) {
  const action = {
    type: EDIT_TODO_FINISHED,
    payload: {id, value},
  };
  return action;
}

export function editTodoError(id) {
  const action = {
    type: EDIT_TODO_ERROR,
    payload: id,
  };
  return action;
}
