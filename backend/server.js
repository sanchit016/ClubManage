const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/connectDB");
const adminRouter = require("./routes/adminRoutes");
const teacherRouter = require("./routes/teacherRoutes");
const studentRouter = require("./routes/studentRoutes");
const convenorRouter = require("./routes/convenorRoutes");
const userRouter = require("./routes/userRoutes");
const mediaRouter = require("./routes/mediaRoutes");

const cookieParser = require("cookie-parser");
const connectCloudinary = require("./config/connectCloudinary");

dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

connectDB();
connectCloudinary();

app.use("/api/admin/", adminRouter);
app.use("/api/convenor/", convenorRouter);
app.use("/api/teacher/", teacherRouter);
app.use("/api/student/", studentRouter);
app.use("/api/user/", userRouter);
app.use("/api/media/", mediaRouter);

// Home Route
app.get("/", (req, res) => {
  return res.send({
    success: true,
    error_code: null,
    message: "Server is Running",
    about: "Sevice is live",
  });
});

app.listen(process.env.PORT || 9000, () => {
  console.log("Server Started");
});
