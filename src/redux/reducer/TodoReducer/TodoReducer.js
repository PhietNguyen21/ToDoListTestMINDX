import {
  ADD_TO_DO,
  COMPLETE_TO_DO,
  DELETE_ALL,
  DELETE_TO_DO,
  GET_LIST_TO_DO,
} from "../../actions/type/typeTodo";

let arrTODO = [];
if (localStorage.getItem("ARR_TODO")) {
  arrTODO = JSON.parse(localStorage.getItem("ARR_TODO"));
}
const stateDefault = {
  arrTodo: arrTODO,
};

export const TodoReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_LIST_TO_DO: {
      localStorage.setItem("ARR_TODO", JSON.stringify(state.arrTodo));
      return { ...state };
    }
    case ADD_TO_DO: {
      const newArr = [...state.arrTodo];
      newArr.push(action.todo);
      return { ...state, arrTodo: newArr };
    }
    case COMPLETE_TO_DO: {
      const newArr = [...state.arrTodo];

      const index = newArr.findIndex((item) => item.id === action.todo.id);
      if (index !== -1) {
        newArr[index] = {
          ...newArr[index],
          isCompleted: action.todo.isCompleted,
        };
      }
      return { ...state, arrTodo: newArr };
    }

    case DELETE_TO_DO: {
      const newArr = [...state.arrTodo];
      const index = newArr.findIndex((item) => item.id === action.todo.id);
      if (index !== -1) {
        newArr.splice(index, 1);
      }
      return { ...state, arrTodo: newArr };
    }
    case DELETE_ALL: {
      const newArr = [...state.arrTodo];

      let arrTODO = newArr.filter((item) => item.isCompleted === false);

      return { ...state, arrTodo: arrTODO };
    }
    default:
      return {
        ...state,
      };
  }
};
