import styled, { css } from "styled-components";

const MyImage = styled.img`
${(props) => props.paddingLeft && css`
padding-left : ${props.paddingLeft};
`}
`;

export default MyImage;