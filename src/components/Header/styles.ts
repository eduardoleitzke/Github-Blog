import styled, { css } from "styled-components";

interface imageFilter {
    variant?: 'logo'
}

export const HeaderContainer = styled.header`
    width: 100%;
    height: 18.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #1562AF14;
   
  
`

export const HeaderContainerImg = styled.img<imageFilter>`
    filter: drop-shadow(0rem 0rem 4rem #3294F8);
    ${props => props.variant === 'logo' &&(
        css`
          
            margin-bottom: 4rem;
        `
    )
}
    
`