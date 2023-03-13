import React from "react"
import { Container } from './style'
import {GrLink, GrView} from 'react-icons/gr'

interface ICardProjectProps {
    type:string;
    name:string;
    description:string;
    image:string;
    reading: string;
    demo:string
}

const CardProject: React.FC<ICardProjectProps> = ({type, name, description, image, reading, demo}) => {
        return (
            <Container>
                <header>
                    <img src={image} alt="" />
                    <span>{type}</span>
                </header>
                <main>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </main>
                <footer>
                    <a href={reading} target={"_blank"}><GrLink/>Continuar lendo</a>
                    <a href={demo} target={"_blank"}><GrView/> Demo</a>
                </footer>
            </Container>
    )
}


export default CardProject