import styled from 'styled-components';

const StyledWrap = styled.div`
    padding: 20px 0;
    max-width: 730px;
    overflow: hidden;
    margin: 50px auto;
    border-radius: 3px; 
    position: relative;
    box-shadow: 0 0 20px rgba(0, 0, 0, .1);
    
    &:after {
        top: 0;
        content: '';
        width: 100%;
        z-index: -1;
        height: 130px;
        display: block;
        max-width: 730px;
        position: absolute;
        background: #f9f9f9;
        border-bottom: 1px solid rgba(0,0,0,.15);
    }
`;

export default StyledWrap;