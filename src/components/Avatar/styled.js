import styled from 'styled-components';

const StyledAvatar = styled.div`
    width: 150px;
    padding: 5px;
    height: 150px;
    background: #fff;
    position: relative;
    border-radius: 50%;
    margin: 0 auto 30px;
    border: 1px solid rgba(0,0,0,.25);
    
    img {
        width: 100%;
        border-radius: 50%;
    }
    
    .tooltip {
        left: 50%;
        border: 0;
        opacity: 0;
        color: #fff;
        outline: none;
        bottom: -30px;
        display: block;
        cursor: pointer;
        position: absolute;
        padding: 10px 15px;
        border-radius: 3px;
        text-decoration: none;
        background: rgba(0,0,0,.75);
        transform: translateX(-50%);
        transition: all .25s ease-out;
    }
    
    .tooltip.active {
        opacity: 1;
        bottom: -20px;
    }
`;

export default StyledAvatar;