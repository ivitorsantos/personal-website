import styled from "styled-components";

export const Container = styled.div`

    margin: 10px 30px;

    height: 50px;
    width: 150px;

    border-radius: 5px;

    background: #333;

    display: flex;
    align-items:center;
    
    
    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: -25px;
        font-size: 22px;
        height: 50px;
        width: 50px;
        background-color: #fff;
        border-radius: 50%;
        color: #333;
    }
    
    .title {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .title h3{
        font-size: 12px;
    }
 
    @media (max-width:600px) {
        width: 120px;

        .title h3 {
            font-size: 10px;
            
        }
    }

`

