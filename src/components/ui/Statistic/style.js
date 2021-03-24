import styled from 'styled-components'
import * as sg from '../../util/styleGuide' 

export const Description = styled.p`
    color: ${sg.setOpacityDarkGray(0.9)};
    font-size: 16px;
    font-weight: ${sg.Font400};
`
export const Value = styled.span`
    color:black;
    font-weight: ${sg.Font700};
    font-size: 32px;
`
export const Statistic = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: flex-start;
    font-family:${sg.Font};

    > ${Value} {
        margin-bottom: 10px;
    }
`