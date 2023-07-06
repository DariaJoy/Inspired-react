import { Container } from "../Layout/Container/Container";
import { Category } from "./Category/Category";
import { Contacts } from "./Contacts/Contacts";
import { Copyright } from "./Copyright/Copyright";
import { Development } from "./Development/Development";
import { Social } from "./Social/Social";
import s from './Footer.module.scss'

export const Footer = ({list}) => (
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