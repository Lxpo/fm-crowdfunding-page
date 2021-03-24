import styled from 'styled-components'
import * as sg from '../util/styleGuide'

export const ProductName = styled.h2`
    font-weight: 500;
    font-size: 32px;
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
    border:1px solid ${sg.DarkGray};
`
export const ProductIcon = styled.img`
    max-width: max-content;
`

export const Container = styled.div`
    max-width: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    position: relative;
    border: 1px solid ${sg.DarkGray};
`
