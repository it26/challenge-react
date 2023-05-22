import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';
import Bold from '../Bold/Bold';
import List from '../List/List'
import ListElement from '../ListElement/ListElement'
import UsuarioContext from '../../contexts/UsuarioContext';
import MyNavbar from './styled';

export default function Navbar() {

    const { userName, credito, carrito } = useContext(UsuarioContext);

    return (
        <MyNavbar>
            <List>
                <ListElement setInLeft>
                    <Link href="/"><Bold>Tienda de productos</Bold></Link>
                </ListElement>
                <ListElement>
                    {userName}
                </ListElement>
                <ListElement>
                    <Link href="/carrito"><Bold>Carrito (<span id="productosEnCarrito">{carrito.length}</span>)</Bold></Link>
                </ListElement>
                <ListElement >
                    Crédito $ {credito}
                </ListElement>
            </List>
        </MyNavbar>
    );

}