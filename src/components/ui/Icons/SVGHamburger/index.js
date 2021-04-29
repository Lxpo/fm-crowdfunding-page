import React from 'react'
import * as styled from './style'

import SVGIcon from '../../../../assets/icons/icon-hamburger.svg'

const SVGHamburger = ({isMobileMenuActive}) => {
    return (
        <styled.Icon display={isMobileMenuActive ? 'none':'block'} src={SVGIcon}/>
    )
}

export default SVGHamburger
