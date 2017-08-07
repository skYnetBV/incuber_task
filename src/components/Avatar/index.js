import React from 'react';
import StyledAvatar from './styled';

const Avatar = props => (
    <StyledAvatar
        onMouseOut={props.out}
        onMouseEnter={props.enter}
    >
        <img
            alt={props.altText}
            src={props.avatarUri}
            onMouseOut={props.out}
            onMouseEnter={props.enter}
        />
        <button
            onMouseOut={props.out}
            onClick={props.newUser}
            onMouseEnter={props.enter}
            className={`tooltip${props.displayTooltip ? ' active' : ''}`}
        >
            {props.text}
        </button>
    </StyledAvatar>
);


export default Avatar;