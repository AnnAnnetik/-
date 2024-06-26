// import { MdClose } from 'react-icons/md';
// import css from './Task.module.css';

// export const Task = ({ task }) => {
//   return (
//     <div className={css.wrapper}>
//       <input
//         type="checkbox"
//         className={css.checkbox}
//         checked={task.completed}
//       />
//       <p className={css.text}>{task.text}</p>
//       <button className={css.btn}>
//         <MdClose size={24} />
//       </button>
//     </div>
//   );
// };

// При натисканні на кнопку видалення в компоненті Task, необхідно відправити екшен видалення завдання, передавши йому ідентифікатор завдання. Цих даних буде достатньо для видалення задачі з масиву об'єктів.
/*При натисканні на чекбокс в компоненті Task, необхідно відправити екшен перемикання статусу завдання, передавши йому ідентифікатор завдання. Цих даних буде достатньо для того, щоб знайти завдання в масиві об'єктів і змінити значення властивості на протилежне*/
// Імпортуємо хук
import { useDispatch } from 'react-redux';
// Імпортуємо генератор екшену
import { deleteTask, toggleCompleted } from '../../redux/actions';

export const Task = ({ task }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  // Викликаємо генератор екшену
  // та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен перемикання статусу завдання
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div>
      <input type="checkbox" onChange={handleToggle} checked={task.completed} />
      <p>{task.text}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
