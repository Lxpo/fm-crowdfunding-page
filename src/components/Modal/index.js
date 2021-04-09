import React, { useEffect, useState } from 'react'
import * as styled from './style'
import * as data from '../../assets/data/dummyData'

import CloseBtn from '../../assets/icons/icon-close-modal.svg'
import InfoBlock from '../ui/InfoBlock/Modal'
import SuccessModal from '../Modal/Success'

const Modal = ({closeModal,passedId,enable = false}) => {
    
    const [selectedRadio, setSelectedRadio] = useState(null)

    const changeFunction = (event) => {
        setSelectedRadio(event.target.value || event.target.id)
    }

    const enableModalHook = () => {
        setSelectedRadio(passedId)
    }

    useEffect(enableModalHook,[passedId])

    console.log('Radio selected', selectedRadio)

    //if confirmPledge true hide BackThisProject, if false show BackThisProject Modal
    
    return(
        <styled.ModalWrapper style={{display: enable ? '':'none'}}>
            <styled.Container display={'flex'}>
                <styled.CloseBtnContainer>
                    <styled.CloseBtn src={CloseBtn} onClick={closeModal}/>
                </styled.CloseBtnContainer>
                <styled.Header>
                    <styled.Title>Back this project</styled.Title>
                    <styled.SubTitle>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</styled.SubTitle>
                </styled.Header>
                <styled.InfoBlockContainer>
                    <InfoBlock  defaultBlock={true} 
                                id={0} 
                                handleClick={changeFunction} 
                                enable={selectedRadio === 'default'}/>
                    {
                        data.ModalInfoBlockData.map(item => 
                            <InfoBlock  key={item.reward}
                                        rewardName={item.reward} 
                                        text={item.description} 
                                        pledge={item.pledge} 
                                        remaining={item.remaining}
                                        id={item.id}
                                        enable={Number(selectedRadio) === item.id}
                                        handleClick={changeFunction}
                                        closeModal={closeModal}/>
                        )
                    }

                </styled.InfoBlockContainer>
            </styled.Container>
            <SuccessModal closeModal={closeModal} />
        </styled.ModalWrapper>
    )
}

export default Modal