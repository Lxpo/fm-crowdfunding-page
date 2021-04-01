import React, {useState} from 'react'
import * as styled from './style'
import * as sg from '../../util/styleGuide'

import Icon from '../../../assets/icons/icon-bookmark.svg'

const Bookmark = () => {

    const [isActive, setIsActive] = useState(false);
    const [text, setText] = useState('Bookmark');

    const svgActive = {
        circle: '#2F2F2F',
        path: 'white',
    }
    const textActive = {
        color: sg.DarkCyan
    }
    const containerActive = {
        background: sg.setOpacityDarkGray(0.1),
    }

    if (isActive) {
        svgActive.circle = sg.DarkCyan
        svgActive.path = 'white'
        textActive.color = sg.DarkCyan
        containerActive.background = sg.setOpacityModerateCyan(0.05)
    } else {
        svgActive.circle = '#2F2F2F'
        svgActive.path = '#B1B1B1'
        textActive.color = sg.DarkGray
        containerActive.color = sg.DarkGray
    }

    const handleBookmark = () => {    
        if (!isActive) {
            setIsActive(true)
            setText('Bookmarked')
        } else {
            setIsActive(false)
            setText('Bookmark')
        }
    }
    
    return (
        <styled.Bookmark onClick={() => handleBookmark()} style={containerActive}>
            <styled.Icon>
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <circle fill={svgActive.circle} cx="28" cy="28" r="28"/>
                        <path fill={svgActive.path} d="M23 19v18l5-5.058L33 37V19z"/>
                    </g>
                </svg>
            </styled.Icon>
            <styled.Text style={textActive}>{text}</styled.Text>
        </styled.Bookmark>
    )
    
}

export default Bookmark
