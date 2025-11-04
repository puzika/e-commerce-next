'use client';

import { useState, type FormEvent } from "react"; 
import { useRouter } from "next/navigation";
import type { SignUpFormState } from "@/lib/definitions";  
import { signUp } from "@/lib/authentication";
import FormItem from "../form-item/form-item.component";
import AuthForm from "@/components/auth-form/auth-form.component";
import Button from "@/components/button/button.component";
import GoogleBtn from "@/components/google-btn/google-btn.component";
import Link from "next/link";
import { HOME_ROUTE } from "@/lib/constants";
import styles from './signup-form.module.scss';

export default function SignUp() {
  const router = useRouter();
  const [formState, setFormState] = useState<SignUpFormState>({});
  const [pending, setPending] = useState<boolean>(false);
  
  const { errors, values } = formState;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setPending(true);

    const newState = await signUp(formData);

    if (newState.success) {
      router.push(HOME_ROUTE);
      router.refresh();
    }
    
    setFormState(newState);
    setPending(false);
  }

  return (
    <AuthForm
      title="Create an account"
      subheading="Enter your details below"
      submitHandler={handleSubmit}
    >
      <FormItem errors={errors?.name}>
        <input 
          type="text" 
          name="name" 
          defaultValue={values?.name ?? ''} 
          placeholder="Name" 
        />
      </FormItem>
      <FormItem errors={errors?.email}>
        <input 
          type="text" 
          name="email" 
          defaultValue={values?.email ?? ''} 
          placeholder="Email" 
        />
      </FormItem>
      <FormItem errors={errors?.password}>
        <input 
          type="text" 
          name="password"
          defaultValue={values?.password ?? ''}
          placeholder="Password" 
        />
      </FormItem>
      <div className={styles.btns}>
        <Button type="button">
          { pending ? 'Submitting...' : 'Create account'}
        </Button>
        <GoogleBtn title="Sign up with Google" />
      </div>
      <div className={styles.alternatives}>
        <p>Don't have an account yet?</p>
        <Link className={styles.alternative} href="login">Log in</Link>
      </div>
    </AuthForm>
  )
}