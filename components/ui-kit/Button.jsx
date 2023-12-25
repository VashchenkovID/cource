import React from 'react';
import styles from './button.module.css'

const Button = ({label, href}) => {
    return (
        <button className={styles.button}>
            <a className={styles.buttonText} href={href || '#'}>{label}</a>
        </button>
    );
};

export default Button;
