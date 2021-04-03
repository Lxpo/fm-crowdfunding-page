import React, { useState } from 'react'
import * as styled from './style'
import * as data from '../../assets/data/dummyData'

import CloseBtn from '../../assets/icons/icon-close-modal.svg'
import InfoBlock from '../ui/InfoBlock/Modal'

const Modal = ({enable = false}) => {
    
    // const [modalActive, setModalActive] = useState(enable)
    // const [rewards, setRewards] = useState(data.getData())
    const [selectedRadio, setSelectedRadio] = useState(null)

    const changeFunction = (event) => {
        setSelectedRadio(event.target.value)
    }
    
    //Input pledge is next + disabled info blockd

    return(
        <styled.Container>
            <styled.CloseBtnContainer>
                <styled.CloseBtn src={CloseBtn}/>
            </styled.CloseBtnContainer>
            <styled.Header>
                <styled.Title>Back this project</styled.Title>
                <styled.SubTitle>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</styled.SubTitle>
            </styled.Header>
            <styled.InfoBlockContainer onChange={changeFunction}>
                <InfoBlock defaultBlock={true} id={0} />
                {
                    data.ModalInfoBlockData.map(item => 
                        <InfoBlock  key={item.reward}
                                    rewardName={item.reward} 
                                    text={item.description} 
                                    pledge={item.pledge} 
                                    remaining={item.remaining}
                                    id={item.id}
                                    enable={Number(selectedRadio) === item.id}/>
                    )
                }
            </styled.InfoBlockContainer>
        </styled.Container>
    )
}

export default Modal