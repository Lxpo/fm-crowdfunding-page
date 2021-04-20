import styled from 'styled-components'
import * as InfoBlock from '../ui/InfoBlock/Modal/style'
import * as sg from '../util/styleGuide'

export const SubTitle = styled.p`   
    font-family:${sg.Font};
    font-weight:${sg.Font400};
    font-size:16px;
    color:${sg.setOpacityDarkGray(0.8)};
    text-align:left;
    line-height:2em;
`
export const Title = styled.h2`
    font-size:24px;
    font-family:${sg.Font};
    font-weight:${sg.Font700};
`
export const Header = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-content: flex-start;

    > ${Title} {
        margin-bottom:24px;
    }
`
export const CloseBtn = styled.img`
    width:max-content;
    cursor:pointer;

    @media (max-width:905px) {
        position:absolute;
        top:4px;
    }
`
export const CloseBtnContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-end;
    position:relative;    
`
export const InfoBlockContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    > ${InfoBlock.Container} {
        margin-bottom:24px;

        &:last-of-type{
            margin-bottom:0px;
        }
    }
`
export const Container = styled.div`
    margin:0 auto;
    max-width:${sg.DefaultContainerMaxWidth};
    width:100%;
    padding:${sg.CustomModalPadding};
    display:${({display = 'flex'}) => display};
    flex-direction:column;
    align-items:center;
    justify-content:center;
    box-sizing:border-box;
    border-radius:10px;
    background:white;
    position:sticky;
    top:40px;

    > ${Header} {
        margin-bottom:28px;
    }

    > ${InfoBlock.Container} {
        margin-bottom:24px;

        &:last-of-type{
            margin-bottom:0px;
        }
    }

    @media (max-width:905px) {
        max-width: 400px;
        padding: ${sg.CardMobilePadding};
    }
`
export const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index:1;
    background:rgba(0, 0, 0, 0.5);
`