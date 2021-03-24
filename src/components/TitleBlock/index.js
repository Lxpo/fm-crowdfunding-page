import react from 'react'
import * as styled from './style'

import Icon from '../../assets/icons/logo-mastercraft.svg'
import Button from '../ui/Button'
import Bookmark from '../ui/Bookmark'

const TitleBlock = () => {

    return(
        <styled.Container>
            <styled.ProductIcon  src={Icon}/>
            <styled.Card>
                <styled.ProductName>Mastercraft Bamboo Monitor Riser</styled.ProductName>
                <styled.Description>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</styled.Description>
                <styled.Control>
                    <Button text={'Back this project'}/>
                    <Bookmark />
                </styled.Control>
            </styled.Card>
        </styled.Container>
    )

}

export default TitleBlock