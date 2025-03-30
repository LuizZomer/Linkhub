import { Router } from "express";
import { createUser } from "./user/createUser.controller";
import { validateDTO } from "../utils/validateDto";
import { CreateUserDTO } from "../dto/user/CreateUser.dto";
import { LoginDTO } from "../dto/auth/login.dto";
import { login } from "./auth/login.controller";
import passport from "passport";
import { teste } from "./auth/teste.controller";
import { CreateLinkDTO } from "../dto/link/CreateLink.dto";
import { createLink } from "./link/createLink.controller";
import { findAllLinks } from "./link/findAllLinks.controller";
import { deleteLink } from "./link/deleteLink.controller";
import { updateLink } from "./link/updateLink.controller";
import { UpdateLinkDTO } from "../dto/link/UpdateLink.dto";

export const routes: Router = Router();

// User
routes.post("/user", validateDTO<CreateUserDTO>(CreateUserDTO), createUser);

// Auth
routes.post("/auth/login", validateDTO(LoginDTO), login);
routes.get(
  "/auth/teste",
  passport.authenticate("jwt", { session: false }),
  teste
);

//Link
routes.post(
  "/link",
  passport.authenticate("jwt", { session: false }),
  validateDTO(CreateLinkDTO),
  createLink
);

routes.put(
  "/link",
  passport.authenticate("jwt", { session: false }),
  validateDTO(UpdateLinkDTO),
  updateLink
);

routes.get(
  "/link",
  passport.authenticate("jwt", { session: false }),
  findAllLinks
);

routes.delete(
  "/link/:id",
  passport.authenticate("jwt", { session: false }),
  deleteLink
);
