import type { HTMLInputTypeAttribute } from 'react';
import styles from './text-field.module.scss';

type TextFieldProps = {
  fieldType: 'textarea' | 'input',
  id?: string,
  name?: string,
  inputType?: HTMLInputTypeAttribute,
  placeholder?: string,
  required?: boolean,
}

export default function TextField({ fieldType, inputType, ...props }: TextFieldProps) {
  return (
    fieldType === 'input' ?
      <input autoComplete="on" type={inputType} className={styles.field} {...props} /> :
      <textarea autoComplete='on' className={`${styles.field} ${styles.textarea}`} {...props}></textarea>
  )
}