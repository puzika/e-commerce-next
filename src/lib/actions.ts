'use server';

import { redirect } from "next/navigation";
import { 
  SignupSchema,
  SignupFormState,
  SignupFormType
} from "./definitions";
import { 
  addUserToDb,
  createUser,
  usernameExists,
} from "./firebase";

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
  
  const exists = await usernameExists(name);

  if (!exists.success) return { message: exists?.message };
  
  if (exists.exists) return { 
    errors: { name: ["Username already exists"] }, 
    values: formDataObj as SignupFormType,
  };
  
  const createUserResult = await createUser(email, password);

  if (createUserResult.emailExists) return { 
    errors: { email: ["Email already exists"] }, 
    values: formDataObj as SignupFormType,
  };

  if (!createUserResult.success) return { message: createUserResult?.message };

  const addUserToDbResult = await addUserToDb(name, email, password);

  if (!addUserToDbResult.success) return { message: addUserToDbResult?.message };

  return { message: "Signup successful!" };
}