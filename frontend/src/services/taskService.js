// Get all tasks
export async function getTasks() {
    const response = await fetch("/api/tasks");

    if (!response.ok) {
        throw new Error("Failed to fetch tasks");
    }

    return response.json();
}


// Create a new task
export async function createTask(title) {
    const response = await fetch("/api/tasks", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            title
        })
    });

    if (!response.ok) {
        throw new Error("Failed to create task");
    }

    return response.json();
}


// Update task
export async function updateTask(taskId, completed) {
    const response = await fetch(`/api/tasks/${taskId}`, {
        method: "PATCH",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            completed
        })
    });

    if (!response.ok) {
        throw new Error("Failed to update task");
    }

    return response.json();
}


// Delete task
export async function deleteTask(taskId) {
    const response = await fetch(`/api/tasks/${taskId}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Failed to delete task");
    }

    return response.json();
}