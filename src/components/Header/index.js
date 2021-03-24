import react from 'react'
import * as styled from './style'

const Header = () => {

    return(
        <styled.Container>
            <styled.Icon>crowdfund</styled.Icon>
            <styled.NavMenu>
                <styled.NavItem>About</styled.NavItem>
                <styled.NavItem>Discover</styled.NavItem>
                <styled.NavItem>Get Started</styled.NavItem>
            </styled.NavMenu>
        </styled.Container>
    )
}

export default Header