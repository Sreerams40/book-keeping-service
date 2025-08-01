const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./mongoDB/connection");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use routes
const bookRoutes = require("./routes/bookRoutes");
app.use("/books", bookRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

const libraryRoutes = require("./routes/libraryRoutes");
app.use("/libraries", libraryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
