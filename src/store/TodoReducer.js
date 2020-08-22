import {
  REMOVE_TODO_BEGIN,
  REMOVE_TODO_FINISHED,
  REMOVE_TODO_ERROR,
  EDIT_TODO_BEGIN,
  EDIT_TODO_FINISHED,
  EDIT_TODO_ERROR,
  EDIT_TODO,
  ADD_TODO_BEGIN,
  ADD_TODO_FINISHED,
  ADD_TODO_ERROR,
  READ_TODO_BEGIN,
  READ_TODO_FINISHED,
  READ_TODO_ERROR,
} from './types/types';

export const initialState = {
  ready: false,
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_TODO_BEGIN: {
      return {
        ...state,
        ready: false,
      };
    }

    case READ_TODO_FINISHED: {
      return {
        ...state,
        todos: action.payload,
        ready: true,
      };
    }

    case READ_TODO_ERROR: {
      console.log('Reducer error on reading');
      return state;
    }

    case ADD_TODO_BEGIN: {
      return state;
    }

    case ADD_TODO_FINISHED: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            value: action.payload.value,
          },
        ],
      };
    }

    case ADD_TODO_ERROR: {
      console.log('Reducer error on adding');
      return state;
    }

    case REMOVE_TODO_BEGIN: {
      return state;
    }

    case REMOVE_TODO_FINISHED: {
      // console.log('Remove finished');
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }

    case REMOVE_TODO_ERROR: {
      console.log('Reducer error on deleting');
      return state;
    }

    case EDIT_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.value = action.payload.value;
          }
          return todo;
        }),
      };
    }

    default: {
      return state;
    }
  }
};
