import styled from 'styled-components'
import * as sg from '../../util/styleGuide'

export const Text = styled.span`
    color:${sg.DarkGray};
    font-family:${sg.Font};
    font-weight:${sg.Font700};
    font-size:16px;
    -webkit-touch-callout: none;
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;                            
`
export const Icon = styled.div`
    max-width:max-content;
    position:absolute;
    top:0;
    left:0;
`
export const Bookmark = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    background:${sg.setOpacityDarkGray(0.1)};
    border:none;
    padding:20px 36px;
    border-radius: 28px;
    cursor:pointer;
    outline:none;
    position:relative;

    > ${Text} {
        margin-left: 2em;
    }
    
`