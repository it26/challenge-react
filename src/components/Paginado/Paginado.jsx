import Box from "../Box/Box";
import Button from "../Button/Button";
import Text from "../Text/Text";

export default function Input(props) {

    var haySiguientePagina = props.pagina < props.paginas;
    var hayPaginaAnterior = props.pagina != 1;

    return (
        <Box centerContent marginTop="10px">
            {hayPaginaAnterior && (
                <Button inline onClick={props.handlePaginaAnterior}>
                    &lt;
                </Button>
            )}
            <Text inline >&ensp;{props.pagina}/{props.paginas}&ensp;</Text>
            {haySiguientePagina && (
                <Button inline onClick={props.handlePaginaSiguiente}>
                    &gt;
                </Button>
            )}
        </Box>
    );
}
