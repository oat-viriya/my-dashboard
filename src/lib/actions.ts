"use server";

import { UserLoginFormData } from "@/schemas";

export const actionLogin = async (data: UserLoginFormData) => {
  try {
    console.log(data);
    return { success: true, message: "Login successful!" };
    // return { success: false, message: "Login failed!" };
  } catch (error) {
    console.error(error);
  }
};
