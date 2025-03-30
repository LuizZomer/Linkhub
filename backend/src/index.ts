import express from "express";
import { routes } from "./controllers/routes";
import passport from "passport";
import "./config/passport.config";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(passport.initialize());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
