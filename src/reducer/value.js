export const valueReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_VALUE":
      return action.text;

    default:
      return state;
  }
};
