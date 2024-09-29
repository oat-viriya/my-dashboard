"use server";

import { ROUTES } from "@/constants";
import { UserLoginFormData } from "@/schemas";
import { signIn, signOut } from "next-auth/server";

const isDev = process.env.NODE_ENV === "development";

export const actionLogin = async (data: UserLoginFormData) => {
  try {
    await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });
    return { success: true, message: "Login successful! Welcome to dashboard" };
  } catch (error) {
    if (isDev) console.error(error);
    return { success: false, message: "Login failed! Please try again." };
  }
};

export const actionLogout = async () => {
  try {
    await signOut({ redirect: false });
    return {
      success: true,
      message: "Logout successful!",
      redirect: ROUTES.HOME,
    };
  } catch (error) {
    if (isDev) console.error(error);
    return { success: false, error: (error as Error)?.message };
  }
};
