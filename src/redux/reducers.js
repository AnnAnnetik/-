import { statusFilters } from './constants';

const initialState = {
  tasks: [
    { id: 0, text: 'Learn HTML and CSS', completed: true },
    { id: 1, text: 'Get good at JavaScript', completed: true },
    { id: 2, text: 'Master React', completed: false },
    { id: 3, text: 'Discover Redux', completed: false },
    { id: 4, text: 'Build amazing apps', completed: false },
  ],
  filters: {
    status: statusFilters.all,
  },
};

export const rootReducer = (state = initialState, action) => {
  // Редюсер розрізняє екшени за значенням властивості type
  switch (action.type) {
    // Залежно від типу екшену виконуватиметься різна логіка
    case 'tasks/addTask': {
      // Потрібно повернути новий об'єкт стану
      return {
        // в якому є всі дані існуючого стану
        ...state,
        // та новий масив задач
        tasks: [
          // в якому є всі існуючі завдання
          ...state.tasks,
          // та об'єкт нового завдання
          action.payload,
        ],
      };
    }
    case 'tasks/deleteTask':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    default:
      // Кожен редюсер отримує всі екшени, відправлені в стор.
      // Якщо редюсер не повинен обробляти якийсь тип екшену,
      // необхідно повернути наявний стан без змін.
      return state;
  }
};
// При перемиканні статусу нам доступний ідентифікатор завдання у властивості payload, тому використовуємо метод Array.map() для того, щоб іммутабельно створити новий масив із зміненим значенням властивості completed у задачі з відповідним ідентифікатором. Перевіряємо, чи відповідає тип відправленого екшену рядку "tasks/toggleCompleted" та повертаємо новий об'єкт стану.
