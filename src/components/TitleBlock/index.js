import React from 'react'
import * as styled from './style'

import Button from '../ui/Button'
import Bookmark from '../ui/Bookmark'
import SVGMastercraftIcon from '../ui/Icons/SVGMastercraftIcon'

const TitleBlock = ({showModal}) => {

    return(
        <styled.Container>
            <styled.ProductIcon> 
                <SVGMastercraftIcon />
            </styled.ProductIcon>
            <styled.Card>
                <styled.ProductName>Mastercraft Bamboo Monitor Riser</styled.ProductName>
                <styled.Description>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</styled.Description>
                <styled.Control>
                    <Button text={'Back this project'} clickFunction={showModal}/>
                    <Bookmark />
                </styled.Control>
            </styled.Card>
        </styled.Container>
    )

}

export default TitleBlock