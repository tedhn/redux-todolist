export const todoReducer = (state = ["asdf", "asdf123"], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.text];

    default:
      return state;
  }
};
