/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import './icones-do-terror.css';
import icons from '@/app/database/icons';

type Icon = {
    nome: string;
    descricao: string;
    imagem: string;
};

function IconesDoTerror() {
    const [selectedIcon, setSelectedIcon] = useState<Icon>(icons[0]);

    return (
        <div className='icones-do-terror-container'>
            <h1 className='icones-do-terror-title'>OS ICONES DO TERROR</h1>

            <div className='icones-do-terror-nav'>
                {icons.map((icon) => (
                    <div key={icon.nome} onClick={() => setSelectedIcon(icon)} className='icon-option'>
                        {icon.nome}
                    </div>
                ))}
            </div>

            {selectedIcon && (
                <div className='selected-icon-details'>
                    <div className='selected-icon-box'>
                        <h1 className='active-terror-icon-title'>{selectedIcon.nome}</h1>
                        <div className='active-terror-icon-description'>{selectedIcon.descricao}</div>
                    </div>
                    <img className='active-terror-icon-picture' src={selectedIcon.imagem} alt={selectedIcon.nome} />
                </div>
            )}
        </div>
    );
}

export default IconesDoTerror;
