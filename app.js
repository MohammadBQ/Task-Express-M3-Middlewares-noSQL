const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const notFoundHandler = require("./middleware/notFoundHandler");
const { error } = require("console");
const errorHandler = require("./middleware/errorHandler");
const PORT = process.env.PORT || 8000
connectDb();
app.use(express.json());

//routes
app.use("/posts", postsRoutes);

//middlewares
app.use("/media/", express.static(path.join(__dirname, "media")));
app.use(cors());
app.use(morgan("dev"));
app.use(notFoundHandler);
app.use(errorHandler);

//listener
app.listen(PORT, () => {
  console.log("The application is running on localhost:8000");
});