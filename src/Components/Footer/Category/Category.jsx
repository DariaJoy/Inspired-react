import { Titel } from "../Titel/Titel"
import s from './Category.module.scss'

export const Category = () => (
    <div className={s.category}>
        <Titel text='Каталог'/>
            <ul className={s.categoryList}>
                <li className={s.categoryTitle}><a className={s.link} href="">Женщины</a>
                    <ul className={s.categorSublist}>
                        <li><a className={s.link} href="">Бюстгальтеры</a></li>
                        <li><a className={s.link} href="">Трусы</a></li>
                        <li><a className={s.link} href="">Носки</a></li>
                        <li><a className={s.link} href="">Халаты</a></li>
                        <li><a className={s.link} href="">Термобелье</a></li>
                        <li><a className={s.link} href="">Пижамы</a></li>
                    </ul>
                </li>
                <li className={s.categoryTitle}><a className={s.link} href="">Мужчины</a>
                    <ul>
                        <li><a className={s.link} href="">Трусы</a></li>
                        <li><a className={s.link} href="">Носки</a></li>
                        <li><a className={s.link} href="">Халаты</a></li>
                        <li><a className={s.link} href="">Термобелье</a></li>
                    </ul>            
                </li>
            </ul>
        </div>           
)