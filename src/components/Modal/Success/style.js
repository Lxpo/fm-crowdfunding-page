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
export const Container = styled.div`
    margin:0 auto;
    max-width: 500px;
    width:100%;
    display:${({display = 'none'}) => display};
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:42px 36px 48px 36px;
    background:white;
    border-radius:10px;
    position:sticky;
    top:150px;

    > svg {
        margin-bottom:40px;
    }

    > ${Heading} {
        margin-bottom:20px;
    }

    > ${Message} {
        margin-bottom:20px;
    }
    
`

//top: ${({ topValue = 0 }) => topValue}px;