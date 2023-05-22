import styled, { css } from "styled-components";

const MyBox = styled.div`
    ${(props) => props.setInRight && css`
        float: right;
    `}
    ${(props) => props.setInLeft && css`
    float: left;
    `}
    ${(props) => props.setBorder && css`
        border: 2px groove;
    `}
    ${(props) => props.centerContent && css`
        aling-items: center;
        justify-content: center;
        display: flex;
    `}
    ${(props) => props.inline && css`
        display: inline-block;
    `}
`;

export default MyBox;