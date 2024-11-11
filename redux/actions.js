export const navigateToScreen = (screen) => ({
  type: 'NAVIGATE',
  payload: screen,
});

export const setName = (name) => ({
  type: 'SET_NAME',
  payload: name,
});
export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
});
