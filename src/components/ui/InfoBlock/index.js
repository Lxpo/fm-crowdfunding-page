import React from 'react'
import * as styled from './style'

import Button from '../Button'

const InfoBlock = ({name, pledge, description,remaining}) => {

    const isAvailable = {
        opacity:1,
        enable:true,
        msg:'Select Reward',
    }

    if (remaining == 0) {
        isAvailable.opacity = 0.6
        isAvailable.enable = false
        isAvailable.msg = 'Out of Stock'
        
    } else {
        isAvailable.opacity = 1
        isAvailable.enable = true
        isAvailable.msg = 'Select Reward'
    }

   
    return (
        <styled.Container style={isAvailable}>
            <styled.Header>
                <styled.Name>{name}</styled.Name>
                <styled.Pledge>Pledge ${pledge} or more</styled.Pledge>
            </styled.Header>
            <styled.TextContainer>
                <styled.Description>
                    {description}
                </styled.Description>
            </styled.TextContainer>
            <styled.Footer>
                <styled.Remaining>{remaining}</styled.Remaining>
                <Button text={isAvailable.msg} enable={isAvailable.enable} />
            </styled.Footer>
        </styled.Container>
    )
    
}

export default InfoBlock
