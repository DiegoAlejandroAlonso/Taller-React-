import Listarpersonajes from "./listapersonajes";
import './css/menu.css'
import './css/scri.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
<br/>
const students = [
    {
      "id" : 1,
      "name":" Nombre: Milu",    
      "genero": " Genero: M",
      "Tipo": " Raza: Criollo",
      "Describe":" Ha llegado la hora de ampliar la familia de la mano de un animal doméstico, pero aún no te decides si el afortunado será un perro, una tortuga, un pez, una mascota exótica o un gato. Te ayudamos en esta importante decisión dándote una oportuna descripción de un gato para que sepas todas las ventajas y desventajas de una mascota sin igual.",
      "img":"https://labyes.com/wp-content/uploads/2020/05/11May_LabyesNotaWeb-600x401.png"
  },
  {
    "name":" Nombre: Gemelos ",
    "img":"https://www.elespectador.com/resizer/aD3iG3SdXhOxfnhAbV-71Tow-mo=/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/PQQVB67BJFHCBMBG7COITHYMH4.jpg",
    
    
    "Tipo":" Raza: Criollo ",
    "Describe":"Puedes prepararlo añadiendo varias mantas, esto ayudará a simular el calor de la cama. Además es importante que agregues un cojín grande que pueda simular la presencia de la madre, y otros juguetes pequeños para simular la camada, así el animal se sentirá más seguro."
  
  
  
  }
  ]
  
  const Personajes = () => (
    <>
    
        <ul class="nav nav-pills">
  <li class="nav-item">
  
  </li>
  <li class="nav-item">
 
  </li>
  <li class="nav-item">
  
  </li>
  <li class="nav-item">
  
  </li>
  <nav>
      <div class="logo">Diego Alonso</div>
      <input type="checkbox" id="click"/>
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
        <li><a class="active" href="/">Inicio</a></li>
        <li><a href="Formulario">Formulario</a></li>
        <li><a href="Footer">Footer</a></li>
        <li><a href="Historia">Historia</a></li>
        
      </ul>
    </nav>
    <div class="content">
      
    </div>
    <br/>
    <br/>
    <br/>
  
  
</ul>
    {
        students.map( c => <Listarpersonajes name={c.name}   tipo={c.Tipo} describe ={c.Describe} img={c.img} apellido={c.apellido} /> )
        
       
      }
    
    
      
  
     
      
     
    </>
   
    
  )
  
  export default Personajes;