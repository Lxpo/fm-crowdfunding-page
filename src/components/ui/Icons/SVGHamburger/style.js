import styled from 'styled-components'
import * as sg from '../../../util/styleGuide'

import SvgIcon from '../../../../assets/icons/icon-hamburger.svg'

export const Icon = styled.img`
    display:${({display='block'}) => display};
    width:18px;
    height:16px;

    @media (min-width:${sg.Mobile}) {
        width:14px;
        height:12px;
    }

    @media (min-width:${sg.Landscape}) {
        width:16px;
        height:14px;
    }

    @media (min-width:${sg.Tablet}) {
        width:24px;
        height:22px;
    }
`
