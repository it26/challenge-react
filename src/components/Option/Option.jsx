export default function Option(props) {

    return (
        <option value={props.value}>
            {props.children}
        </option>
    );
}
