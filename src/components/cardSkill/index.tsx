import React from "react";
import { DiHtml5, DiCss3, DiJavascript, DiGitBranch, DiMongodb, DiNodejsSmall } from "react-icons/di"
import { SiTypescript, SiReact } from 'react-icons/si'
import { AiOutlineConsoleSql } from "react-icons/ai"
import { Container } from './style'


interface ICardSkillProps {
    title: string
}


const CardSkill: React.FC<ICardSkillProps> = ({ title }) => {

    const icon = () => {
        switch (title) {
            case 'Html':
                return <DiHtml5 />
            case 'Css':
                return <DiCss3 />
            case 'Javascript':
                return <DiJavascript />
            case 'Typescript':
                return <SiTypescript />
            case 'MongoDB':
                return <DiMongodb />
            case 'SQL':
                return <AiOutlineConsoleSql />
            case 'React':
                return <SiReact />
            case 'React Native':
                return <SiReact />
            case 'Node':
                return <DiNodejsSmall />
            case 'Git':
                return <DiGitBranch />
            default:
                break;
        }

    }

    return (
        <Container>
            <div className="icon">
                {icon()}
            </div>
            <div className="title">
                <h3>{title}</h3>
            </div>
        </Container>
    )
}

export default CardSkill