import TaskItem from "./TaskItem";

function TaskList({
    tasks,
    onToggle,
    onDelete,
    loading
}) {

    if (loading) {
        return (
            <div className="task-list">

                <div className="task-skeleton"></div>
                <div className="task-skeleton"></div>
                <div className="task-skeleton"></div>

            </div>
        );
    }


    if (tasks.length === 0) {
        return (
            <div className="empty-state">

                <div className="empty-icon">
                    +
                </div>

                <h3>No tasks yet</h3>

                <p>
                    Add your first task above and get started.
                </p>

            </div>
        );
    }


    return (
        <div className="task-list">

            {tasks.map((task) => (

                <TaskItem
                    key={task._id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />

            ))}

        </div>
    );
}

export default TaskList;