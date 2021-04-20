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

    @media (max-width:905px) {
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;

        > ${stat.Statistic} {
            border-right: 0px ${sg.setOpacityDarkGray(0)};
            padding:0px;
            align-items:center;

            &:after{
                content:" ";
                display:block;
                max-width:93px;
                width:100%;
                padding-top:1px;
                background:${sg.setOpacityDarkGray(0.3)};
                margin:24px 0px 24px 0px;
            }

            &:last-of-type {
                
                border-bottom:none;

                &:after{
                    display:none;
                }
            }

            &:first-of-type{
               
            }
        }
    }

`
export const Card = styled.div`
    width:100%;
    background:white;
    border-radius: 10px;
    padding: ${sg.DefaultCardPadding};
    box-sizing:border-box;

    > ${StatisticsContainer} {
        margin-bottom:40px;
    }

    @media (max-width:905px) {
        padding: ${sg.CardMobilePadding};
    }
`
export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    position: relative;
    border: 1px solid ${sg.setOpacityDarkGray(0.1)};
    border-radius: 10px;
`

