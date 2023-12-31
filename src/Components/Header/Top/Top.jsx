import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../Layout/Container/Container";
import { ReactComponent as LikeSVG } from '../../../assets/heart.svg';
import { ReactComponent as SearchSVG } from '../../../assets/search.svg';
import { ReactComponent as CartSVG } from '../../../assets/cart.svg';
import { toggleSearch } from "../../../features/searchSlice";
import cn from 'classnames'
import s from './Top.module.scss'
import logo from '../../../assets/logo.svg'

export const Top = () => {
    const {countItems} = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const handleOpenSearch = () => {
        dispatch(toggleSearch());
    }
    return ( 
        <div className={s.top}>
            <Container className={s.topContainer}>
                <a className={cn(s.topLink, s.Phone)} href="tel:89304902620">8 930 490 26 20</a>
                <NavLink className={s.topLogo} to='/'>
                    <img src={logo} alt="Логотип Inspired"/>
                </NavLink>
                <div className={s.topNavigation}>
                    <ul className={s.topNavList}>
                        <li className={s.topNavItem}>
                            <button className={s.topLink} onClick={handleOpenSearch}>
                                <SearchSVG/>
                            </button>
                        </li>
                        <li className={s.topNavItem}>
                            <NavLink className={s.topLink} to='/cart'>
                                <CartSVG/>
                                <span className={s.topLinkCount}>{countItems}</span>
                            </NavLink>
                        </li>
                        <li className={s.topNavItem}>
                            <NavLink className={cn(s.topLink, s.like)} to='/favorite'>
                                <LikeSVG/>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
} 