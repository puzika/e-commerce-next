import AuthForm from "@/components/auth-form/auth-form.component"
import Button from "@/components/button/button.component"
import CustomLink from "@/components/custom-link/custom-link.component";
import styles from './page.module.scss';

export default function PasswordReset() {
  return (
    <AuthForm
      title="Recover Password"
      subheading="Receive account recovery link on your email"
    >
      <input type="email" name="email" placeholder="Email" />
      <Button>Send</Button>
      <div className={styles.alternatives}>
        <CustomLink href="sign-up" title="Sign up" />
        <span className={styles.conjunction}>OR</span>
        <CustomLink href="login" title="Log in" />
      </div>
    </AuthForm>
  )
}