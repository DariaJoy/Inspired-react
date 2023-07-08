import { NavLink } from "react-router-dom"
import { Titel } from "../Titel/Titel"
import s from './Category.module.scss'
import { useSelector } from 'react-redux';

export const Category = () => {
    const {activeGender, genderList, categories} = useSelector(state => state.navigation);

    return (
        <div className={s.category}>
            <Titel className={s.categoryTitle} text='Каталог'/>
                <ul className={s.categoryList}>
                    {genderList.map(gender => (
                        <li key={gender} className={s.categoryItem}>
                            <h3 className={s.categorSubtitel}>
                                <NavLink className={s.link} to={gender}>{categories[gender].title}</NavLink>
                            </h3>
                            <ul className={s.categorySublist}>
                                {categories[activeGender]?.list?.map((item) => (
                                    <li key={item.slug}>
                                        <NavLink className={s.link} to={`${activeGender}/${item.slug}`}>
                                            {item.title}
                                        </NavLink>
                                    </li>  
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>           
        )
} 