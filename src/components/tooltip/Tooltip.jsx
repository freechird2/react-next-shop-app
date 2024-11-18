'use client'

import classNames from 'classnames'
import styles from './Tooltip.module.scss'

const Tooltip = ({ top = 0, left = 0, bottom = 0, right = 0, color = '', bgColor = '', orientation = 'top', message, ...restProps }) => {
    const style = {
        top,
        right,
        bottom,
        left,
        color,
        backgroundColor: bgColor,
    }

    const setOrientaionClass = (type) => {
        switch (type) {
            case 'top':
                return styles.orientaionTop
            case 'right':
                return styles.orientaionRight
            case 'left':
                return styles.orientaionLeft
            case 'bottom':
                return styles.orientaionBottom
            default:
                break
        }
    }

    return (
        <span
            role='tooltip'
            style={style}
            className={classNames(styles.tooltip, setOrientaionClass(orientation))}>
            {message}
        </span>
    )
}

export default Tooltip
