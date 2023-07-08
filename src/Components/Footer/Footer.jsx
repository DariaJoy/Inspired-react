import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setActiveGender } from "../../features/navigationSlice.js";
import { useDispatch } from "react-redux";
import { Container } from "../Layout/Container/Container";
import { Category } from "./Category/Category";
import { Contacts } from "./Contacts/Contacts";
import { Copyright } from "./Copyright/Copyright";
import { Development } from "./Development/Development";
import { Social } from "./Social/Social";
import s from './Footer.module.scss'

export const Footer = ({list}) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const gender = location.pathname.split('/')[1] || 'women';

    useEffect(() => {        
        dispatch(setActiveGender(gender))
    }, [gender, dispatch])

    return ( 
    <footer>
        <Container>
            <div className={s.container}>
                <Category list={list}/>
                <Social/>
                <Contacts/>
                <Copyright/>
                <Development/>
            </div>                                
        </Container>    
    </footer>
)
}

