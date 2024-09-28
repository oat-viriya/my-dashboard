import z from "zod";

export const userLoginFormSchema = z.object({
  username: z
    .string({ required_error: "Please enter your username." })
    .min(1, "Please enter your username."),
  password: z
    .string({ required_error: "Please enter your password." })
    .min(1, "Please enter your password."),
});
export type UserLoginFormData = z.infer<typeof userLoginFormSchema>;
