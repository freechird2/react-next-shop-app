'use client'

import LogoPath from '@assets/colorful.svg'
import Button from '@components/button/Button'
import Divider from '@components/divider/Divider'
import Input from '@components/input/Input'
import Loader from '@components/loader/Loader'
import { auth } from '@fb/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'
import styles from '../login/Auth.module.scss'

const RegisterClient = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const registerUser = (e) => {
        e.preventDefault()

        if (password !== cPassword) {
            toast.error('비밀번호가 일치하지 않습니다.')
            return
        }

        setIsLoading(true)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                toast.success('등록 성공...')
                router.push('/login')
            })
            .catch((error) => {
                toast.error(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <>
            {isLoading && <Loader />}
            <section className={styles.page}>
                <div className={styles.container}>
                    <h1 className={styles.logo}>
                        <Image
                            priority
                            src={LogoPath}
                            alt='logo'
                        />
                    </h1>
                    <form
                        onSubmit={registerUser}
                        className={styles.form}>
                        {/* Input */}
                        <Input
                            email
                            icon='letter'
                            id='email'
                            label='이메일'
                            placeholder='아이디(이메일)'
                            className={styles.control}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            password
                            icon='lock'
                            id='password'
                            label='비밀번호'
                            placeholder='비밀번호'
                            className={styles.control}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Input
                            password
                            icon='lock'
                            id='password'
                            label='비밀번호 확인'
                            placeholder='비밀번호 확인'
                            className={styles.control}
                            value={cPassword}
                            onChange={(e) => setCPassword(e.target.value)}
                        />
                        <div className={styles.buttonGroup}>
                            {/* Button */}
                            <Button
                                type='submit'
                                width='100%'>
                                회원가입
                            </Button>
                            <Divider />
                            <Button
                                width='100%'
                                secondary>
                                <Link
                                    href={'/login'}
                                    style={{ width: '100%', height: '100%' }}>
                                    로그인
                                </Link>
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default RegisterClient
