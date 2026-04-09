import { z } from "zod";
import { login, signup } from "./auth.validation";

export type LoginDto = z.infer<typeof login.body>;
export type SignupDto = z.infer<typeof signup.body>;
