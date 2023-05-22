import Title from '../components/Title/Title'
import Box from '../components/Box/Box'
import Image from '../components/Image/Image'
import Input from '../components/Input/Input'
import InputSelect from '../components/InputSelect/InputSelect'
import Label from '../components/Label/Label'
import Option from '../components/Option/Option'
import Button from '../components/Button/Button'
import Card from '../components/Card/Card'
import Grid from '../components/Grid/Grid'
import Paginado from '../components/Paginado/Paginado'
import UsuarioContext from '../contexts/UsuarioContext'
import { useState, useContext } from 'react';

export default function Home() {

  const { agregarProductoAlCarrito, carrito, todasLasPublicaciones } = useContext(UsuarioContext);
  const publicacionesPorPagina = 6;
  const [publicaciones, setPublicaciones] = useState(todasLasPublicaciones);
  const [publicacionesAMostrar, setPublicacionesAMostrar] = useState(todasLasPublicaciones.slice(0, publicacionesPorPagina));
  const [pagina, setPagina] = useState(1);
  const [paginasTotales, setPaginasTotales] = useState(Math.ceil(todasLasPublicaciones.length / publicacionesPorPagina));

  const handleAgregarProductoAlCarrito = (event) => {
    agregarProductoAlCarrito(event);
  };

  const handlePaginaAnterior = () => {
    let paginaAnterior = pagina - 1;
    mostrarPublicacionesSegunPagina(paginaAnterior);
    setPagina(paginaAnterior);
  };

  const handlePaginaSiguiente = () => {
    let paginaSiguiente = pagina + 1;
    mostrarPublicacionesSegunPagina(paginaSiguiente);
    setPagina(paginaSiguiente);
  };

  function mostrarPublicacionesSegunPagina(pagina) {
    let publicacionesDesde = (pagina * publicacionesPorPagina) - publicacionesPorPagina;
    let publicacionesHasta = publicacionesDesde + 6;
    setPublicacionesAMostrar(publicaciones.slice(publicacionesDesde, publicacionesHasta));
  }

  const mensajeBotonPublicacion = (idProducto) => {
    if (!carrito.includes(idProducto.toString())) {
      return 'Agregar al carrito';
    }
    return 'Ver carrito';
  };

  const handleFiltrarOrdenarYGenerarPaginadoPublicaciones = () => {
    let publicacionesFiltradas = filtrarPublicaciones();
    let publicacionesFiltradasYOrdenadas = ordenarPublicaciones(publicacionesFiltradas);
    setPublicaciones(publicacionesFiltradasYOrdenadas);
    generarPaginado(publicacionesFiltradasYOrdenadas);
  }

  function filtrarPublicaciones() {
    var publicacionesFiltradas = [];
    let nombre = document.getElementById("input_nombre").value;

    if (nombre == "") {
      return todasLasPublicaciones;
    }

    todasLasPublicaciones.forEach(publicacion => {
      if (publicacion.title.toLowerCase().includes(nombre.toLowerCase()))
        publicacionesFiltradas.push(publicacion);
    });

    return publicacionesFiltradas;
  }

  function ordenarPublicaciones(publicacionesFiltradas) {

    var orden = document.getElementById("select_orden").value;

    if (orden != 'caros' && orden != 'baratos')
      return publicacionesFiltradas;


    let publicacionesOrdenadasDeMayorAMenor = ordenarPublicacionesDeMayorAMenor(publicacionesFiltradas);

    if (orden == 'caros')
      return publicacionesOrdenadasDeMayorAMenor;

    let publicacionesOrdenadasDeMenorAMayor = publicacionesOrdenadasDeMayorAMenor.reverse()
    return publicacionesOrdenadasDeMenorAMayor;
  }

  function ordenarPublicacionesDeMayorAMenor(publicaciones) {

    var publicacionesOrdenadasDeMayorAMenor = [];

    publicaciones.forEach(publicacion => {
      if (publicacionesOrdenadasDeMayorAMenor == []) {
        publicacionesOrdenadasDeMayorAMenor.push(publicacion);
      } else {
        var indice = 0;
        var seAgregoAlArray = false;
        publicacionesOrdenadasDeMayorAMenor.forEach(publicacionOrdenada => {
          if (publicacionOrdenada.price < publicacion.price && !seAgregoAlArray) {
            publicacionesOrdenadasDeMayorAMenor.splice(indice, 0, publicacion);
            seAgregoAlArray = true;
          }
          indice++;
        });
        if (!seAgregoAlArray)
          publicacionesOrdenadasDeMayorAMenor.push(publicacion);
      }
    });

    return publicacionesOrdenadasDeMayorAMenor;
  }

  function generarPaginado(publicacionesFiltradasYOrdenadas) {
    setPagina(1);
    setPaginasTotales(Math.ceil(publicacionesFiltradasYOrdenadas.length / publicacionesPorPagina));
    setPublicacionesAMostrar(publicacionesFiltradasYOrdenadas.slice(0, publicacionesPorPagina));
  }

  return (
    <Box paddingRight="13%" paddingLeft="13%">

      <Title>
        Catálogo
      </Title>

      <Box setInRight>
        <Label>ORDENAR POR</Label>
        <br />
        <InputSelect onChange={handleFiltrarOrdenarYGenerarPaginadoPublicaciones} id="select_orden">
          <Option value="default">Seleccionar</Option>
          <Option value="baratos">Más baratos</Option>
          <Option value="caros">Más caros</Option>
        </InputSelect>
      </Box>

      <br />

      <Input onChange={handleFiltrarOrdenarYGenerarPaginadoPublicaciones} id="input_nombre" placeholder="Buscar productos por nombre" />

      <br />

      <Grid>
        {publicacionesAMostrar.map((publicacion) => (
          <Card key={publicacion.title} borderRadius="10px" paddingTop="25px" marginTop="10px">
            <Box centerContent>
              <Image height="50%" width="50%" src="https://http2.mlstatic.com/D_NQ_NP_678116-MLA44429159492_122020-V.jpg"></Image>
            </Box>
            <Box centerContent paddingTop="15px">
              {publicacion.title}
            </Box>
            <Box centerContent paddingTop="15px">
              $ {publicacion.price}
            </Box>
            <br />
            <Box centerContent>
              <Button height="34px" width="85%" id={"buttonProducto" + publicacion.id} texto={mensajeBotonPublicacion(publicacion.id)} value={publicacion.id} onClick={handleAgregarProductoAlCarrito}></Button>
            </Box>
            <br />
          </Card>
        ))}
      </Grid>

      <Paginado paginas={paginasTotales} handlePaginaSiguiente={handlePaginaSiguiente} handlePaginaAnterior={handlePaginaAnterior} pagina={pagina} />

    </Box>
  )
}