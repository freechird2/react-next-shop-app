'use client'

import Image from 'next/image'
import hidePath from './images/shape=hide.svg'
import letterPath from './images/shape=letter.svg'
import lockPath from './images/shape=lock.svg'
import showPath from './images/shape=show.svg'

const Icon = ({ type, alt = '', ...restProp }) => {
    let src = ''

    switch (type) {
        case 'letter':
            src = letterPath
            break
        case 'lock':
            src = lockPath
            break
        case 'show':
            src = showPath
            break
        case 'hide':
            src = hidePath
            break
        default:
            throw new Error('지원하는 아이콘 타입이 존재하지 않습니다.')
    }

    return (
        <Image
            src={src}
            alt={alt}
            {...restProp}
        />
    )
}

export default Icon
