import React from 'react'
import * as styled from './style'
import * as sg from '../../util/styleGuide'

const Button  = ({ text,
                    clickFunction,
                    fontSize='14px',
                    padding='20px 16px',
                    id='default',
                    disable = false}) => {

    const isDisabled = {
        background:sg.DarkGray,
    }

    if (disable) {
        return(
            <styled.Button style={isDisabled} 
                            fontSize={fontSize}
                            padding={padding}
                            >{text}</styled.Button>
        )
    } else {
        return(
            <styled.Button onClick={clickFunction} 
                            id={id} 
                            fontSize={fontSize}
                            padding={padding}
                                >{text}</styled.Button>
        )
    }

    
}

export default Button