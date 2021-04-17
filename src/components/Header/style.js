import styled from 'styled-components'

export const CollapsedMenu = styled.div`
    display:none;
    max-width:25px;
    width:100%;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    cursor:pointer;

    @media (max-width:905px) {
        display:flex;
    }

`
export const Icon = styled.span`
    font-size:32px;
    font-weight: 700;
    color:white;
    font-family: 'Commissioner', sans-serif;
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

    @media (max-width:905px) {
        display:none;
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

    >${CollapsedMenu} {
        margin-right:20px;
    }

    @media (max-width: 905px) {
        padding:40px 20px 0px 20px;

        > ${Icon} {
            margin-left: 0px;
        }

        >${NavMenu} {
            margin-right: 0px;
        }

        
    }
`