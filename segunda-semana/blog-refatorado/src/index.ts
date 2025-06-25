import express, { Application } from "express";
import cors from "cors";
import blogRoutes from "./routes/blog-routes";

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use(blogRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
