export const initialState = {
  todos: [{ 
  item: "Learn about reducers", 
  completed: false, 
  id: 3892987589 
  }]
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload)
            return { ...todo, completed: !todo.completed };
          else {
            return todo;
          }
        })
      };
    case "ADD_TODO":
      console.log("add todo action", action, "state info", state);
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      };
    case "CLEAR_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return !todo.completed;
        })
      };
    default:
      return state;
  }
};
