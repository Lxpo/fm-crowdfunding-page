import React,{useEffect, useState} from 'react'
import * as styled from './style'
import * as sg from '../../../util/styleGuide'

import Button from '../../Button'

const Modal = ({rewardName,text,pledge,remaining,id,enable=false,defaultBlock=false}) => {
    
    const [ShowFooter, setShowFooter] = useState('none')
    const [borderColor, setBorderColor] = useState(sg.setOpacityDarkGray(0.2))
    const [borderThickness, setBorderThickness] = useState('1px')
    
    const footerDisplay = {
        display:ShowFooter,
    }   

    const ContainerBorder = {
        border:`${borderThickness} solid ${borderColor}`,
    }

    const Hook = () => {
        if(enable){
            setShowFooter('flex')
            setBorderThickness('2px')
            setBorderColor(sg.ModerateCyan)
        } else {
            setShowFooter('none')
            setBorderThickness('1px')
            setBorderColor(sg.setOpacityDarkGray(0.2))
        }
    }

    useEffect(Hook,[enable])
    
    if(defaultBlock){
        return(
            <styled.Container >
                <styled.Body>
                    <styled.Label>
                        <styled.RadioInput>
                            <styled.Radio type={'radio'}  name={'modalGroup'}/>
                            <styled.RadioControl />
                        </styled.RadioInput>
                    </styled.Label>
                    <styled.Header>
                        <styled.Center>
                            <styled.LeftGroup>
                                <styled.RewardName >Pledge with no reward</styled.RewardName>
                            </styled.LeftGroup>
                        </styled.Center>
                        <styled.Description>
                            Choose to support us without a reward if you simply believe in our project. As a backer, 
                            you will be signed up to receive product updates via email.
                        </styled.Description>
                    </styled.Header>
                </styled.Body>
            </styled.Container>
        )
    } else {
        return(
            <styled.Container style={ContainerBorder}>
                <styled.Body>
                    <styled.Label>
                        <styled.RadioInput>
                            <styled.Radio type={'radio'}  
                                            name={'modalGroup'} 
                                            value={id}       
                            />
                            <styled.RadioControl />
                        </styled.RadioInput>
                    </styled.Label>
                    <styled.Header>
                        <styled.Center>
                            <styled.LeftGroup>
                                <styled.RewardName >{rewardName}</styled.RewardName>
                                <styled.Pledge >Pledge ${pledge} or more</styled.Pledge>
                            </styled.LeftGroup>
                            <styled.RightGroup>
                                <styled.Remaining>{remaining}</styled.Remaining>
                            </styled.RightGroup>
                        </styled.Center>
                        <styled.Description>
                            {text}
                        </styled.Description>
                    </styled.Header>
                </styled.Body>
                <styled.Footer style={footerDisplay}>
                    <styled.Message>Enter your pledge</styled.Message>
                    <styled.Control>
                        <Button  text={'Continue'}/>
                    </styled.Control>
                </styled.Footer>
            </styled.Container>
        )
    }
}

export default Modal