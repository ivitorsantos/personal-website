import React, { useContext, useEffect} from 'react'

import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

import { IoMdClose } from 'react-icons/io'
import MyContextMenu from '../../context/myContext'
import { Container, ItemsContainer, SocialContainer } from './style'

const NavMobile: React.FC = () => {

    const { menuIsVisible, setMenuIsVisible }: any = useContext(MyContextMenu)

    const handleMenuClick = (option:string) => {

        switch (option) {
            case 'inicio':

                break;
        
            default:
                break;
        }
    }


    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
    }, [menuIsVisible])


    return (
        <Container isVisible={menuIsVisible}>
            <IoMdClose id='closeButton' onClick={() => setMenuIsVisible(false)} />
            <ItemsContainer>
                <ul>
                    <li><a href='#inicio' onClick={() => setMenuIsVisible(false)}>Inicio</a></li>
                    <li><a href='#projetos' onClick={() => setMenuIsVisible(false)}>projetos</a></li>
                    <li><a href='#habilidades' onClick={() => setMenuIsVisible(false)}>habilidades</a></li>
                    <li><a href='#contato' onClick={() => setMenuIsVisible(false)}>contato</a></li>
                </ul>
                <SocialContainer>
                    <ul>
                        <li><a href="https://www.instagram.com/ovitor.santos/" target={'_blanc'}><AiFillInstagram /></a></li>
                        <li><a href='https://www.linkedin.com/in/ivitorsantos/#' target={'_blanc'}><AiFillLinkedin /></a></li>
                        <li><a href='https://github.com/ivitorsantos' target={'_blanc'}><AiFillGithub /></a></li>
                    </ul>
                </SocialContainer>
            </ItemsContainer>
        </Container>
    )

}

export default NavMobile