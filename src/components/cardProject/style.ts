import styled from 'styled-components'


export const Container = styled.div`

    width: 23%;
    height: fit-content;
    background: linear-gradient(216.71deg, #241010 13.51%, rgba(45, 29, 29, 0) 39.88%, rgba(34, 27, 27, 0) 50.99%, #241010 80.13%);
    box-shadow: 0px 18px 14px -5px #000;

    color: #fff;

    padding: 20px;

    border-radius: 10px;
    
    @media (max-width: 600px) {
        width:80%;
        padding: 10px;
        margin-top: 40px;
    }

    > header img {
        width: 100%;
        border-radius: 15px;
        border-bottom-left-radius: 0px;
        margin-bottom: -9px;
    }

    > header span {
        background-color: #939393;
        width: fit-content;

        color: #241010;
        font-weight: 700;
        font-style: italic;

        font-size: 11px;

        padding: 05px 10px;
        border-radius: 10px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }

    > main h2 {
        margin-top: 30px;
        font-size: 15px;
    }

    > main p {
        margin: 8px 0px;
        font-size: 13px;
        overflow: hidden; 
        text-overflow: ellipsis; 
        display: -webkit-box; 
        -webkit-box-orient: vertical; 
        -webkit-line-clamp: 3;
    }

    > footer {
        display: flex;
        justify-content: space-between;
        color: #fff !important;
    }
    
    > footer svg {
        margin-right: 3px;
    }
    
    > footer a {
        text-decoration: none;
        color: #fff;
        font-size: 12px;

        background: linear-gradient(101.52deg, #711212 -0.77%, #BE4747 122.06%);
        border-radius: 55px;

        padding: 8px 12px;
        margin-top: 12px;

        transition: all ease-in-out 0.3s;

        &:hover {
            opacity: 0.7;
            transform:translateY(-2px);
        }

        
    }

`