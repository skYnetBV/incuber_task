import React from 'react';
import StyledInfo from './styled';

const Info = props => (
    <StyledInfo>
        <p className="user_title">
            {
                props.display === 'name'
                    ? 'My name is'
                : props.display === 'email'
                    ? 'My email address is'
                : props.display === 'birthday'
                    ? 'My birthday is'
                : props.display === 'location'
                    ? 'My address is'
                : props.display === 'phone'
                    ? 'My phone number is'
                : props.display === 'pass'
                    ? 'My password is' : null
            }
        </p>
        <p className={`user_detail ${props.display}`}>
            {
                props.display === 'name'
                    ? props.info.name
                : props.display === 'email'
                    ? props.info.email
                : props.display === 'birthday'
                    ? props.info.birthday
                : props.display === 'location'
                    ? props.info.location
                : props.display === 'phone'
                    ? props.info.phone
                : props.display === 'pass'
                    ? props.info.pass : null
            }
        </p>
    </StyledInfo>
);


export default Info;