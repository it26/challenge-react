import styled from "styled-components";

const MyGrid = styled.div`
display: grid;
grid-template: repeat(2, 1fr) / repeat(3, 1fr);
grid-gap: 10px 15px;
`;

export default MyGrid;