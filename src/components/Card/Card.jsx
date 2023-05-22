import Box from '../Box/Box'

export default function Card(props) {

    return (
        <Box
            backgroundColor="white"
            borderColor="gray"
            setBorder
            {...props}
        >
            {props.children}
        </Box>
    );
}