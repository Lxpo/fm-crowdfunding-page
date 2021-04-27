import React,{useState} from 'react';
import styled from 'styled-components'

import HeroBanner from './components/HeroBanner'
import TitleBlock from './components/TitleBlock'
import Header from './components/Header'
import About from './components/About'
import Modal from './components/Modal'

import * as sg from './components/util/styleGuide'
import * as TB from './components/TitleBlock/style'
import * as STAT from './components/Statistics/style'

import './App.css'
import Statistics from './components/Statistics';

const App = () => {

    const [showModal, setShowModal] = useState(false)
    const [selectedRewardId, setSelectedReward] = useState(null)
    const [confirmPledge, setConfirmPledge] = useState(false)
    const [backers, setBackers] = useState(5007)
    const [isMobileMenuActive, setIsMobileMenuActive]  = useState(false)

    const MainContent = styled.div`
        margin:0 auto;
        max-width: ${sg.DefaultContainerMaxWidth};
        width:100%;
        position: relative;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        box-sizing:border-box;

        > ${TB.Container} {
            margin-bottom: 24px;
        }

        > ${STAT.Container} {
            margin-bottom: 24px;
        }

        @media (min-width:${sg.Mobile}) {
            max-width:85%;
        }

        @media (min-width:${sg.Tablet}) {
            max-width:85%;
        }

        @media (min-width:${sg.Desktop}) {
            max-width:${sg.DefaultContainerMaxWidth};
        }
    `
    const Container = styled.div`
        padding-bottom: 32px;
        position:relative;
        
        > ${MainContent} { 
            margin-top:18em;
        }
    `
    const MobileMenuOverlay = styled.div`
        display:${({display='none'}) => display};
        position:absolute;
        width:100%;
        height:100%;
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(31,31,31,0.6) 0%, rgba(126,126,126,0.3) 24%, rgba(255,255,255,0.1) 100%);
        top:0;
        left:0;

        @media (min-width:${sg.Tablet}) {
            display:none;
        }
    `

    const displayModal = (event) => {
        setShowModal(true)
        setSelectedReward(event.target.id)
    }

    const closeModal = () => {
        setShowModal(false)
        displaySuccess(false)
    }

    const displaySuccess = (display) => {
        setConfirmPledge(display)
    }

    const addBacker = () => {
        setBackers(backers + 1)
    }

    const onMobileMenuClick = () => {
        if(isMobileMenuActive) {
            setIsMobileMenuActive(false)
        }else{
            setIsMobileMenuActive(true)
        }
    }

    return(
        <Container>  
            <HeroBanner/>
            <Header isMobileMenuActive={isMobileMenuActive} onMobileMenuClick={onMobileMenuClick} />
            <Modal  enable={showModal} 
                    closeModal={closeModal}     
                    passedId={selectedRewardId} 
                    pledgeConfirm={confirmPledge} 
                    displayConfirm={displaySuccess}
                    setBackers={addBacker}
                    />
            <MainContent>
               <TitleBlock showModal={displayModal}/>
               <Statistics backers={backers}/> 
               <About showModal={displayModal}/>
            </MainContent>
            <MobileMenuOverlay display={isMobileMenuActive ? 'block' : 'none'}/>  
        </Container>
    )
}

export default App