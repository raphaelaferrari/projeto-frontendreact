import styled from "styled-components"

export const SectionProdutos = styled.section`
    background-image: url("https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/11/via-lactea.jpg");
    background-size: 100% 100%;
    background-color: black;
    min-height: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px 0;
    
`


export const Ul = styled.ul`

    width: 300px;
    margin: 10px;
    color: white;
    border: 1px solid #343a40;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const Li = styled.li`

    list-style: none;    
    margin: 10px;
`

export const Img = styled.img`

    @media screen and (max-device-width: 480px) {
        width: 50vw;
        height: 38vh;
    }

    @media screen and (min-width: 481px) {
        width: 30vw;
        height: 38vh;
    }

    @media screen and (min-width: 881px) {
        width: 20vw;
        height: 38vh;
    }
`

export const Button = styled.button`
    min-width: 15vw;
    height: 8vh;
    border: 2px solid #343a40;
    border-radius: 10px;
    
    :hover{
        background-color: black;
        color: white;
        transition: 0.5s;
    }
`