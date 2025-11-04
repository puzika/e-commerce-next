import CustomLink from '@/components/custom-link/custom-link.component';
import TextField from '@/components/text-field/text-field.component';
import Button from '@/components/button/button.component';
import { HOME_ROUTE } from '@/lib/constants';
import styles from './page.module.scss';

export default function ProfilePage() {
  const personalDetails = [
    { name: "first-name", title: "First name" },
    { name: "last-name", title: "Last name" },
    { name: "email", title: "Email" },
    { name: "address", title: "Address"},
  ]

  return (
    <form className={styles.form}>
      <h2 className={styles.heading}>Edit your profile</h2>
      <fieldset className={styles.personal}>
        {
          personalDetails.map(({ name, title }) => (
            <div key={crypto.randomUUID()} className={styles.item}>
              <label className={styles.label} htmlFor={name}>{title}</label>
              <TextField 
                fieldType="input"
                inputType="text" 
                name={name}
                placeholder={title}
                id={name}
              />
            </div>
          ))
        }
      </fieldset>
      <fieldset className={styles.password}>
        <legend className={styles.legend}>Password changes</legend>
        <TextField 
          fieldType="input"
          inputType="text" 
          name={"current-password"}
          placeholder={"Current password"}
          id={"current-password"}
        />
        <TextField 
          fieldType="input"
          inputType="text" 
          name={"new-password"}
          placeholder={"New password"}
          id={"new-password"}
        />
        <TextField 
          fieldType="input"
          inputType="text" 
          name={"confirm-password"}
          placeholder={"Confirm password"}
          id={"confirm-password"}
        />
      </fieldset>
      <div className={styles.actions}>
        <CustomLink title="Cancel" href={HOME_ROUTE} />
        <Button type="button">Save changes</Button>
      </div>
    </form>
  )
}