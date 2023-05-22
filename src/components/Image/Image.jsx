import MyImage from "./styled";

export default function Image(props) {

    return (
        <MyImage {...props} height={props.height} width={props.width} src={props.src} alt={props.alt} />
    );
}
