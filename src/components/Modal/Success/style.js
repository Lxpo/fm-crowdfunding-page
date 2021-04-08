import styled from 'styled-components'
import * as sg from '../../util/styleGuide'

export const Message = styled.p`
    font-family:${sg.Font};
    font-weight:${sg.Font400};
    font-size:16px;
    color:${sg.setOpacityDarkGray(0.8)};
    text-align:center;
    line-height:2em;
`
export const Heading = styled.h2`
    font-family:${sg.Font};
    font-weight:${sg.Font700};
    font-size:20px;
    color:black;
`
export const Icon = styled.div`

`
export const Container = styled.div`
    max-width: 500px;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:20px;
    background:white;
`