export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const toggleTodo = (data) => {
  return {
    type: TOGGLE_TODO,
    payload: data,
  };
};

export const updateTodo = (data) => {
  return {
    type: UPDATE_TODO,
    payload: data,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
