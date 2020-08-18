import {ADD_TODO, REMOVE_TODO} from './types/types';

export const initialState = {
  todos: [
    {
      id: '1',
      value: 'Write the app',
    },
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      console.log('In reducer');
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now().toString(),
            value: action.payload,
          },
        ],
      };
    }

    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
      };
    }

    default: {
      return state;
    }
  }
};
