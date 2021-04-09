import styled from 'styled-components'
import * as sg from '../util/styleGuide'

export const Control = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:100%;
`
export const Description = styled.p`
    font-weight: ${sg.Font400};
    font-size: 18px;
    font-family: ${sg.Font};
    color:${sg.DarkGray};
`
export const ProductName = styled.h2`
    font-weight: ${sg.Font700};
    font-size: 32px;
    font-family: ${sg.Font};
    color:${sg.Black};
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
