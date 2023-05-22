import MyList from "./styled";

export default function List(props) {

    return (
        <MyList>
            {props.children}
        </MyList>
    );
}
