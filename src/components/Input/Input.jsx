import MyInput from "./styled";

export default function Input(props) {

    return (
        <MyInput id={props.id} onChange={props.onChange} value={props.value} placeholder = {props.placeholder} type="text">
        </MyInput>
    );
}
