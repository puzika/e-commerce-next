import AuthForm from "@/components/auth-form/auth-form.component";
import Button from "@/components/button/button.component";
import GoogleBtn from "@/components/google-btn/google-btn.component";
import Link from "next/link";
import styles from './page.module.scss';

export default function SignUp() {
  return (
    <AuthForm
      title="Create an account"
      subheading="Enter your details below"
    >
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <div className={styles.btns}>
        <Button>Create account</Button>
        <GoogleBtn title="Sign up with Google" />
      </div>
      <div className={styles.alternatives}>
        <p>Already have an account?</p>
        <Link className={styles.alternative} href="#">Log in</Link>
      </div>
    </AuthForm>
  )
}