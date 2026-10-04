const Task = require("../models/Task");


// ==========================================
// Get all tasks
// ==========================================

const getTasks = async (req, res) => {

    try {

        const tasks = await Task.find()
            .sort({ createdAt: -1 });

        res.status(200).json(tasks);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to get tasks"
        });

    }
};


// ==========================================
// Get one task
// ==========================================

const getTask = async (req, res) => {

    try {

        const task = await Task.findById(req.params.id);

        if (!task) {

            return res.status(404).json({
                message: "Task not found"
            });

        }

        res.status(200).json(task);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to get task"
        });

    }
};


// ==========================================
// Create task
// ==========================================

const createTask = async (req, res) => {

    try {

        const { title } = req.body;

        if (!title) {

            return res.status(400).json({
                message: "Title is required"
            });

        }

        const task = await Task.create({
            title: title
        });

        res.status(201).json(task);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to create task"
        });

    }
};


// ==========================================
// Update task
// ==========================================

const updateTask = async (req, res) => {

    try {

        const { completed } = req.body;

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            {
                completed: completed
            },
            {
                new: true
            }
        );

        if (!task) {

            return res.status(404).json({
                message: "Task not found"
            });

        }

        res.status(200).json(task);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to update task"
        });

    }
};


// ==========================================
// Delete task
// ==========================================

const deleteTask = async (req, res) => {

    try {

        const task = await Task.findByIdAndDelete(
            req.params.id
        );

        if (!task) {

            return res.status(404).json({
                message: "Task not found"
            });

        }

        res.status(200).json({
            message: "Task deleted successfully"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to delete task"
        });

    }
};


module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
};