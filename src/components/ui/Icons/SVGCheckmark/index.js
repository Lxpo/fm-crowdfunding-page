import React from 'react'
// import * as styled from './style'

import Icon from '../../../../assets/icons/icon-check.svg'

const SVGCheckIcon = () => {
    return (
        /* 
            Resizing SVG based on IMG tag, for simple resizing
            <styled.Image src={Icon}/>
        */
    
        //Resizing image based on SVG tag, allows you to customize fill color etc.
        <svg viewBox="-4 -3 70 70" width="90" height="80" preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg" >
            <g fill="none" fillRule="evenodd">
                <circle fill="#3CB3AB" cx="32" cy="32" r="32"/>
                <path stroke="#FFF" strokeWidth="5" d="M20 31.86L28.093 40 44 24"/>
            </g>
            {/*Curly brace comments inside an HTML element.*/}
        </svg>
        
    )
}

//you were gonna put the svg check icon into the icons folder

export default SVGCheckIcon
