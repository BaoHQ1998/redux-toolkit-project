import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO } from "./actions";

const initstate = [
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
];

const todoSlice = (state = initstate, action) => {
  /*
  {
    type:'TODO',
    payload:{
      id:4,
      name:'ABC',
      completed:false
    }
  }
*/

  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case TOGGLE_TODO:
      return [
        ...state.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      ];
    case UPDATE_TODO:
      return [
        ...state.map((todo) =>
          todo.id === action.payload.id ? { ...action.payload } : todo
        ),
      ];

    case DELETE_TODO:
      return [...state.filter((todo) => todo.id !== action.payload)];

    default:
      return state;
  }
};

export default todoSlice;
