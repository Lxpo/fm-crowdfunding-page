import React,{useEffect, useState} from 'react'
import * as styled from './style'
import * as sg from '../../../util/styleGuide'
import * as data from '../../../../assets/data/dummyData'

import Button from '../../Button'

const Modal = ({rewardName,
                text,
                pledge,
                remaining,
                id,
                handleClick,
                confirmPledge,
                setBackers,
                enable=false,
                defaultBlock=false }) => {
    
    const [ShowFooter, setShowFooter] = useState('none')
    const [borderColor, setBorderColor] = useState(sg.setOpacityDarkGray(0.2))
    const [borderThickness, setBorderThickness] = useState('1px')
    const [onHover, setHover] = useState(false)
    const [pledgeInput, setPledgeInput] = useState(pledge)

    
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

    const handleForm = (event) => {
        event.preventDefault();
        if(pledgeInput < pledge) {
            alert(`Support us by pledging atleast $${pledge} or more`)
            setPledgeInput(pledge)
        } else {
            confirmPledge(true)
            setBackers()
            console.log('defaultForm input', pledgeInput)
            data.setAmount(pledgeInput)
            setPledgeInput(0)
            //This is where you get the pledge amount
        }
    }

    const handleDefaultForm = (event) => {
        event.preventDefault();
        if(pledgeInput < 1) {
            alert(`Support us by pledging atleast $1 or more`)
            setPledgeInput(1)
        } else {
            confirmPledge(true)
            setBackers()
            console.log('defaultForm input', pledgeInput)
            data.setAmount(pledgeInput)
            setPledgeInput(0)
             //This is where you get the pledge amount
        }
    }
    const inputPledge = (event) => {
        console.log('THE Input Pledge ',event.target)
        setPledgeInput(event.target.value)
    }


    if(defaultBlock){
        return(
            <styled.Container style={ContainerInline}>
                <styled.Body>
                    <styled.Label style={{marginTop:'0px',}}>
                        <styled.RadioInput>
                            <styled.Radio   type={'radio'}  
                                            name={'modalGroup'} 
                                            value={'default'} 
                                            onClick={handleClick} 
                                            checked={enable}
                                            onChange={e => {}}
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

                 {/*Displays if on mobile screens*/}
                 <styled.BodyMobile>
                    <styled.Header>
                        <styled.Label style={{marginTop:'0px',}}>
                            <styled.RadioInput>
                                <styled.Radio   type={'radio'}  
                                                name={'modalGroup'} 
                                                value={'default'} 
                                                onClick={handleClick} 
                                                checked={enable}
                                                onChange={e => {}}
                                                />
                                <styled.RadioControl    style={RadioBorderOnHover} 
                                                        onMouseEnter={() => setHover(true)} 
                                                        onMouseLeave={() => setHover(false)}/>
                            </styled.RadioInput>
                        </styled.Label>
                        <styled.LeftGroup   onMouseEnter={() => setHover(true)} 
                                                onMouseLeave={() => setHover(false)}>
                                <styled.RewardName  style={rewardNameInline} 
                                                    onClick={handleClick}
                                                    id={'default'}
                                                    >Pledge with no reward</styled.RewardName>
                        </styled.LeftGroup>
                    </styled.Header>
                    <styled.Description>
                        Choose to support us without a reward if you simply believe in our project. As a backer, 
                        you will be signed up to receive product updates via email.
                    </styled.Description>
                 </styled.BodyMobile>
                
                <styled.Footer style={footerDisplay}>
                        <styled.Message>Enter your pledge</styled.Message>
                        <styled.Control onSubmit={handleDefaultForm}>
                            <styled.Input type={'number'} placeholder={1} value={pledgeInput} onChange={inputPledge}/>
                            <Button text={'Continue'}/>
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
                                            onChange={e => {}}
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
                                                    {rewardName}
                                </styled.RewardName>
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

                {/*Displays if on mobile screens*/}
                <styled.BodyMobile>
                   <styled.Header>
                        <styled.Label>
                            <styled.RadioInput  >
                                <styled.Radio   type={'Radio'}  
                                                name={'modalGroup'} 
                                                value={id} 
                                                disabled={remaining == 0}     
                                                onClick={handleClick} 
                                                checked={enable}
                                                onChange={e => {}}
                                />
                                <styled.RadioControl    style={RadioBorderOnHover} 
                                                        onMouseEnter={() => setHover(true)} 
                                                        onMouseLeave={() => setHover(false)}/>
                            </styled.RadioInput>
                        </styled.Label>
                        <styled.LeftGroup   onMouseEnter={() => setHover(true)} 
                                                onMouseLeave={() => setHover(false)}>
                                <styled.RewardName style={rewardNameInline} 
                                                   onClick={remaining !== 0 ? handleClick : undefined}
                                                   id={id}>   
                                                    {rewardName}
                                </styled.RewardName>
                                <styled.Pledge >Pledge ${pledge} or more</styled.Pledge>
                            </styled.LeftGroup>
                   </styled.Header>
                   <styled.Description>{text}</styled.Description>
                   <styled.Remaining>{remaining}</styled.Remaining>
                </styled.BodyMobile>
                <styled.Footer style={footerDisplay}>
                    <styled.Message>Enter your pledge</styled.Message>
                    <styled.Control onSubmit={handleForm}>
                        <styled.Input type={'number'} placeholder={pledge} onChange={inputPledge} value={pledgeInput}/>
                        <Button  text={'Continue'}/>
                    </styled.Control>
                </styled.Footer>
            </styled.Container>
        )
    }
}

export default Modal