'use client';

import { useActionState } from "react";   
import { signup } from "@/lib/actions";
import FormItem from "../form-item/form-item.component";
import AuthForm from "@/components/auth-form/auth-form.component";
import Button from "@/components/button/button.component";
import GoogleBtn from "@/components/google-btn/google-btn.component";
import Link from "next/link";
import styles from './signup-form.module.scss';

export default function SignUp() {
  const [state, action, pending] = useActionState(signup, {});
  const { errors, values } = state;

  return (
    <AuthForm
      title="Create an account"
      subheading="Enter your details below"
      action={action}
    >
      <FormItem errors={errors?.name}>
        <input 
          type="text" 
          name="name" 
          defaultValue={!!values?.name ? values.name : ''} 
          placeholder="Name" 
        />
      </FormItem>
      <FormItem errors={errors?.email}>
        <input 
          type="text" 
          name="email" 
          defaultValue={!!values?.email ? values.email : ''} 
          placeholder="Email" 
        />
      </FormItem>
      <FormItem errors={errors?.password}>
        <input 
          type="text" 
          name="password"
          defaultValue={!!values?.password ? values.password : ''}
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
        <p>Already have an account?</p>
        <Link className={styles.alternative} href="login">Log in</Link>
      </div>
    </AuthForm>
  )
}