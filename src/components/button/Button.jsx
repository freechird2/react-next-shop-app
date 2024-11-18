'use client'

import classNames from 'classnames'
import styles from './Button.module.scss'

const Button = ({ type = 'button', secondary = false, bgColor, fgColor, width, ...restProps }) => {
    const composeClasses = classNames(styles.button, secondary ? styles.secondary : styles.primary)

    const style = {
        backgroundColor: bgColor || '',
        color: fgColor || '',
        width: width || '',
    }

    return (
        <button
            type={type}
            style={style}
            className={composeClasses}
            {...restProps}
        />
    )
}

export default Button