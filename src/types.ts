import { DateTime, Email, Str } from "chanfana";
import type { Context } from "hono";
import { z } from "zod";

export type AppContext = Context<{ Bindings: Env }>;

export const User = z.object({
  firstname: Str({ example: "lorem" }),
  lastname: Str(),
  email: Email(),
});

export const UserResponse = User.extend({
  status: Str(),
  created_at: DateTime(),
  updated_at: DateTime(),
});
