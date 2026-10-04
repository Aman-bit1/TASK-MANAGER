const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

const PORT = process.env.PORT || 5000;


// ==========================================
// Connect MongoDB
// ==========================================

connectDB();


// ==========================================
// Middleware
// ==========================================

app.use(cors());

app.use(express.json());


// ==========================================
// Home Route
// ==========================================

app.get("/", (req, res) => {

    res.json({
        message: "TaskFlow backend is running"
    });

});


// ==========================================
// Health Route
// ==========================================

app.get("/api/health", (req, res) => {

    res.json({
        status: "ok"
    });

});


// ==========================================
// Task Routes
// ==========================================

app.use("/api/tasks", taskRoutes);


// ==========================================
// Start Server
// ==========================================

app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});