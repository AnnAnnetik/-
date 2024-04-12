import { nanoid } from 'nanoid';

export const addTask = text => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: 'tasks/deleteTask',
    payload: taskId,
  };
};

export const toggleCompleted = taskId => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};
// Екшени повинні мати обов'язкову властивість type - рядок який описує тип події в інтерфейсі. Крім властивості type структура об'єкта може бути довільною, проте, дані зазвичай передають у необов'язковій властивості payload. Даними екшену може бути будь-яке значення крім функцій та класів.
