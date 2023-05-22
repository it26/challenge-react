import MyText from "./styled";

export default function Text(props) {

    return (
        <MyText {...props}>
            {props.children}
        </MyText>
    );
}
