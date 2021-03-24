import styled from 'styled-components'
import * as sg from '../../util/styleGuide'

export const Text = styled.span`
    color:${sg.DarkGray};
    font-family:${sg.Font};
    font-weight:${sg.Font700};
    font-size:18px;
`

export const Icon = styled.img`
    max-width:max-content;
    position:absolute;
    left:0;
`
export const Bookmark = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    background:${sg.setOpacityDarkGray(0.4)};
    border:none;
    padding:18px 32px;
    border-radius: 28px;
    cursor:pointer;
    outline:none;
    position:relative;

    > ${Text} {
        margin-left: 2em;
    }
    
`