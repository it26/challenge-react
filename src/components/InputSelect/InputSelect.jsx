import MyInputSelect from "./styled";

export default function InputSelect(props) {

    return (
        <MyInputSelect onChange={props.onChange} value = {props.value} {...props}>
            {props.children}
        </MyInputSelect>
    );
}
