import styled from 'styled-components';

const StyledCard = styled.div`
    width: 40px;
    height: 47px;
    margin: 20px 0;
    cursor: pointer;
    transition: .3s;
    background-size: 375px;
    background-image: url('https://randomuser.me/img/card_icons.png');

    &.name { background-position: 0 47px; }
    &.email { background-position: -67px 47px; }
    &.pass { background-position: -335px 47px; }
    &.phone { background-position: -270px 47px; }
    &.birthday { background-position: -134px 47px; }
    &.location { background-position: -202px 47px; }
    
    &.active { background-position-y: 0; }
    
    
`;

export default StyledCard;