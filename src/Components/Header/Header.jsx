import { Navigation } from "./Navigation/Navigation";
import { Top } from "./Top/Top";
import { Search } from "../Search/Search";
import s from './Header.module.scss'

export const Header = () => (
    <header className={s.header}>
        <Top/>
        <Search/>
        <Navigation/>
    </header>
);