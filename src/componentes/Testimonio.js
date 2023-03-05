import React from 'react'; //Esto desde 2020 no es necesario
import '../hojas-de-estilo/testimonio.css';

function Testimonio(props) { //Cuando pongo "props", le voy agregando luego propiedades a este objeto que se van a reemplazar al renderizarse.
  return (
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio' 
      src={require(`../imagenes/testimonio-${props.imagen}.png`)} 
      alt={`Foto de ${props.nombre}`} />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais} 
          </p> 
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
          </p>
        <p className='texto-testimonio'>
          "{props.testimonio}"
          </p>
      </div>
    </div>
  );
}

export default Testimonio;