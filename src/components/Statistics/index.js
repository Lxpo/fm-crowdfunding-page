import React from 'react'
import * as styled from './style'
import * as data from '../../assets/data/dummyData'

import Statistic from '../ui/Statistic'
import ProgressBar from '../ui/ProgressBar'


const Statistics = ({backers}) => {

    let {amount,amountNeeded,daysLeft} = data.ProjectStatistics

    const computePercent = () => {
        let percent = (amount / amountNeeded) * 100
        return percent.toFixed(1)
    }

    return(
        <styled.Container>
            <styled.Card>
                <styled.StatisticsContainer>
                    <Statistic value={`$${amount.toLocaleString()}`} 
                                description={`of $${amountNeeded.toLocaleString()} backed`} />
                    <Statistic value={backers.toLocaleString()} 
                                description={`total backers`}/>
                    <Statistic value={daysLeft} 
                                description={`days left`}/>
                </styled.StatisticsContainer>
                <ProgressBar percentage={computePercent}/>
            </styled.Card>
        </styled.Container>
    )
}

export default Statistics