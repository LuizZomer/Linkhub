import { Link } from "@prisma/client";

export type TCreateLinkOutput = Omit<Link, "userId">;
