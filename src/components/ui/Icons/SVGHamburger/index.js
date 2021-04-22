import React from 'react'
import * as styled from './style'

const SVGHamburger = ({isMobileMenuActive}) => {
    console.log('mobile menu active: ',isMobileMenuActive)
    return (
        <styled.Icon display={isMobileMenuActive ? 'none':'block'} />
    )
}

export default SVGHamburger
