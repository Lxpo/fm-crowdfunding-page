import react,{useState} from 'react'
import * as styled from './style'

import SVGHamburger from '../ui/Icons/SVGHamburger'

const Header = () => {

    const [iSOpen, setiSOpen] = useState(false)

    //You now will be doing onclick functionalities for the naveMenuMobile

    return(
            <styled.Container>
                <styled.Icon>crowdfund</styled.Icon>
                <styled.NavMenu>
                    <styled.NavItem>About</styled.NavItem>
                    <styled.NavItem>Discover</styled.NavItem>
                    <styled.NavItem>Get Started</styled.NavItem>
                </styled.NavMenu>
                <styled.CollapsedMenu>
                    <SVGHamburger />
                </styled.CollapsedMenu>
                <styled.NaveMenuMobileWrapper>
                    <styled.NavMenuMobile>
                        <styled.NavMenuMobileItem>About</styled.NavMenuMobileItem>
                        <styled.NavMenuMobileItem>Discover</styled.NavMenuMobileItem>
                        <styled.NavMenuMobileItem>Get Started</styled.NavMenuMobileItem>
                    </styled.NavMenuMobile>
                </styled.NaveMenuMobileWrapper>
            </styled.Container>
    )
}

export default Header