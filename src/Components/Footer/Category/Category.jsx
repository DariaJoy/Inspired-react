import { NavLink } from "react-router-dom"
import { Titel } from "../Titel/Titel"
import s from './Category.module.scss'

export const Category = ({list}) => (
    <div className={s.category}>
        <Titel className={s.categoryTitle} text='Каталог'/>
            <ul className={s.categoryList}>
                {list.map(item => (
                    <li key={item.link} className={s.categoryItem}>
                        <h3 className={s.categorSubtitel}>
                            <NavLink className={s.link} to={item.link}>{item.title}</NavLink>
                        </h3>
                        <ul className={s.categorySublist}>
                            {item.categories.map(category => (
                                <li key={category.link}>
                                    <NavLink className={s.link} to={`${item.link}/${category.link}`}>
                                        {category.title}
                                    </NavLink>
                                </li>  
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>           
)