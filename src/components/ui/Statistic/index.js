import react from 'react'

import * as styled from './style'

const Statistic = ({value, description}) => {

    return(
       <styled.Statistic>
           <styled.Value>{value}</styled.Value>
           <styled.Description>{description}</styled.Description>
       </styled.Statistic>
    )

}

export default Statistic