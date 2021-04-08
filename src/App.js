import React,{useState} from 'react';
import styled from 'styled-components'

import HeroBanner from './components/HeroBanner'
import TitleBlock from './components/TitleBlock'
import Header from './components/Header'
import About from './components/About'
import Modal from './components/Modal'
import SuccessModal from './components/Modal/Success'

import * as sg from './components/util/styleGuide'
import * as TB from './components/TitleBlock/style'
import * as STAT from './components/Statistics/style'

import './App.css'
import Statistics from './components/Statistics';

const App = () => {

    const [showModal, setShowModal] = useState(false)
    const [selectedRewardId, setSelectedReward] = useState(null)

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
    `
    const Container = styled.div`
        padding-bottom: 32px;
        position:relative;
        
        > ${MainContent} { 
            margin-top:18em;
        }
    `

    const displayModal = (event) => {
        console.log('Clicking Button...', event.target.id)
        setShowModal(true)
        setSelectedReward(event.target.id)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return(
        <Container>  
            <HeroBanner/>
            <Header />
            <Modal enable={showModal} closeModal={closeModal} passedId={selectedRewardId}/>
            <MainContent>
               <TitleBlock showModal={displayModal}/>
               <Statistics /> 
               <About showModal={displayModal}/>
               <SuccessModal />
            </MainContent>  
        </Container>
    )
}

export default App