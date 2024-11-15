import s from './TaskCard.module.css'

function TaskCard({ task, description, deadline }) {
    return (
        <div className={s.taskCard}>
            <h3>{task}</h3>
            <p className={s.description}>Описание: {description}</p>
            <p>Дата: {deadline}</p>
        </div>
    );
}

export default TaskCard;
