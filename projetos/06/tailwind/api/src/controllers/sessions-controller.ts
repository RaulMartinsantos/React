import { Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { authConfig } from "@/configs/auth";
import { prisma } from "@/database/prisma";
import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";
import { z } from "zod";

class SessionsController {
  async create(request: Request, response: Response) {
    const HASHDUMMY =
      "$2a$12$87rP7RM.650YgXYRHizT1.wrq2DfQHSRo.S1dIdsYxxRyxXcsvRAy";

    const bodySchema = z.object({
      email: z.string().email({ message: "E-mail inválido" }),
      password: z.string(),
    });

    const { email, password } = bodySchema.parse(request.body);

    const user = await prisma.user.findFirst({
      where: { email },
    });

    const hashedPassword = user?.password ?? HASHDUMMY;

    const passwordMatched = await compare(password, hashedPassword);

    if (!passwordMatched || !user) {
      throw new AppError("E-mail ou senha inválidos", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ role: user.role }, secret, {
      subject: user.id,
      expiresIn,
    });

    const { password: _, ...userWithoutPassword } = user;

    response.json({ token, user: userWithoutPassword });
  }
}

export { SessionsController };
