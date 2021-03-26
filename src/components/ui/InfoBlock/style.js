import styled from 'styled-components'
import * as sg from '../../util/styleGuide'

export const Remaining = styled.span`
    font-family:${sg.Font};
    font-weight:${sg.Font700};
    font-size:28px;
    color:black;

    &:after{
        content:"left";
        font-family:${sg.Font};
        font-weight:${sg.Font400};
        font-size:16px;
        color:${sg.setOpacityDarkGray(0.8)};
        margin-left:10px;
        margin-bottom:10px;
    }
`
export const Pledge = styled.span`
    font-family:${sg.Font};
    font-weight:${sg.Font400};
    font-size:16px;
    color:${sg.ModerateCyan};
`
export const Name = styled.h4`
    font-family:${sg.Font};
    font-weight:${sg.Font700};
    font-size:18px;
    color:black;
`
export const Footer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:100%;
`
export const Description = styled.p`
    font-family:${sg.Font};
    font-weight:${sg.Font400};
    font-size:16px;
    color:${sg.setOpacityDarkGray(0.8)};
    text-align:left;
    line-height:2em;
`
export const TextContainer = styled.div`
    width:100$;
`
export const Header = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:100%;
`
export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    border:1px solid ${sg.setOpacityDarkGray(0.2)};
    border-radius:10px;
    box-sizing:border-box;
    padding:40px 32px 24px 32px;

    > ${Header} {
        margin-bottom:28px;
    }

    > ${TextContainer} {
        margin-bottom:20px;
    }
`