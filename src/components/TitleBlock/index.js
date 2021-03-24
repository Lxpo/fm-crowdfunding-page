import react from 'react'
import * as styled from './style'

import Icon from '../../assets/icons/logo-mastercraft.svg'

const TitleBlock = () => {

    return(
        <styled.Container>
            <styled.ProductIcon  src={Icon}/>
            <styled.Card>
                <styled.ProductName>Mastercraft Bamboo Monitor Riser</styled.ProductName>

            </styled.Card>
        </styled.Container>
    )

}

export default TitleBlock