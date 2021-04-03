import react from 'react'
import * as styled from './style'
import * as data from '../../assets/data/dummyData'

import InfoBlock from '../ui/InfoBlock'

const About = () => {
    
    return (
        <styled.Container>
            <styled.Header>About this project</styled.Header>
            <styled.Description>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.<br/><br/>

            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
            to allow notepads, pens, and USB sticks to be stored under the stand.
            </styled.Description>
            
            {
                data.ModalInfoBlockData.map(line => 
                    <InfoBlock  key={line.reward}
                                name={line.reward} 
                                pledge={line.pledge} 
                                description={line.description} 
                                remaining={line.remaining} />       
                )
            }
            
        </styled.Container>
    )
}

export default About
