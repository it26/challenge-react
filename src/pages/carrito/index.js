
import Box from '@/components/Box/Box'
import Title from '../../components/Title/Title'
import Card from '@/components/Card/Card'
import Image from '@/components/Image/Image'
import Link from 'next/link';
import Button from '@/components/Button/Button'
import Bold from '@/components/Bold/Bold'
import Text from '@/components/Text/Text'
import { useContext } from 'react';
import UsuarioContext from '../../contexts/UsuarioContext'

export default function Carrito() {

  const { actualizarPrecioTotalCarrito, carrito, quitarProductoDelCarrito, precioTotalCarrito, setCarrito, credito, setCredito, setCompraRealizadaConExito, todasLasPublicaciones } = useContext(UsuarioContext);

  const handleQuitarProductoDelCarrito = (event) => {
    quitarProductoDelCarrito(event);
  };

  const handleFinalizarCompra = () => {
    setCompraRealizadaConExito(false);
    if (credito >= precioTotalCarrito) {
      setCompraRealizadaConExito(true);
      setCredito(credito - precioTotalCarrito);
      setCarrito([]);
      actualizarPrecioTotalCarrito([]);
    }
  };

  return (
    <Box paddingRight="13%" paddingLeft="13%">

      <Title>
        Carrito
      </Title>

      <br />

      {carrito.map((producto) => (
        <Card inline width="100%" key={todasLasPublicaciones[producto - 1].title}>
          <Box setInLeft>
            <Image paddingLeft="15px" height="80px" width="80px" src="https://http2.mlstatic.com/D_NQ_NP_678116-MLA44429159492_122020-V.jpg"></Image>
          </Box>
          <Box marginTop="15px" marginRight="10px" marginBottom="10px" marginLeft="10px" backgroundColor="red">
            <Box setInLeft>
              <Text >{todasLasPublicaciones[producto - 1].title}</Text>
            </Box>
            <Box setInRight>
              <Text inline>$ {todasLasPublicaciones[producto - 1].price}</Text>
              <Button inline onClick={handleQuitarProductoDelCarrito} width="25px" value={producto} height="35px" marginRight="10px" marginLeft="10px">
                X
              </Button>
            </Box>
          </Box>
        </Card>
      ))}

      <Card inline marginTop="10px" marginBottom="20px" width="100%">
        <Box paddingLeft="10px" setInLeft>
          <Text><Bold>Total</Bold></Text>
        </Box>
        <Box paddingRight="10px" setInRight>
          <Text><Bold>$ {precioTotalCarrito}</Bold></Text>
        </Box>
      </Card>

      <Box inline width="100%">
        <Box setInLeft>
          <Link href="/"><Button height="35px">Volver al catálogo</Button></Link>
        </Box>
        <Box setInRight>
          <Link href="/estadoDeLaCompra"><Button onClick={handleFinalizarCompra} height="35px">Finalizar compra</Button></Link>
        </Box>
      </Box>

    </Box>
  )
}
