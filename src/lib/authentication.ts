import { 
  SignInFormState,
  SignInSchema,
  SignInFormType,
  SignUpFormState,
  SignUpSchema,
  SignUpFormType
} from "./definitions";
import { 
  signInFirebase,
  signUpFirebase,
  usernameExists,
  addUserToDb
} from "./firebase";

export async function signIn(formData: FormData): Promise<SignInFormState> {
  const formObj = Object.fromEntries(formData);
  const validatedResult = SignInSchema.safeParse(formObj);

  if (!validatedResult.success) {
    return {
      message: "Validation failed",
      errors: validatedResult.error.flatten().fieldErrors,
      values: formObj as SignInFormType,
    }
  }

  const { email, password } = validatedResult.data;

  const signInResult = await signInFirebase(email, password);

  if (!signInResult.success) {
    return { message: "Either password or email is incorrect" };
  }

  return  { message: "Sign-in successful", success: true };
}

export async function signUp(formData: FormData): Promise<SignUpFormState> {
  const formDataObj = Object.fromEntries(formData);
  const validatedResult = SignUpSchema.safeParse(formDataObj);

  if (!validatedResult.success) {
    return {
      errors: validatedResult.error.flatten().fieldErrors,
      message: "Validation failed",
      values: formDataObj as SignUpFormType,
    }
  }

  const { name, email, password } = validatedResult.data;
  
  const exists = await usernameExists(name);

  if (!exists.success) return { message: exists?.message };
  
  if (exists.exists) return { 
    errors: { name: ["Username already exists"] }, 
    values: formDataObj as SignUpFormType,
  };
  
  const createUserResult = await signUpFirebase(email, password);

  if (createUserResult.emailExists) return { 
    errors: { email: ["Email already exists"] }, 
    values: formDataObj as SignUpFormType,
  };

  if (!createUserResult.success) return { message: createUserResult?.message };

  const addUserToDbResult = await addUserToDb(name, email);

  if (!addUserToDbResult.success) return { message: addUserToDbResult?.message };

  return { message: "Sign-up successful!", success: true };
}