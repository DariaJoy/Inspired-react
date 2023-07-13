import { NavLink } from 'react-router-dom';
import { ColorList } from '../ColorList/ColorList'
import { API_URL } from '../../const';
import { ReactComponent as Like } from '../../assets/heart.svg';
import s from './Product.module.scss';

export const Product = ({id, pic, title, price, colors, description}) => {
    return (
        <article className={s.products}>
            <NavLink to={`/product/${id}`} className={s.link}>
                <img className={s.image} src={`${API_URL}/${pic}`} alt={`${title} ${description}`} />
                <h3 className={s.title}>{title}</h3>
                <div className={s.row}>
                    <p className={s.price}>руб {price}</p>
                    <button className={s.favorite}>
                        <Like/>
                    </button>
                </div>
            </NavLink>
            <ColorList colors={colors}/>
        </article>
    )
}