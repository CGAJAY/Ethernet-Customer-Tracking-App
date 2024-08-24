import express from "express";
const app = express();
import { homeRouter } from "./routes/homeRoute";
import customerRoutes from "./routes/customerRoute";

app.use(express.json());

app.use("/", homeRouter);
app.use("/customers", customerRoutes);

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
