import { useState } from "react";

function TaskForm({ onTaskAdded }) {

    const [title, setTitle] = useState("");
    const [isAdding, setIsAdding] = useState(false);

    const handleSubmit = async (event) => {

        event.preventDefault();

        const trimmedTitle = title.trim();

        // Don't submit empty task
        if (!trimmedTitle) {
            return;
        }

        try {

            setIsAdding(true);

            await onTaskAdded(trimmedTitle);

            setTitle("");

        } catch (error) {

            console.error(error);

        } finally {

            setIsAdding(false);

        }
    };

    return (
        <form
            className="task-form"
            onSubmit={handleSubmit}
        >

            <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="What needs to be done?"
                maxLength={255}
            />

            <button
                type="submit"
                disabled={isAdding}
            >
                {isAdding ? "Adding..." : "Add task"}
            </button>

        </form>
    );
}

export default TaskForm;