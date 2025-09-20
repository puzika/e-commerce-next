import AuthForm from "@/components/auth-form/auth-form.component";
import Button from "@/components/button/button.component";
import CustomLink from "@/components/custom-link/custom-link.component";
import styles from './page.module.scss';

export default function LoginPage() {
  return (
    <AuthForm
      title="Log in to Exclusive"
      subheading="Enter your details below"
    >
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <div className={styles.btns}>
        <Button>Log in</Button>
        <CustomLink title="Forgot Password?" href="password-reset" />
      </div>
    </AuthForm>
  )
}