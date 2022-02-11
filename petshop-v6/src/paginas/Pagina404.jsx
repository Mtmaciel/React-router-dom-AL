import React from 'react';
import image from "../assets/img/doguito404.svg"
import  "../assets/css/404.css"

const Pagina404 = () => {

    return (
        <main className='container flex flex--centro flex--coluna'>
            <img className='doguito-imagem' src={image} alt="Imagem Doguito"/>
            <p className='naoencontrado-texto'>
                Ops, Essa pagina nao existe!
            </p>
        </main>
    );
}

export default Pagina404;