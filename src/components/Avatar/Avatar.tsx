import React, {useEffect, useRef} from 'react';
import styles from './Avatar.module.scss';

interface AvatarProps {
    name: string
    color: string
}

const Avatar: React.FC<AvatarProps> = ({name, color}) => {
    const ref = useRef(null)

    useEffect(() => {
        ref.current!.style.backgroundColor = color
    }, [])

    const userName = name.split(' ').map((n) => n[0]).join('')

    return (
        <div ref={ref} className={styles.avatar}>
            <span>{userName}</span>
        </div>
    )
}

export default Avatar;