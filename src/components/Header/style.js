import styled from 'styled-components'
import * as sg from '../util/styleGuide'

export const NaveMenuMobileWrapper = styled.div`
    display:${({display ='none'}) => display};
    position:absolute;
    width:100%;
    height:100%;
    top:100px;

    @media (min-width:${sg.Tablet}) {
        display:none;
    }
`
export const NavMenuMobileItem = styled.li`
    padding:20px;
    box-sizing:border-box;
    background:white;
    border-top:1px solid ${sg.setOpacityDarkGray(0.2)};
    cursor:pointer;
    font-weight:${sg.Font500};
`
export const NavMenuMobile = styled.ul`
    max-width:400px;
    width:100%;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    border-radius:12px;
    overflow:auto;
    top:100px;

    > ${NavMenuMobileItem}:first-of-type{
        border-top:none;
    }
`
export const CollapsedMenu = styled.div`
    display:none;
    max-width:25px;
    width:100%;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    z-index:1;

    @media (max-width:${sg.Tablet}) {
        display:flex;
    }
`
export const Icon = styled.span`
    font-size:32px;
    font-weight: 700;
    color:white;
    font-family: 'Commissioner', sans-serif;
    z-index:1;

    @media (min-width:${sg.Mobile}) {
        font-size:22px;
    }

    @media (min-width:${sg.Landscape}) {
        font-size:24px;
    }

    @media (min-width:${sg.Tablet}) {
        font-size:32px;
    }
`
export const NavItem = styled.li`
    font-size:16px;
    font-weight: 400;

    &:hover { 
        cursor:pointer;
    }
`
export const NavMenu = styled.ul`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    list-style-type:none;
    color:white;

    > ${NavItem}{
        margin-right:24px;
    }

    @media (max-width:${sg.Tablet}) {
        display:none;
    }

`
export const Container  = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    max-width:82.5%;
    margin:0 auto;
    width: 100%;
    position: relative;
    z-index:1;
    padding:55px 60px 0px 60px;
    box-sizing: border-box;
    font-family: 'Commissioner', sans-serif;

    @media (min-width: ${sg.Mobile}) {
        max-width:85%;
        width:100%;
        margin:0 auto;
        padding:20px 0px 0px 0px;
    }       

    @media (min-width: ${sg.Tablet}) {
        max-width:85%;
        width:100%;
        margin:0 auto;
        padding:32px 0px 0px 0px;
    }       

    @media (min-width: ${sg.Laptop}) {
        max-width:85%;
        width:100%;
        margin:0 auto;
        padding:50px 0px 0px 0px;
    }      
    
    @media (min-width: ${sg.Desktop}) {
        max-width:76.5%;
        width:100%;
        margin:0 auto;
        padding:50px 0px 0px 0px;
    }  
`

// You were fixing responsive styles of header, banner and content

