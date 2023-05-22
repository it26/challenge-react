import MyBox from "./styled";

export default function Box(props) {

    return (
        <MyBox
                {...props}
            style={{
                height: props.height,
                width: props.width,
                backgroundColor: props.backgroundColor,
                border: props.border,
                borderRadius: props.borderRadius,
                borderColor: props.borderColor,
                padding: props.padding,
                paddingTop: props.paddingTop,
                paddingRight: props.paddingRight,
                paddingBottom: props.paddingBottom,
                paddingLeft: props.paddingLeft,
                margin: props.margin,
                marginTop: props.marginTop,
                marginRight: props.marginRight,
                marginBottom: props.marginBottom,
                marginLeft: props.marginLeft
            }}
        >
            {props.children}
        </MyBox>
    );
}