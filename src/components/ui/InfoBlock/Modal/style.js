import styled from 'styled-components'
import * as sg from '../../../util/styleGuide'
import dollar from '../../../../assets/icons/dollar-symbol.svg'

export const Input = styled.input`
    border: 1px solid ${sg.setOpacityDarkGray(0.6)}; 
    border-radius: 28px;
    padding:18px 36px;
    color:black;
    font-family:${sg.Font};
    font-weight:${sg.Font700};
    font-size:16px;
    max-width:60px;
    text-align:center;
    background: url(${dollar}) no-repeat scroll center;
    background-size: 100px 100px;
    background-position:-23px -21px;
    
    &::-webkit-inner-spin-button{
        display:none;
        -webkit-appearance: none;
        margin: 0;
    }

    &:focus{
        outline:none;
    }
`
export const RadioControl = styled.span`
    display:grid;
    place-items:center;
    width: 1.1em;
    height: 1.1em;
    border-radius: 50%;
    border: 0.1em solid ${sg.setOpacityDarkGray(0.4)};
`
export const Radio = styled.input`
    position:absolute;
`
export const RadioInput = styled.span`
    display:flex;
    cursor:pointer;

    > ${Radio} {
        opacity:0;
        width:0;
        height:0;
        + ${RadioControl}:before {
            content: "";
            width: 0.7em;
            height: 0.7em;
            box-shadow: inset 0.5em 0.5em ${sg.ModerateCyan};
            border-radius: 50%;
            transition: 180ms transform ease-in-out;
            transform: scale(0);
        }
        :checked + ${RadioControl}:before {
            transform: scale(1);
        }
    }
`
export const Control = styled.form`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between; 
      
    > button {
        max-width:100%;
    }
    
    > ${Input} {    
        margin-right:20px;
    }
    
    @media (max-width:905px) {
        width:100%; 
    }
`
export const Message = styled.span`
    font-family:${sg.Font};
    font-weight:${sg.Font400};
    font-size:16px;
    color:${sg.setOpacityDarkGray(0.8)};
    text-align:left;
    line-height:1.8em;
`
export const Footer = styled.div`
    width:100%;
    display:none;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    box-sizing:border-box;
    padding:28px 20px;  
    border-top:2px solid ${sg.setOpacityDarkGray(0.1)};

    @media (max-width:905px) {
        flex-direction:column;

        > ${Message} {
            margin-bottom:20px;
        }
    }
`
export const Description = styled.p`
    font-family:${sg.Font};
    font-weight:${sg.Font400};
    font-size:16px;
    color:${sg.setOpacityDarkGray(0.8)};
    text-align:left;
    line-height:1.8em;

    @media (max-width:905px) {
       
    }
`
export const Remaining = styled.span`
    display:flex;
    align-items:center;
    font-family:${sg.Font};
    font-weight:${sg.Font700};
    font-size:18px;
    color:black;

    &:after{
        content:"left";
        font-family:${sg.Font};
        font-weight:${sg.Font400};
        font-size:16px;
        color:${sg.setOpacityDarkGray(0.8)};
        margin-left:6px;
    }
`
export const Pledge = styled.span`
    font-family:${sg.Font};
    font-weight:${sg.Font700};
    font-size:16px;
    color:${sg.ModerateCyan};

    @media (max-width:905px) {
        font-size:15px;
        font-weight:${sg.Font400}
    }
`
export const RewardName = styled.span`
    font-family:${sg.Font};
    font-weight:${sg.Font700};
    font-size:18px;
    color:black;
    cursor:pointer;

    @media (max-width:905px) {
        font-size:17px;
    }
`
export const RadioButton = styled.div`
    width:20px;
    height:20px;
    border-radius:1000px;
    border:1px solid black;
`
export const RightGroup = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-end;

    @media (max-width:905px) {
        position:relative;
    }
`
export const LeftGroup = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;

    >${RewardName} {
        margin-right:16px;
    }

    @media (max-width:905px) {
        flex-direction:column;
        align-items:flex-start;

        >${RewardName} {
            + ${Pledge} {
                margin-top:14px;
            }
        }
    }
`
export const Center = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`
export const Label = styled.label`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    width:100%;
    border:1px solid ${sg.setOpacityDarkGray(0.2)};
    border-radius:10px;
    box-sizing:border-box;
    cursor: pointer;
`
export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    position:relative;

    > ${Center} {
        margin-bottom:16px;
    }

    @media (max-width:905px) {
        flex-direction:row;
        align-items:center;
        justify-content:flex-start;

        > ${Label} {
            margin-right:20px;
        }
    }
`
export const BodyMobile = styled.div`
    display:none;
    flex-direction:column;
    align-items:flex-start;
    padding:28px 20px;  

    > ${Header} {
        margin-bottom:32px;
    }

    > ${Description} {
        + ${Remaining} {
            margin-top:26px;
            margin-bottom:12px;
        }
    }
    
    @media (max-width:905px) {
        display:flex;
    }
`
export const Body = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    justify-content:flex-start;
    padding:40px 20px 20px 20px;  
    box-sizing:border-box;

    > ${Header} {
        margin-left:20px;
    }

    @media (max-width:905px) {
        display:none;

        > ${Label} {
            margin-top:12px;
        }
    }
`
export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    width:100%;
    border:1px solid ${sg.setOpacityDarkGray(0.2)};
    border-radius:10px;
    box-sizing:border-box;
`