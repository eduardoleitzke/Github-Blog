import styled from "styled-components";

export const SearchForm = styled.form`
    width: 60%;
    margin: 12rem auto 3.75rem auto;
    height: 4rem;
   

    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        p{
            color: ${props => props.theme.subtitle};
            font-size: 1.2rem;
            font-weight: bold;
        }
        span{
            color: ${props => props.theme.span};
        }
        
   
    }
    input{
        height: 3rem;
        width: 100%;
        border: solid 1px ${props => props.theme.border};
        border-radius: 6px;
        background: transparent;
        padding: 1rem;
        color: ${props => props.theme.label};

        &::placeholder{
            color: ${props => props.theme.label};
        }
        }
`