import styled, { css } from "styled-components";

const MyInputSelect = styled.select`
height: 30px;
background-color: #E8E8E8;
width: 120px;
${(props) => props.setInRight && css`
float: right;
`}
`;

export default MyInputSelect;