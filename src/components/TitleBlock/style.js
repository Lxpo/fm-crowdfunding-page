import styled from 'styled-components'
import * as sg from '../util/styleGuide'

export const Control = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:100%;
    
    > button {
        max-width:30%;
    }

    @media (min-width:${sg.Mobile}) {
        > button {
            margin-right:12px;
            max-width:100%;
        }
    }

    @media (min-width:${sg.Tablet}) {
        > button {
            max-width:30%;
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

    @media (min-width:${sg.Mobile}) {
        font-size:14px;
    }

    @media (min-width:${sg.Landscape}) {
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

    @media (min-width:${sg.Mobile}) {
        font-size:20px;
    }

    @media (min-width:${sg.Landscape}) {
        font-size:22px;
    }

    @media (min-width:${sg.Tablet}) {
        font-size:26px;
    }

    @media (min-width:${sg.Laptop}) {
        font-size:32px;
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

    @media (min-width:${sg.Mobile}) {
        padding: 56px 24px 40px 24px;
    }

    @media (min-width:${sg.Tablet}) {
        padding: ${sg.DefaultCardPadding};
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
