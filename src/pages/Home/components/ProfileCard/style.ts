import styled from "styled-components";

export const ProfileCardContainer = styled.div`
    width: 60%;
    height: 13.25rem;
    margin: -5rem auto;
    border-radius: 10px;
    background: ${props => props.theme.input};
    filter : drop-shadow(0 -1rem 1rem ${props => props.theme.background});
    display: flex;
    padding: 2rem 2.5rem;
    gap: 1.5rem;
  
`
    export const ProfileCardAvatar = styled.img`
         height: 9.25rem;
         border-radius: 10px;
    `

   export const ProfileCardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    color:${props => props.theme.text} ;

    div{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        header{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 2rem;
        }

        h1{
            color:${props => props.theme.title} ;
            font-weight: bold;
            font-size:1.5rem ;
        }
        a{
            text-decoration: none;
            color: ${props => props.theme["brand-blue"]};
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
        
        }
    }
   
   `
   
    export const ProfileCardInfo = styled.ul`
        display: flex;
        list-style: none;
        gap: 1.5rem;

        li{
            display: flex;
            gap: 0.5rem;
        }
    `
   