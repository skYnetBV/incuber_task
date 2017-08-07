import styled from 'styled-components';

const StyledInfo = styled.div`
    .user_title {
        color: #999;
        font-size: 18px;
    }
    
    .user_detail {
        margin: 5px;
        color: #2c2e31;
        font-size: 38px;
        text-transform: capitalize;
    }
    
    .user_detail.email,
    .user_detail.pass {
        text-transform: none;
    }
    
`;

export default StyledInfo;