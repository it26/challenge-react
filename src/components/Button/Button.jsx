import MyButton from "./styled";

export default function Button(props) {

    return (
        <MyButton value={props.value} onClick={props.onClick} style={{height: props.height, width: props.width, marginRight: props.marginRight, marginLeft: props.marginLeft}}>
            {props.texto}
            {props.children}
        </MyButton>
    );
}
