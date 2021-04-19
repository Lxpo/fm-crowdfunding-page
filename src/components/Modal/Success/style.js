import styled from 'styled-components'
import * as sg from '../../util/styleGuide'

export const Message = styled.p`
    width:100%;
    font-family:${sg.Font};
    font-weight:${sg.Font400};
    font-size:16px;
    color:${sg.setOpacityDarkGray(0.8)};
    text-align:center;
    line-height:2em;
`
export const Heading = styled.h2`
    width:100%;
    font-family:${sg.Font};
    font-weight:${sg.Font700};
    font-size:20px;
    color:black;
    text-align:center;
`
export const Container = styled.div`
    margin:0 auto;
    max-width: 500px;
    width:100%;
    display:${({display = 'none'}) => display};
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:38px 36px 48px 36px;
    background:white;
    box-sizing:border-box;
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

    > Button {
        max-width:30%;
    }
    
    @media (max-width:905px) {
        max-width:400px;
        padding:32px 28px 46px 28px;

        > ${Heading} {
            margin-bottom:28px;
        }

        > ${Message} {
            margin-bottom:32px;
        }

        > Button {
            max-width:40%;
        }
    }
    
`

//top: ${({ topValue = 0 }) => topValue}px;