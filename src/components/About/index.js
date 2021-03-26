import react from 'react'
import * as styled from './style'

import InfoBlock from '../ui/InfoBlock'

const About = () => {

    const description1 = "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
    const description2 = "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
    const description3 = "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
    
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
            <InfoBlock  name={'Bamboo Stand'} pledge={25} description={description1} remaining={101} />
            <InfoBlock  name={'Black Edition Stand'} pledge={75} description={description2} remaining={64} />
            <InfoBlock  name={'Mahogany Special Edition'} pledge={200} description={description3} remaining={0} />
        </styled.Container>
    )
}

export default About
