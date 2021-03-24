import React from 'react'
import * as styled from './style'

import Icon from '../../../assets/icons/icon-bookmark.svg'

const Bookmark = () => {
    
    return (
        <styled.Bookmark>
            <styled.Icon src={Icon}/>
            <styled.Text>Bookmark</styled.Text>
        </styled.Bookmark>
    )
    
}

export default Bookmark
