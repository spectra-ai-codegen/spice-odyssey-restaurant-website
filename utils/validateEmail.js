import { z } from "zod";

const emailSchema = z.string().email();

export const validateEmail = (email) => {
  try {
    emailSchema.parse(email);
    return true;
  } catch (error) {
    return false;
  }
};