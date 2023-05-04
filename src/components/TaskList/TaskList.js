import { Task } from 'components/Task/Task';
import { useSelector } from 'react-redux';
import { getStatusFilter, getTasks } from '../../redux/selectors';
import { statusFilters } from '../../redux/constants';
import css from './TaskList.module.css';

const getVisibleTask = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTask = getVisibleTask(tasks, statusFilter);
  return (
    <ul className={css.list}>
      {visibleTask.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};