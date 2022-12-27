import logo from '../../assets/logo.svg'
import imageRigth from '../../assets/header/rigthHeaderImage.svg'
import imageLeft from '../../assets/header/leftHeaderImage.svg'
import { HeaderContainer } from './styles'
import { HeaderContainerImg } from './styles'
export function Header(){
    return (
        <HeaderContainer>  
            <HeaderContainerImg src={imageLeft} alt=""  />
            <HeaderContainerImg src={logo} alt="" variant='logo' />
            <HeaderContainerImg src={imageRigth} alt="" />
        </HeaderContainer>
    )
}