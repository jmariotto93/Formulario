import React from 'react'
import styles from './Button.module.css'

const Button = ({onCLick}) => {
  return (
    <button onClick={onCLick} className={styles.button}>Próxima</button>
  )
}

export default Button