import styled from 'styled-components'
import * as sg from '../util/styleGuide' 

import * as stat from '../ui/Statistic/style'

export const StatisticsContainer = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;

    > ${stat.Statistic} {
        border-right: 1px solid ${sg.setOpacityDarkGray(0.3)};
        padding:10px 0px 0px 50px;

        &:last-of-type {
            border-right: none;
        }

        &:first-of-type{
            padding:10px 0px 0px 0px
        }
    }
`
export const Card = styled.div`
    width:100%;
    background:white;
    border-radius: 10px;
    padding: 60px 100px 50px;
    box-sizing:border-box;

    > ${StatisticsContainer} {
        margin-bottom:40px;
    }
`
export const Container = styled.div`
    max-width: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    position: relative;
    border: 1px solid ${sg.setOpacityDarkGray(0.5)};
    border-radius: 10px;
    
`

