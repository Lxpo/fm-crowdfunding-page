import React,{useEffect, useState} from 'react'
import * as styled from './style'
import * as sg from '../../../util/styleGuide'

import Button from '../../Button'

const Modal = ({rewardName,text,pledge,remaining,id,enable=false,defaultBlock=false, handleClick}) => {
    
    const [ShowFooter, setShowFooter] = useState('none')
    const [borderColor, setBorderColor] = useState(sg.setOpacityDarkGray(0.2))
    const [borderThickness, setBorderThickness] = useState('1px')
    const [onHover, setHover] = useState(false)
    const [footerIsActive, setFooterIsActive] = useState(enable)
    
    const footerDisplay = {
        display:ShowFooter,
    }   

    const ContainerInline = {
        border:`${borderThickness} solid ${borderColor}`,
        opacity: remaining !== 0 ? '1':'0.4',
    }

    const RadioBorderOnHover = {
        border: `0.1em solid ${remaining !== 0 && onHover ? sg.ModerateCyan : sg.setOpacityDarkGray(0.4)}`,
    }

    const rewardNameInline = {
        color:`${remaining !== 0 && onHover ? sg.ModerateCyan : 'black'}`,
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
            <styled.Container style={ContainerInline}>
                <styled.Body>
                    <styled.Label>
                        <styled.RadioInput>
                            <styled.Radio   type={'radio'}  
                                            name={'modalGroup'} 
                                            value={'default'} 
                                            onClick={handleClick} 
                                            checked={enable}
                                            />
                            <styled.RadioControl    style={RadioBorderOnHover} 
                                                    onMouseEnter={() => setHover(true)} 
                                                    onMouseLeave={() => setHover(false)}/>
                        </styled.RadioInput>
                    </styled.Label>
                    <styled.Header>
                        <styled.Center>
                            <styled.LeftGroup   onMouseEnter={() => setHover(true)} 
                                                onMouseLeave={() => setHover(false)}>
                                <styled.RewardName  style={rewardNameInline} 
                                                    onClick={handleClick}
                                                    id={'default'}
                                                    >Pledge with no reward</styled.RewardName>
                            </styled.LeftGroup>
                        </styled.Center>
                        <styled.Description>
                            Choose to support us without a reward if you simply believe in our project. As a backer, 
                            you will be signed up to receive product updates via email.
                        </styled.Description>
                    </styled.Header>
                </styled.Body>
                    <styled.Footer style={footerDisplay}>
                        <styled.Message>Enter your pledge</styled.Message>
                        <styled.Control>
                            <styled.Input type={'number'}/>
                            <Button  text={'Continue'}/>
                        </styled.Control>
                    </styled.Footer>
            </styled.Container>
        )
    } else {
        return(
            <styled.Container style={ContainerInline}>
                <styled.Body>
                    <styled.Label>
                        <styled.RadioInput  >
                            <styled.Radio   type={'radio'}  
                                            name={'modalGroup'} 
                                            value={id} 
                                            disabled={remaining == 0}     
                                            onClick={handleClick} 
                                            checked={enable}
                            />
                            <styled.RadioControl    style={RadioBorderOnHover} 
                                                    onMouseEnter={() => setHover(true)} 
                                                    onMouseLeave={() => setHover(false)}/>
                        </styled.RadioInput>
                    </styled.Label>
                    <styled.Header >
                        <styled.Center>
                            <styled.LeftGroup   onMouseEnter={() => setHover(true)} 
                                                onMouseLeave={() => setHover(false)}>
                                <styled.RewardName style={rewardNameInline} 
                                                   onClick={remaining !== 0 ? handleClick : undefined}
                                                   id={id}>   
                                                    {rewardName}</styled.RewardName>
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
                        <styled.Input type={'number'} placeholder={pledge} />
                        <Button  text={'Continue'}/>
                    </styled.Control>
                </styled.Footer>
            </styled.Container>
        )
    }
}

export default Modal