import { NavLink } from 'react-router-dom'
import s from './Category.module.scss'
import cn from 'classnames'

export const Category = ({list}) => (
    <ul>
        {list.map(item => (
            <li key={item.link} className={s.category}>
                    {item.categories.map(category => (
                        <NavLink key={category.link} className={({isActive}) => cn(s.link, isActive && s.linkActive)} to={`${item.link}/${category.link}`}>
                            {category.title}
                        </NavLink>
                    ))}
            </li>
        ))}
    </ul>
)