import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bookRoute from "./routes/bookRoute.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bookRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}....`);
});
