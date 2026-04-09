import { z } from "zod";
import { generalValidationFields } from "../../common/validation";

export const login = {
  body: z.strictObject({
    email: generalValidationFields.email,
    password: generalValidationFields.password,
  }),
};

export const signup = {
  body: login.body
    .safeExtend({
      username: generalValidationFields.username,
      phone: generalValidationFields.phone.optional(),
      confirmPassword: generalValidationFields.confirmPassword,
    })
    .refine(
      (data) => {
        return data.password === data.confirmPassword;
      },
      { error: "Password mismatch with confirm password" },
    ),
};
