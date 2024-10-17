import React from 'react';
import './header.css'

function Header() {
    
  return (
    <header>
        <div id="home" className="bcg-header">
            <nav>
              <a href="#home">HOME</a>
              <a href="#catalogo">CATALOGO</a>
              <a href="#assassinos">ASSASSINOS</a>
              <a href="#ingressos">INGRESSOS</a>
            </nav>
            <div className='title-box'>
              <h1 className='title-ide'>C<p>ine</p>IDE</h1>
              <p className="frase-header">Clássicos de terror, onde o pavor nunca sai de cena</p>
            </div>
        </div> 
    </header>

  );
};

export default Header;