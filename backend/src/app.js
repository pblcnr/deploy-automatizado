import express from "express";
import cors from "cors";
import sequelize from "./models/sequelize.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

const PORT = 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodadando na porta ${PORT}`);
    });
});