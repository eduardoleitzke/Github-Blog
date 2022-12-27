import styled from "styled-components";

export const HomeContainer = styled.div`
    margin-bottom: 14rem;
`



export const HomePostsContent = styled.main`
width: 60%;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 2rem;
`

export const PostCard = styled.div`
    background: ${props => props.theme.post};
    height: 16.25rem;
    border-radius: 10px;
    padding: 2.2rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    
    overflow: hidden;
    header{
        width: 100%;
        display: flex;
        justify-content: space-between;

        p{
            font-size: 1.25rem;
            color: ${props => props.theme.title};
            width: 80%;
        }
        span{
            font-size: 0.875rem;
            color: ${props => props.theme.span};
        }
    }

    div{
        color: ${props => props.theme.text};
        display: -webkit-box;
        -webkit-line-clamp: 5; /** número de linhas que você quer exibir */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

   

`