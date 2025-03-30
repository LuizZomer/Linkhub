import { Link } from "@prisma/client";
import { TCreateLinkOutput } from "../types/link/createLinkOutput.type";

export function linkCreateMapper({
  category,
  favorite,
  id,
  title,
  url,
  createdAt,
}: Link): TCreateLinkOutput {
  return {
    category,
    favorite,
    id,
    title,
    url,
    createdAt,
  };
}
