import cn from 'classnames';
import s from './FooterContainer.module.scss'

export const FooterContainer = ({className, children}) => (
    <div className={cn(s.footerContainer, className)}>{children}</div>
)