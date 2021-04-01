import React from 'react'
import * as styled from './style'
import * as data from '../../assets/data/dummyData'

import CloseBtn from '../../assets/icons/icon-close-modal.svg'
import InfoBlock from '../ui/InfoBlock/Modal'

const Modal = ({enable = false}) => {

    return(
        <styled.Container>
            <styled.CloseBtnContainer>
                <styled.CloseBtn src={CloseBtn}/>
            </styled.CloseBtnContainer>
            <styled.Header>
                <styled.Title>Back this project</styled.Title>
                <styled.SubTitle>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</styled.SubTitle>
            </styled.Header>
            <InfoBlock defaultBlock={true}/>
            {
                data.ModalInfoBlockData.map(item => 
                    <InfoBlock  key={item.reward}
                                rewardName={item.reward} 
                                text={item.description} 
                                pledge={item.pledge} 
                                remaining={item.remaining}/>
                )
            }
        </styled.Container>
    )
}

export default Modal