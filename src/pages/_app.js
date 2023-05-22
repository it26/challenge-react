import '@/styles/globals.css'
import Navbar from '../components/Navbar/Navbar'
import UsuarioContext from '../contexts/UsuarioContext'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function App({ Component, pageProps }) {

  const userName = 'Juan Ignacio';
  const [credito, setCredito] = useState(50000);
  const [carrito, setCarrito] = useState([]);
  const [compraRealizadaConExito, setCompraRealizadaConExito] = useState(false);
  const [precioTotalCarrito, setPrecioTotalCarrito] = useState(0);
  const todasLasPublicaciones = require('../publicaciones.json').productos;
  const { push } = useRouter();

  function agregarProductoAlCarrito(event) {
    let carritoTemp = carrito;
    let productoAAgregar = event.target.value;
    let elProductoNoEstaEnElCarrito = !carritoTemp.includes(productoAAgregar);

    if (elProductoNoEstaEnElCarrito) {
      carritoTemp.push(productoAAgregar);
      setCarrito(carritoTemp);
      event.target.textContent = 'Ver carrito';
      actualizarNumeroDeProductosEnElCarrito();
      actualizarPrecioTotalCarrito(carritoTemp);
    } else {
      push('/carrito');
    }
  }

  function quitarProductoDelCarrito(event) {
    let carritoTemp = carrito;
    let productoAQuitar = event.target.value

    if (carritoTemp.includes(productoAQuitar)) {
      carritoTemp = carritoTemp.filter(producto => producto != productoAQuitar);
      setCarrito(carritoTemp);
      actualizarNumeroDeProductosEnElCarrito();
      actualizarPrecioTotalCarrito(carritoTemp);
    }
  }

  function actualizarPrecioTotalCarrito(carrito) {
    var precioTotal = 0;

    carrito.forEach(producto => {
      precioTotal = precioTotal + todasLasPublicaciones[producto - 1].price;
    });
    setPrecioTotalCarrito(precioTotal);
  }

  function actualizarNumeroDeProductosEnElCarrito() {
    let productosEnCarrito = document.getElementById("productosEnCarrito");
    productosEnCarrito.innerText = carrito.length;
  }

  return (
    <UsuarioContext.Provider value={{todasLasPublicaciones, setCompraRealizadaConExito, compraRealizadaConExito, actualizarPrecioTotalCarrito, setCarrito, userName, credito, carrito, agregarProductoAlCarrito, quitarProductoDelCarrito, precioTotalCarrito, setCredito }}>
      <Navbar />
      <Component {...pageProps} />
    </UsuarioContext.Provider>
  )
}
