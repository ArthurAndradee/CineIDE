import React from 'react';
import './header.css'

function Header() {
    
  return (
    <header>
        <div className="bcg-header">
            <nav>
              <a href="#">HOME</a>
              <a href="#">CATALOGO</a>
              <a href="#">ASSASSINOS</a>
              <a href="#">INGRESSOS</a>
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