
import Box from '@/components/Box/Box'
import Title from '../../components/Title/Title'
import Card from '@/components/Card/Card'
import Link from 'next/link';
import Button from '@/components/Button/Button'
import Text from '@/components/Text/Text'
import { useContext } from 'react';
import UsuarioContext from '../../contexts/UsuarioContext'

export default function EstadoDeLaCompra() {

    const { compraRealizadaConExito } = useContext(UsuarioContext);

    return (
        <Box paddingRight="25%" paddingLeft="25%">
            <Title>
                Estado de la compra
            </Title>
            <br />

            {compraRealizadaConExito && (
                <ul>
                    <Card>
                        <Box centerContent>
                            <Text>La compra se realizó con éxito.</Text>
                        </Box>
                        <Box centerContent>
                            <Link href="/"><Button width="100%" height="30px" id="botonEstadoDeLaCompra">Volver al catálogo</Button></Link>
                        </Box>
                        <br />
                    </Card>
                </ul>
            )}
            {!compraRealizadaConExito && (
                <Card>
                    <Box centerContent>
                        <Text>Ocurrió un error con la compra, revisá que el importe no supere el crédito disponible en tu cuenta.</Text>
                    </Box>
                    <Box centerContent>
                        <Link href="/carrito"><Button width="100%" height="30px" id="botonEstadoDeLaCompra">Volver al carrito</Button></Link>
                    </Box>
                    <br />
                </Card>
            )}


        </Box>
    )
}
