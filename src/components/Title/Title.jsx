import H1TitleCenter from "./styled";

export default function Title(props) {

    return (
        <H1TitleCenter>
            {props.children}
        </H1TitleCenter>
    );
}
