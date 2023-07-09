import { NavLink } from "react-router-dom"
import { useSelector } from 'react-redux';
import { Titel } from "../Titel/Titel"
import s from './Category.module.scss'


export const Category = () => {

    const {genderList, categories} = useSelector(state => state.navigation);

    return (
        <div className={s.category}>
            <Titel className={s.categoryTitle} text='Каталог'/>
                <ul className={s.categoryList}>
                    {genderList.map(gender => (
                        <li key={gender} className={s.categoryItem}>
                            <h3 className={s.categorSubtitel}>
                                <NavLink className={s.link} to={gender}>
                                    {categories[gender].title}
                                </NavLink>
                            </h3>
                            <ul className={s.categorySublist}>
                                {categories[gender]?.list?.map((category) => (
                                    <li key={category.slug}>
                                        <NavLink className={s.link} to={`${gender}/${category.slug}`}>
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
} 