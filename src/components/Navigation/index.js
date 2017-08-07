import React from 'react';

import Card from './child';
import StyledNavigation from './styled';


const Navigation = props => (
    <StyledNavigation>
        {props.iconClassNames.map(className => {
            return <Card
                enter={props.enter}
                className={`${className}${className === props.active ? ' active' : ''}`}
                key={className}
            />
        })}
    </StyledNavigation>
);

export default Navigation;