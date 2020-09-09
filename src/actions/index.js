export const addToDo = (todoValue) => {
  return {
    type: "ADD_TODO",
    text: todoValue,
  };
};

export const changeValue = (value) => {
  return {
    type: "CHANGE_VALUE",
    text: value,
  };
};
