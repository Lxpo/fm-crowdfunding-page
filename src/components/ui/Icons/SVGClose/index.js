import React from 'react'
import * as styled from '../SVGClose/style'

const SVGClose = ({fill="#000",opacity="0.4",display='block'}) => {
    return (
        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" display={display}>
            <path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill={fill} fill-rule="evenodd" opacity={opacity}/>
        </svg>
    )
}

export default SVGClose
