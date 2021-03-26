import React from 'react';
import styled from 'styled-components'

import HeroBanner from './components/HeroBanner'
import TitleBlock from './components/TitleBlock'
import Header from './components/Header'
import About from './components/About'

import * as TB from './components/TitleBlock/style'
import * as STAT from './components/Statistics/style'

import './App.css'
import Statistics from './components/Statistics';

const App = () => {

    const MainContent = styled.div`
        margin:0 auto;
        max-width: 850px;
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
               <About />
            </MainContent>
        </Container>
    )
}

export default App