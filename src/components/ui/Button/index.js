import React from 'react'
import * as styled from './style'
import * as sg from '../../util/styleGuide'

const Button  = ({text,clickFunction,id='default',disable = false}) => {

    const isDisabled = {
        background:sg.DarkGray,
    }

    if (disable) {
        return(
            <styled.Button style={isDisabled}>{text}</styled.Button>
        )
    } else {
        return(
            <styled.Button onClick={clickFunction} id={id}>{text}</styled.Button>
        )
    }

    
}

export default Button