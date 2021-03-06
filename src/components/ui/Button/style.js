import styled from 'styled-components'
import * as sg from '../../util/styleGuide'

export const Button = styled.button`
    width:100%;
    font-family:${sg.Font};
    font-weight:${sg.Font700};
    font-size:16px;
    border:none;
    border-radius: 28px;
    padding:18px 36px;
    color:white;
    cursor:pointer;
    outline:none;
    background:${sg.ModerateCyan};

    &:hover {
        background: ${sg.DarkCyan};
    }

    @media (min-width:${sg.Mobile}) {
        font-size:${({fontSize})=> fontSize};
        padding: ${({padding})=> padding};
    }

    @media (min-width:${sg.Tablet}) {
        font-size:16px;
        padding: 18px 36px;
    }
`

//You were fixing mobile responsiveness of the title block