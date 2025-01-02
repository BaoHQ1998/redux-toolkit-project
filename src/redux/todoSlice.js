// import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO } from "./actions";

// const initstate = [
//   {
//     id: 1,
//     name: "Trainning",
//     completed: true,
//   },
//   {
//     id: 2,
//     name: "Toolkit",
//     completed: true,
//   },
//   {
//     id: 3,
//     name: "Redux",
//     completed: true,
//   },
// ];

// const todoSlice = (state = initstate, action) => {
//   /*
//   {
//     type:'TODO',
//     payload:{
//       id:4,
//       name:'ABC',
//       completed:false
//     }
//   }
// */

//   switch (action.type) {
//     case ADD_TODO:
//       return [...state, action.payload];

//     case TOGGLE_TODO:
//       return [
//         ...state.map((todo) =>
//           todo.id === action.payload.id
//             ? { ...todo, completed: !todo.completed }
//             : todo
//         ),
//       ];
//     case UPDATE_TODO:
//       return [
//         ...state.map((todo) =>
//           todo.id === action.payload.id ? { ...action.payload } : todo
//         ),
//       ];

//     case DELETE_TODO:
//       return [...state.filter((todo) => todo.id !== action.payload)];

//     default:
//       return state;
//   }
// };

// export default todoSlice;

//toolkit
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoList",
  initialState: [
    {
      id: 1,
      name: "Trainning",
      completed: true,
    },
    {
      id: 2,
      name: "Toolkit",
      completed: true,
    },
    {
      id: 3,
      name: "Redux",
      completed: true,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const current = state.find((item) => item.id === action.payload.id);
      current.completed = !current.completed;
    },
    updateTodo: (state, action) => {
      const currentIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[currentIndex] = action.payload;
      // state = state.map((todo) =>
      //   todo.id === action.payload.id ? { ...action.payload } : todo
      // );
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export default todoSlice;
