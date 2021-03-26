import React from 'react'
import * as styled from './style'
import * as sg from '../../util/styleGuide'

const Button  = ({text, enable = true}) => {

    const isEnabled = {
        background:sg.ModerateCyan,
    }

    if (!enable) {
        isEnabled.background = sg.DarkGray;
    } else {
        isEnabled.background = sg.ModerateCyan;
    }

    console.log('My Button default', typeof(Button))

    return(
        <styled.Button style={isEnabled} >{text}</styled.Button>
    )
}

export default Button