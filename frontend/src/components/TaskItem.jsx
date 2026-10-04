function TaskItem({ task, onToggle, onDelete }) {

    return (
        <article className="task-item">

            <button
                className={`task-check ${task.completed ? "checked" : ""}`}
                onClick={() => onToggle(task)}
                aria-label={
                    task.completed
                        ? "Mark task as incomplete"
                        : "Mark task as complete"
                }
            >
                {task.completed && "✓"}
            </button>


            <div className="task-content">

                <p
                    className={
                        task.completed
                            ? "task-title completed"
                            : "task-title"
                    }
                >
                    {task.title}
                </p>

                <p className="task-date">
                    {task.completed ? "Completed" : "In progress"}
                </p>

            </div>


            <button
                className="delete-button"
                onClick={() => onDelete(task._id)}
                aria-label="Delete task"
            >
                Delete
            </button>

        </article>
    );
}

export default TaskItem;