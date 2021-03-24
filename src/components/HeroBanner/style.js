import styled from 'styled-components'
import img from '../../assets/image-hero-desktop.jpg'

export const Container = styled.div`
    padding: 250px;
    background: center / cover no-repeat url(${img});
    position: absolute;
    top:0;
    z-index:0;
    width: 100%;
    box-sizing:border-box;
`
export const Image = styled.img`
    max-width:100%;
    width:100%;   
    height:auto;
`