import React, {useState} from 'react'
import * as styled from './style'

import Button from '../../ui/Button/'
import SVGCheckIcon from '../../ui/Icons/SVGCheckmark'

const SuccessModal = ({closeModal,displaySuccess = false}) => {

    const [displayModal, setDisplayModal] = useState('none')

    return (
        <styled.Container display={displaySuccess ? 'flex':'none'}>
            <SVGCheckIcon />
            <styled.Heading>Thanks for your support!</styled.Heading>
            <styled.Message> Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                            an email once our campaign is completed.
            </styled.Message>
            <Button text={'Got it!'} clickFunction={closeModal}/>
        </styled.Container>
    )
    
}

export default SuccessModal
