import tasks from "../../data";
import TaskCard from "../TaskCard/TaskCard";
import s from './TasksContainer.module.css'

function TasksContainer({ time }) {
    return (
        <div className={s.tasksContainer}>
            {tasks
                .filter(el => el.ampm === time)
                .map(el => (
                    <TaskCard key={el.deadline} {...el} />
                ))}
        </div>
    );
}

export default TasksContainer;
