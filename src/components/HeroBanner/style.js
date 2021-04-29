import styled from 'styled-components'
import img from '../../assets/image-hero-desktop.jpg'
import imgMobile from '../../assets/image-hero-mobile.jpg'

import * as sg from '../util/styleGuide'

export const Container = styled.div`
    padding: 250px;
    background: center / cover no-repeat url(${img});
    position: absolute;
    top:0;
    z-index:0;
    width: 100%;
    box-sizing:border-box;

    @media (max-width:${sg.Tablet}) {
        padding: 100px;
        background: center / cover no-repeat url(${imgMobile});
    }

    @media (min-width:${sg.Tablet}) {
        padding: 250px;
    }
`
export const Image = styled.img`
    max-width:200px;
    width:100%;   
    height:auto;
`