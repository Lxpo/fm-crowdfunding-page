import React, {useState} from 'react'
import * as styled from './style'

import Button from '../../ui/Button/'

const SuccessModal = () => {

    return (
        <styled.Container>
            <styled.Icon></styled.Icon>
            <styled.Heading>Thanks for your support!</styled.Heading>
            <styled.Message> Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                            an email once our campaign is completed.
            </styled.Message>
            <Button text={'Got it!'} clickFunction={undefined}/>
        </styled.Container>
    )
    
}

export default SuccessModal
