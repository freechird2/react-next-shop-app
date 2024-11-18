'use client'
import { ThreeDots } from 'react-loader-spinner'
import styles from './Loader.module.scss'

const Loader = ({ basic }) => {
    if (basic) {
        return (
            <div className={styles.basicWrapper}>
                <ThreeDots
                    color='grey'
                    height='30'
                    width='30'
                    radius='9'
                    animationDuration='0.75'
                    visible={true}
                />
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.loader}>
                <ThreeDots
                    color='grey'
                    height='30'
                    width='30'
                    radius='9'
                    animationDuration='0.75'
                    visible={true}
                />
            </div>
        </div>
    )
}

export default Loader
