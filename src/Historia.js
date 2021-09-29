import React from "react";
import './css/menu.css'
import './css/his.css'



const Historia = () => (
    
    
    <>
        <ul class="nav nav-pills">
        <nav>
      <div class="logo">Diego Alonso</div>
      <input type="checkbox" id="click"/>
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a  href="Formulario">Formulario</a></li>
        <li><a href="Footer">Footer</a></li>
        <li><a class="active" href="Historia">Historia</a></li>
        
      </ul>
    </nav>
    <div class="content">
      
    </div>
    <br/>
  
  
</ul>
<div class="card-container">
         <div class="upper-container">
            <div class="image-container">
               <img src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/69256677_1459283714229503_1682359696528244736_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=vMifhXXXgqwAX8WwKjE&_nc_ht=scontent-bog1-1.xx&oh=00050ef4deea2fa67cf9534521509925&oe=61799EAC" />
            </div>
         </div>
         <div class="lower-container">
            <div>
               <h3>Diego Alonso</h3><br/>
               <h4>Historia</h4>
            </div>
            <div>
               <p>Bueno hice esta tematica con gatos porque es
                   el animal y mas cota que mas me gusta el
                   cariño y amor que puedas aportar para un gato
                   es increiblemente grande,
               </p>
            </div>
            <div>
               <a href="#" class="btn">Ir al inicio</a>
            </div>
         </div>
      </div>
    
    
    </>
);

export default Historia;