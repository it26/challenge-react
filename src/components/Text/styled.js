import styled, { css } from "styled-components";

const MyText = styled.p`
${(props) => props.centerContent && css`
aling-items: center;
justify-content: center;
display: flex;
`}
${(props) => props.setInLeft && css`
float: left;
`}
${(props) => props.inline && css`
display: inline-block;
`}
`;

export default MyText;