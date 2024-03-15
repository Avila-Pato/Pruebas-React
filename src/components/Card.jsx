/* eslint-disable react/prop-types */
 import './Card.css';
 import { Link } from 'react-router-dom';
 export function Card ({title = "titulo de props", descripcion = "descripcion de props"}) {  //Los pros que se como sintaxis de javascript se reciven con los({title, descripcion})
    return (
        <div className="Card">
            <Link to={title}>  <h2> {title} </h2> </Link>
            <p>  {descripcion} </p>
          </div>
    )
 }
 export default Card
    /* Esta es otra manera de recibir los Objetos */ 
// export default Card

// import './Card.css';
// export function Card (props) {
//    return (


//        <div className="card">
//            <h2> {props.title} </h2>
//            <p>  {props.descripcion} </p>
//          </div>
//    )
// }


// export default Card