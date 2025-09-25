import { Bool, OpenAPIRoute } from "chanfana";
import { z } from "zod";
import { type AppContext, User, UserResponse } from "../types";
import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";

export class SignUp extends OpenAPIRoute {
  schema = {
    tags: ["User"],
    summary: "User signup for event",
    request: {
      body: {
        content: {
          "application/json": {
            schema: User,
          },
        },
      },
    },
    responses: {
      "200": {
        description: "Returns the created task",
        content: {
          "application/json": {
            schema: z.object({
              series: z.object({
                success: Bool(),
                result: z.object({
                  task: UserResponse,
                }),
              }),
            }),
          },
        },
      },
    },
  };

  async handle(c: AppContext) {
    const adapter = new PrismaD1(c.env.DB);
    const prisma: PrismaClient = new PrismaClient({ adapter });

    // Get validated data
    const data = await this.getValidatedData<typeof this.schema>();

    // Retrieve the validated request body
    const userToCreate = data.body;

    // Create user in database

    const newUser = await prisma.user.create({
      data: {
        email: userToCreate.email,
        firstname: userToCreate.firstname,
        lastname: userToCreate.lastname,
      },
    });

    return {
      success: true,
      user: newUser,
    };
  }
}
