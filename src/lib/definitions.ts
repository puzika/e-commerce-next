import z from "zod";

export type FetchOptions = {
  cache?: 'force-cache' | 'no-store',
  next?: {
    revalidate?: false | 0 | number,
    tag?: string[],
  }
}

export type ReviewType = {
  rating: number,
  comment: string,
  date: string,
  reviewerName: string,
  reviewerEmail: string,
}

export type ProductType = {
  id: number,
  title: string,
  price: number,
  rating: number,
  thumbnail: string,
  images: string[],
  availabilityStatus: string,
  description: string,
  returnPolicy: string,
  warrantyInformation: string,
  reviews: ReviewType[],
};

export type IconProps = {
  size: number,
  fill?: boolean,
}

export type Request = {
  url: string,
  options?: FetchOptions & { timeout?: number },
  errorDescription?: string,
}

export type RequestError = {
  title: string,
  message: string,
  description?: string,
}

export type FirebaseActionResult = {
  success: boolean,
  message?: string,
}

export const SignupSchema = z.object({
  name: z.string().trim().min(1, { message: "Name must be provided" }),
  email: z.email().trim(),
  password: z.string().trim()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(30, { message: "Password can't be longer than 20 characters" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter "})
    .regex(/[0-9]/, { message: "Password must contain at least one number "})
    .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character" }), 
});

export type SignupFormType = z.infer<typeof SignupSchema>;

export type SignupFormState = {
  errors?: {
    name?: string[],
    email?: string[],
    password?: string[],
  },
  message?: string,
  values?: SignupFormType,
};

