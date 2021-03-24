import react from 'react'
import style from 'styled-components'
import * as styled from './style'
import * as sg from '../../util/styleGuide' 


const ProgressBar = ({percentage}) => {

    const Bar = style.div`
        width:${percentage}%;
        background: ${sg.ModerateCyan};
        padding:6px;
        border-radius:10px;
    `   
    return(
        <styled.Wrap>
            <Bar />
        </styled.Wrap>
    )
}

export default ProgressBar