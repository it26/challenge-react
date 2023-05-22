import MyGrid from "./styled";

export default function Grid(props) {

    return (
        <MyGrid
            {...props}
        >
            {props.children}
        </MyGrid>
    );
}