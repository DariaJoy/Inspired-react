import s from './Titel.module.scss'
import cn from 'classnames'

export const Titel = (props) => (
    <h2 className={cn(s.title, props.className)}>{props.text}</h2>
)