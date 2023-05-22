import styled from "styled-components";

const MyButton = styled.button`
background-color: #1B1B1B;
color: white;
border-radius : 5px
${(props) => props.setInRight && css`
float: right;
`}
${(props) => props.inline && css`
display: inline-block;
`}
`;

export default MyButton;