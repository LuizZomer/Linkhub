import {
  Strategy as JwtStrategy,
  ExtractJwt,
  StrategyOptions,
} from "passport-jwt";
import dotenv from "dotenv";
import passport from "passport";
import { findOneUserService } from "../services/user/findOneUser.service";

dotenv.config();

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(opts, async (jwtPayload, done) => {
    const user = await findOneUserService(jwtPayload.username);

    return user ? done(null, user) : done(null, false);
  })
);

export default passport;
