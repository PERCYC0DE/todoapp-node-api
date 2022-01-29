const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const tasksRoutes = require("./routes/tasks.routes");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/tasks", tasksRoutes);
app.use((err, req, res, next) => {
  return res.json({
    status: "error",
    message: err.message,
  });
});

app.listen(3000, () =>
  console.log(`Server running in port ${process.env.PORT}`)
);
