import styled from 'styled-components'
import * as sg from '../util/styleGuide'
import * as ib from '../ui/InfoBlock/style'

export const Description = styled.p`
    font-family:${sg.Font};
    font-weight:${sg.Font400};
    font-size:16px;
    color:${sg.setOpacityDarkGray(0.8)};
    text-align:left;
    line-height:2em;
`
export const Header = styled.h4`
    font-family:${sg.Font};
    font-weight:${sg.Font700};
    font-size:20px;
    color:black;
`
export const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    background: white;
    border-radius:10px;
    border:1px solid ${sg.setOpacityDarkGray(0.1)};
    padding: ${sg.DefaultCardPadding};
    box-sizing:border-box;

    > ${Header} {
        margin-top:28px;
        margin-bottom:26px;
    }

    > ${Description} {
        margin-bottom:32px;
    }

    > ${ib.Container} {
        margin-bottom:24px;
    }

    @media (max-width:905px) {
        padding: ${sg.CardMobilePadding};
    }
`