'use client';

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/authentication";
import type { SignInFormState } from "@/lib/definitions";
import Link from "next/link";
import AuthForm from "@/components/auth-form/auth-form.component";
import Button from "@/components/button/button.component";
import CustomLink from "@/components/custom-link/custom-link.component";
import FormItem from "../form-item/form-item.component";
import { HOME_ROUTE, SIGN_UP_ROUTE } from "@/lib/constants";
import { createSession } from "@/lib/session";
import styles from './login-form.module.scss';

export default function LoginForm() {
  const router = useRouter();
  const [formState, setFormState] = useState<SignInFormState>({});
  const [pending, setPending] = useState<boolean>(false);
  
  const { errors, values } = formState;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setPending(true);

    const newState = await signIn(formData);
    
    // if (newState.success) {
    //   router.push(HOME_ROUTE);
    //   router.refresh();
    // }
    
    setFormState(newState);
    setPending(false);
  }

  return (
    <AuthForm
      title="Log in to Exclusive"
      subheading="Enter your details below"
      submitHandler={handleSubmit}
    >
      <FormItem errors={errors?.email}>
        <input 
          type="text" 
          name="email" 
          placeholder="Email"
          defaultValue={values?.email ?? ''}
        />
      </FormItem>
      <FormItem errors={errors?.password}>
        <input 
          type="text" 
          name="password" 
          placeholder="Password"
          defaultValue={values?.password ?? ''} 
        />
      </FormItem>
      <div className={styles.btns}>
        <Button type="button">
          { pending ? "Submitting..." : "Log in" }
        </Button>
        <CustomLink title="Forgot Password?" href="password-reset" />
      </div>
      <div className={styles.alternatives}>
        <p>Already have an account?</p>
        <Link className={styles.alternative} href={SIGN_UP_ROUTE}>Sign up</Link>
      </div>
    </AuthForm>
  )
}