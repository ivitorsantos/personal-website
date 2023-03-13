import styled from "styled-components"


interface iContainerProps {
    isVisible: boolean;
}

export const Container = styled.div<iContainerProps>`

    position: absolute;
    z-index: 5;

    width: 100%;
    height: 100vh;

    display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;

    color: #fff;
    background: rgba(0,0,0,0.85);
    background: linear-gradient(212deg, rgba(0,0,0,0.8) 0%, rgba(34,18,18,1) 50%, rgba(59,7,7,0.5) 100%);
    backdrop-filter: blur(3px);



    > #closeButton {
        position: absolute;

        top: 1rem;
        right: 1rem;

        font-size: 30px;
        color: #fff;

        transition: all 0.3s ease-in-out;

        &:hover {
            cursor: pointer;
            opacity: 0.6;
            transform: rotate(25deg);
            font-size: 33px;
        }
    }

    ul {
        list-style: none;
    }

    ul li a {
        text-decoration: none;
        color: #fff;
    }

    ul li a:hover {
        opacity: 0.65;
        transform: translateY(-3px);
        cursor: pointer;
        color: #ff6663;
    }
`

export const ItemsContainer = styled.div`

    > ul li a{
        margin-bottom: 18px;
        transition: all 0.2s ease-in-out;

        &:hover {

        }
    }

`
export const SocialContainer = styled.div`
   
   margin-top: 20px;

   > ul {
        display: flex;
        justify-items: center;
        justify-content: space-around;
   
        > li a{
            color: #fff;
            font-size: 25px;
            transition: all 0.2s ease-in-out;
        }
   }
`