import React from 'react'
import * as styled from './style'

const SVGHamburger = ({isMobileMenuActive}) => {
    return (
        <styled.Icon display={isMobileMenuActive ? 'none':'block'} />
    )
}

export default SVGHamburger
