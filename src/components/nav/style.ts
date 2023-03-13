import styled from 'styled-components'





export const Container = styled.div`
    height: 60px;
    max-width: 100vw;
    background-color: transparent;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding:0px 40px;

    
    ul {
        list-style: none;
        display: flex;
    }

    ul li a{
        margin:0px 9px;
        text-decoration: none;
        color: #fff;
        transition: all 0.4s ease-in-out ; 
    }

    ul li a:hover{
        cursor: pointer;
        opacity: 0.65;
        transform: translateY(-3px);
        cursor: pointer;
        color: #ff6663;
    }

`

export const LogoContainer = styled.div`

    > h2 {
        font-size: 22px;
        font-weight: 400;
        letter-spacing: -1px;
        font-style: italic;
    }

`

export const ItemsContainer = styled.div`

    display: flex;
    align-items: center;

    
    @media (max-width:600px) {
        display: none;
    }
    
`

export const SocialContainer = styled.div`


`

export const MenuHamburguerContainer = styled.div`

    display: none;
    transition: all 0.3s ease-in-out;

    svg {
        margin-top: 7px;
        font-size: 30px;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.7;
        color: #ff6663;
    }
    @media (max-width:600px) {
        display: block;
    }

`