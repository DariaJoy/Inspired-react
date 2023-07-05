import { Container } from "../Layout/Container/Container";
import { FooterContainer } from "../Layout/FooterContainer/FooterContainer";
import { Category } from "./Category/Category";
import { Contacts } from "./Contacts/Contacts";
import { Copyright } from "./Copyright/Copyright";
import { Development } from "./Development/Development";
import { Social } from "./Social/Social";

export const Footer = () => (
    <footer>
        <Container>
            <FooterContainer>
                <Category/>
                <Social/>
                <Contacts/>
                <Copyright/>
                <Development/>
            </FooterContainer>    
        </Container>
        
    </footer>
)