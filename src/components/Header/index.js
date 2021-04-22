import react,{useState} from 'react'
import * as styled from './style'

import SVGHamburger from '../ui/Icons/SVGHamburger'
import SVGClose from '../ui/Icons/SVGClose'

const Header = ({isMobileMenuActive,onMobileMenuClick}) => {

    console.log('function', onMobileMenuClick)
    console.log('variable', isMobileMenuActive)

    const [iSOpen, setiSOpen] = useState(false)

    //You were gonna set isMobileMenuActive on SVGClose

    return(
            <styled.Container>
                <styled.Icon>crowdfund</styled.Icon>
                <styled.NavMenu>
                    <styled.NavItem>About</styled.NavItem>
                    <styled.NavItem>Discover</styled.NavItem>
                    <styled.NavItem>Get Started</styled.NavItem>
                </styled.NavMenu>
                <styled.CollapsedMenu onClick={onMobileMenuClick}>
                    <SVGHamburger isMobileMenuActive={isMobileMenuActive}/>
                    <SVGClose fill={'#fff'} opacity={'1'} display={isMobileMenuActive ? 'block':'none'}/>
                </styled.CollapsedMenu>
                <styled.NaveMenuMobileWrapper display={isMobileMenuActive ? 'block':'none'}>
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