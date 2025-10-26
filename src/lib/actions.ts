'use server';

import { redirect } from "next/navigation";
import { SignupSchema, SignupFormState, SignupFormType } from "./definitions";
import { createUser } from "./firebase";

export async function searchProducts(name: string, data: FormData) {
  const query = data.get(name)?.toString().trim();

  if (!query) return;

  redirect(`/search?${name}=${query}`); 
}

export async function signup(
  prevState: SignupFormState | undefined, 
  formData: FormData
): Promise<SignupFormState> {
  //VALIDATION

  const formDataObj = Object.fromEntries(formData);
  const validatedResult = SignupSchema.safeParse(formDataObj);

  if (!validatedResult.success) {
    return {
      errors: validatedResult.error.flatten().fieldErrors,
      message: "Validation failed",
      values: formDataObj as SignupFormType,
    }
  }

  //CREATING NEW USER

  const { name, email, password } = validatedResult.data;
  
  const { message } = await createUser(email, password);

  return { message }
}