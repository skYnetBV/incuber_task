import React from 'react';
import StyledCard from './styled';

const Card = props => (
    <StyledCard
        onMouseEnter={props.enter}
        className={props.className}
    />
);

export default Card;