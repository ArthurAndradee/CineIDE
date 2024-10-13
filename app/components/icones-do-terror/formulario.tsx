/* eslint-disable @next/next/no-img-element */
import './formulario.css'

function Formulario() {
    return (
        <div>
            <h1 className='buy-tickets-title'>COMPRAR INGRESSO</h1>

            <div className='form-container'>
                <form className='form-box'>
                    <input type="text" placeholder="NOME" className="buy-ticket-input"/>
                    <input type="text" placeholder="EMAIL" className="buy-ticket-input"/>
                    <input type="text" placeholder="FILME PREFERIDO" className="buy-ticket-input"/>
                    <input type="text" placeholder="NIVEL DE CORAGEM" className="buy-ticket-input"/>
                    <button type='submit' className='submit-buy-ticket-button'>Enviar</button>
                </form>
                <div className='cat-skull-image' />
            </div>
        </div>
    );
}

export default Formulario;