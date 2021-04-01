import React,{useState} from 'react'
import * as styled from './style'

import Button from '../../Button'

const Modal = ({rewardName,text,pledge,remaining, enable = false, defaultBlock = false}) => {

    //Display footer on radio check
   
    if(defaultBlock){
        return(
            <styled.Container>
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
            <styled.Container>
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
                <styled.Footer>
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