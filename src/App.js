import React from 'react';
import styled from 'styled-components'

import HeroBanner from './components/HeroBanner'
import TitleBlock from './components/TitleBlock'
import Header from './components/Header'

import './App.css'

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
    `
    const Container = styled.div`

        > ${MainContent} { 
            margin-top:20em;
        }
    `

    //create a wrap to position absolute

    return(
        <Container>  
            <HeroBanner/>
            <Header />
            <MainContent>
               <TitleBlock />
            </MainContent>
        </Container>
    )
}

export default App