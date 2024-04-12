export const getTasks = state => state.tasks;

export const getStatusFilter = state => state.filters.status;
// Один і той же селектор може використовуватися в декількох місцях програми, що призводить до дублювання коду, як, наприклад, у наших компонентах TaskList, StatusFilter та TaskCounter. Щоб уникнути цього та ще більше структурувати код, всі функції-селектори оголошуються в окремому файлі, наприклад, в src/redux/selectors.js, після чого імпортуються до компонентів.
