import React from 'react';
import styled from 'styled-components'

import HeroBanner from './components/HeroBanner'
import TitleBlock from './components/TitleBlock'
import Header from './components/Header'

import * as TB from './components/TitleBlock/style'

import './App.css'
import Statistics from './components/Statistics';

const App = () => {

    const MainContent = styled.div`
        margin:0 auto;
        max-width: 1440px;
        width:100%;
        border: 1px solid black;
        position: relative;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        box-sizing:border-box;

        > ${TB.Container} {
            margin-bottom: 24px;
        }
    `
    const Container = styled.div`

        > ${MainContent} { 
            margin-top:18em;
        }
    `

    //create a wrap to position absolute

    return(
        <Container>  
            <HeroBanner/>
            <Header />
            <MainContent>
               <TitleBlock />
               <Statistics /> 
            </MainContent>
        </Container>
    )
}

export default App