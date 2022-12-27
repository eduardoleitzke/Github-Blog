import { ProfileCardContainer, ProfileCardAvatar, ProfileCardInfo } from "./style";
import { ProfileCardContent } from "./style";
import {ArrowSquareOut, GithubLogo, Buildings, User } from 'phosphor-react'
import avatar from '../../../../assets/profileCard/avatar.png'
export function ProfileCard(){
    return(
        <ProfileCardContainer>
            <ProfileCardAvatar src={avatar} alt="" />
            <ProfileCardContent>
                <div>
                    <header>
                        <h1> Eduardo Leitzke Pinto</h1>
                        <a href="https://github.com">GITHUB<ArrowSquareOut size={20}/></a>
                    </header>
                    <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                </div>
                <ProfileCardInfo>
                    <li><GithubLogo size={20}/> Eduardo Pinto</li>
                    <li><Buildings size={20}/>Empresa</li>
                    <li><User size={20}/>Seguidores</li>
                </ProfileCardInfo>
            </ProfileCardContent>             
        </ProfileCardContainer>
    )
}