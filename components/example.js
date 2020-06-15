import React from 'react'

import styles from './example.module.css'

function Example({ text }) {
  return <i className={styles.text}>{text}</i>
}

export default Example
