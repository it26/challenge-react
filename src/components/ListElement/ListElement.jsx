import MyListElement from "./styled";

export default function ListElement(props) {

    return (
        <MyListElement {...props}>
            {props.children}
        </MyListElement>
    );
}
