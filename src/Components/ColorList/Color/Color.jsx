import { useRef } from 'react'
import s from './Color.module.scss'


export const Color = ({color}) => {
    const colorRef = useRef();

    return (
        <li className={s.color} ref={colorRef} style={{backgroundColor: '--data-color'}}>
            {color}
        </li>
    )
}