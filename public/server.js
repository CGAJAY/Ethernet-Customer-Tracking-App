import express from "express";
import { homeRouter } from "./routes/homeRoute.js";
import { customerRoutes } from "./routes/customerRoute.js";

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/", homeRouter);
app.get("/customers", customerRoutes);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
