import styled from 'styled-components'
import * as sg from '../util/styleGuide'

export const Control = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:100%;

    @media (max-width:905px) {
        > button {
            margin-right:12px;
        }
    }
`
export const Description = styled.p`
    font-weight: ${sg.Font400};
    font-size: 18px;
    font-family: ${sg.Font};
    color:${sg.DarkGray};
    text-align:center;
    line-height:1.8em;

    @media (max-width:905px) {
        font-size:16px;
    }
`
export const ProductName = styled.h2`
    max-width:80%;
    font-weight: ${sg.Font700};
    font-size: 32px;
    font-family: ${sg.Font};
    color:${sg.Black};
    text-align:center;
    line-height:1.2em;

    @media (max-width:905px) {
        font-size:24px;
    }
`
export const Card = styled.div`
    width:100%;
    background:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-radius:10px;
    border:1px solid ${sg.setOpacityDarkGray(0.1)};
    padding: ${sg.DefaultCardPadding};
    box-sizing:border-box;

    > ${ProductName} {
        margin-bottom:20px;
    }

    > ${Description} {
        margin-bottom:32px;
    }

    @media (max-width:905px) {
        padding: 56px 28px 40px 28px;
    }
`
export const ProductIcon = styled.div`
    max-width: max-content;
    position:absolute;
    top:0;
`
export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    position: relative;

    > ${Card} {
        margin-top:28px;
    }
`
