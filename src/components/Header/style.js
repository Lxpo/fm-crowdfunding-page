import styled from 'styled-components'

export const Icon = styled.span`
    font-size:32px;
    font-weight: 700;
    color:white;
    font-family: 'Commissioner', sans-serif;
`

export const NavItem = styled.li`
    font-size:16px;
    font-weight: 400;
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

`
export const Container  = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width: 100%;
    position: relative;
    z-index:1;
    padding:55px 60px 0px 60px;
    box-sizing: border-box;
    font-family: 'Commissioner', sans-serif;

    > ${Icon} {
        margin-left: 165px;
    }

    >${NavMenu} {
        margin-right: 170px;
    }
`