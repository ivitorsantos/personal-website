import React from "react"
import {useContext} from "react"
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import MyContextMenu from "../../context/myContext"
import { Container, LogoContainer, ItemsContainer, SocialContainer, MenuHamburguerContainer} from "./style"


const Nav: React.FC= () => {
    
    const {menuIsVisible, setMenuIsVisible}:any = useContext(MyContextMenu)

    return (
        <Container>
            <LogoContainer>
                <h2>{`<Vitor Santos />`}</h2>
            </LogoContainer>
            <ItemsContainer>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#projetos">projetos</a></li>
                    <li><a href="#habilidades">habilidades</a></li>
                    <li><a href="#contato">contato</a></li>
                </ul>
                <SocialContainer>
                    <ul>
                        <li><a href="https://www.instagram.com/ovitor.santos/" target={'_blanc'}> <AiFillInstagram /></a></li>
                        <li><a href="https://www.linkedin.com/in/ivitorsantos/" target={'_blanc'}> <AiFillLinkedin /></a></li>
                        <li><a href="https://github.com/ivitorsantos" target={'_blanc'}> <AiFillGithub /></a></li>
                    </ul>
                </SocialContainer>
            </ItemsContainer>
            <MenuHamburguerContainer>
                <RxHamburgerMenu onClick={() => setMenuIsVisible(true)}/>
            </MenuHamburguerContainer>
        </Container>
    )


}


export default Nav