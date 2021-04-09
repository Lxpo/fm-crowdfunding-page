import react from 'react'
import * as styled from './style'

import Statistic from '../ui/Statistic'
import ProgressBar from '../ui/ProgressBar'

const Statistics = ({backers}) => {

    return(
        <styled.Container>
            <styled.Card>
                <styled.StatisticsContainer>
                    <Statistic value={'$89 914'} description={`of $100,000 backed`} />
                    <Statistic value={backers.toLocaleString()} description={`total backers`} />
                    <Statistic value={'56'} description={`days left`} />
                </styled.StatisticsContainer>
                <ProgressBar percentage={80}/>
            </styled.Card>
        </styled.Container>
    )

}

export default Statistics