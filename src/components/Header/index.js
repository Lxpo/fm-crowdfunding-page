import react from 'react'
import * as styled from './style'

import SVGHamburger from '../ui/Icons/SVGHamburger'

const Header = () => {
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
        </styled.Container>
    )
}

export default Header