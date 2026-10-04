import { useEffect, useState } from "react";

import Header from "./components/Header";
import Stats from "./components/Stats";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import {
    getTasks,
    createTask,
    updateTask,
    deleteTask
} from "./services/taskService";

import "./App.css";

function App() {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // ==========================================
    // Dark mode
    // ==========================================

    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem("taskflow-theme");

        return savedTheme === "dark";
    });


    // Apply theme to the HTML element
    useEffect(() => {

        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        localStorage.setItem(
            "taskflow-theme",
            isDark ? "dark" : "light"
        );

    }, [isDark]);


    // ==========================================
    // Change theme
    // ==========================================

    const handleThemeToggle = () => {
        setIsDark((currentTheme) => !currentTheme);
    };


    // ==========================================
    // Load tasks
    // ==========================================

    const loadTasks = async () => {

        try {

            setError("");

            const data = await getTasks();

            setTasks(data);

        } catch (error) {

            console.error(error);

            setError(
                "Unable to load your tasks. Please try again."
            );

        } finally {

            setLoading(false);

        }
    };


    // ==========================================
    // Load tasks when app starts
    // ==========================================

    useEffect(() => {
        loadTasks();
    }, []);


    // ==========================================
    // Add task
    // ==========================================

    const handleTaskAdded = async (title) => {

        try {

            const newTask = await createTask(title);

            setTasks((currentTasks) => [
                newTask,
                ...currentTasks
            ]);

        } catch (error) {

            console.error(error);

            throw error;
        }
    };


    // ==========================================
    // Toggle completed
    // ==========================================

    const handleToggle = async (task) => {

        try {

            const updatedTask = await updateTask(
                task._id,
                !task.completed
            );

            setTasks((currentTasks) =>
                currentTasks.map((item) =>
                    item._id === updatedTask._id
                        ? updatedTask
                        : item
                )
            );

        } catch (error) {

            console.error(error);

            setError(
                "Unable to update the task."
            );

        }
    };


    // ==========================================
    // Delete task
    // ==========================================

    const handleDelete = async (taskId) => {

        try {

            await deleteTask(taskId);

            setTasks((currentTasks) =>
                currentTasks.filter(
                    (task) => task._id !== taskId
                )
            );

        } catch (error) {

            console.error(error);

            setError(
                "Unable to delete the task."
            );

        }
    };


    // ==========================================
    // Statistics
    // ==========================================

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.completed
    ).length;

    const pendingTasks =
        totalTasks - completedTasks;


    return (
        <main className="app">

            <div className="container">

                <Header
                    isDark={isDark}
                    onThemeToggle={handleThemeToggle}
                />


                <Stats
                    total={totalTasks}
                    pending={pendingTasks}
                    completed={completedTasks}
                />


                <section className="workspace">

                    <div className="section-heading">

                        <div>

                            <p className="eyebrow">
                                YOUR TASKS
                            </p>

                            <h2>
                                Things to get done
                            </h2>

                        </div>

                        <span className="task-count">
                            {totalTasks}{" "}
                            {totalTasks === 1
                                ? "task"
                                : "tasks"}
                        </span>

                    </div>


                    <TaskForm
                        onTaskAdded={handleTaskAdded}
                    />


                    {error && (
                        <div className="error-box">
                            {error}
                        </div>
                    )}


                    <TaskList
                        tasks={tasks}
                        loading={loading}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />

                </section>


                <footer className="footer">
                    <span>TaskFlow</span>
                    <span>Simple by design.</span>
                </footer>

            </div>

        </main>
    );
}

export default App;