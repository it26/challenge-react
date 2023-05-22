import MyLabel from "./styled";

export default function Label(props) {

    return (
        <MyLabel>
            {props.children}
        </MyLabel>
    );
}
