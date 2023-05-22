import styled, { css } from "styled-components";

const MyListElement = styled.li`
display: inline;
color : white;
list-style-type: none;
text-align: left;
padding-right: 23px;
${(props) => props.setInLeft && css`
flex: 1;
`}
`;

export default MyListElement;