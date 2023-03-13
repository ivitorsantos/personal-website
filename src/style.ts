import styled from "styled-components"

export const HeroSection = styled.section`

    min-height: 90vh;
    background: linear-gradient(180deg, #262626 0%, #030303 64.06%);    
    color: #fff;


    > .content {
        display: flex;
        justify-content: space-between;
        padding: 80px 90px;
        align-items: center;

    }

    .text-container {
        width: 500px;
        
        b {
            color: #BE4747;
        }

        > h1 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            line-height: 25px;
            font-size: 25px;
        }

        > p {
            margin-top: 30px;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            margin-bottom: 35px;
        }

        > a {
            text-decoration: none;
            font-size: 13px;
            font-style: italic;
            color: #fff;

            padding: 10px 15px;
            
            background: linear-gradient(101.52deg, #711212 -0.77%, #BE4747 122.06%);
            border-radius: 55px;
        
            transition: ease-in-out all 0.3s;

            &:hover {
                opacity: 0.8;
            }
        }
    
    }

    .person {
         margin: 0 auto;
    }

    .person img {
        width: 450px;
    }

    @media (max-width: 620px) {

        .content {
            display: block;
            padding: 90px 30px 30px;
        }

        .person img {
            margin-top: 50px;
            width: 340px;
        }

        .text-container {
            width: 100%;
            
            h1 {
                font-size: 25px;
            }
        }

    }
`

export const ProjectionSection = styled.section`

    background: linear-gradient(180deg, #030303  0%, #101212 64.06%);
    padding: 80px 100px 40px;

    > h2 {
        color: #fff;
    }

    >h2::after {
        content: '';
        display: block;
        width: 70px;
        height: 5px;
        background: linear-gradient(101.52deg, #711212 -0.77%, #BE4747 122.06%);
        border-radius: 55px;
    }


    .projects {
        margin-top: 45px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        
    }

    @media (max-width: 620px) {
        padding: 40px 30px;
        text-align: center;

        >h2::after {
            margin:auto;
        }

        .projects {
            justify-content: center;
        }
    }

`

export const SkillsSection = styled.section`

    background: linear-gradient(180deg, #101212 0%, #030303 64.06%);    
    padding: 80px 100px 30px;
    text-align: center;
    
    > h2 {
        color: #fff;
    }

    >h2::after {
        content: '';
        display: block;
        margin: auto;
        margin-bottom: 30px;
        width: 70px;
        height: 5px;
        background: linear-gradient(101.52deg, #711212 -0.77%, #BE4747 122.06%);
        border-radius: 55px;
    }
    
    .skills {
        color: #fff;
        display:flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }


    @media (max-width:620px) {
        padding: 20px 10px;
    }
`

export const AboutSection = styled.div`

    background: linear-gradient(180deg, #030303  0%, #101212 64.06%);
    padding: 30px 100px 40px;
    color: #fff;

    display: flex;
    align-items: center;

    h2::after {
        content: '';
        display: block;
        width: 70px;
        height: 5px;
        background: linear-gradient(101.52deg, #711212 -0.77%, #BE4747 122.06%);
        border-radius: 55px;
    }
    
    .text {
        margin-left: 50px;
        width: 60%;

        > h2 {
            font-size: 26px;
            margin-bottom: 15px;
        }

        > p {
            font-size: 14px;
        }
    }

    .me {
        width: 40%;

        > img {
            width: 100%;
        }
    }

    @media (max-width:620px) {
        padding: 30px 50px 40px;
        flex-direction: column;

        .text {
            margin-left:3px;
            width: 100%;
        }

        .text h2 {
            font-size: 20px;
            text-align: center;
            margin: 30px 0px;
        }

        .text h2::after {
            margin: auto;
        }

        .text p {
            font-size: 15px;
        }

        .me {
            width: 100%;
        }
    }

`


export const ContactSection = styled.div`

    background: linear-gradient(180deg, #101212  0%, #030503 64.06%);
    padding: 80px 100px 130px; 
    color: #fff;
    text-align: center;

    h2::after {
        content: '';
        display: block;
        width: 110px;
        height: 5px;
        margin: auto;
        background: linear-gradient(101.52deg, #711212 -0.77%, #BE4747 122.06%);
        border-radius: 55px;
    }

    .social-media {
        margin-top: 65px;
        display: flex;
        justify-content: center;

        a {
            text-decoration: none;
            color: #fff;
            transition: all ease-in-out 0.2s;

            span {
                display: block;
                margin: 0px 50px;
            }

            &:hover {
                opacity: 0.4;
            }
        }
    }


    .form-content {
        border: 1px solid #333;
        border-radius: 9px;

        width: 500px;
        height: fit-content;

        margin:80px auto;
        padding: 60px;
        
        text-align: left;

        label{
            display: block;
            font-size: 13px;
            margin-top: 5px;
        }

        select, input {
            width: 100%;
            height: 30px;
            padding: 3px;
            border: none;
            border: 1px solid #f3f3f3;
            border-radius: 5px;
            background: transparent;
            color:#fff;
        }

        textarea {
            width: 100%;
            height: 100px;
            border-radius: 5px;
            background: transparent;
            border: 1px solid #f3f3f3;
            color: #fff;
            padding: 3px;

        }

        button {
            width: 100%;
            height: 30px;
            background: linear-gradient(101.52deg, #711212 -0.77%, #BE4747 122.06%);
            color: #fff;
            border: none;
            border-radius: 5px;

            &:hover {
                transition: all ease-in-out 0.3s;
                cursor: pointer;
                opacity: 0.8;
            }
        }

        option {
            background-color: #333;
        }
    }


    @media (max-width:620px) {
        padding: 20px 10px;
        
        .social-media {
            flex-wrap: wrap;
            margin-top: 25px;

            
            div {
                margin-top: 15px;
            }
        }
        .form-content {
            width: 90%;
            padding: 15px;
            margin-top: 25px;
        }

    }

`