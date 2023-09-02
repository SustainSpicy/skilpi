import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import authRoute from "./routes/auth.js";
import socialRoute from "./routes/social.js";

const app = express();

dotenv.config();

app.use(cors({ origin: [process.env.UI_URL] }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/social", socialRoute);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello world" });
});

app.listen(5000, () => {
  console.log("Listerning on port 5000");
});
