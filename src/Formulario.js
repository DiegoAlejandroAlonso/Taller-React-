import { Component } from "react";
import './css/formulario.css'
import './css/menu.css'




class Formulario  extends  Component{
    
    render(){
        
            
        
        return(
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
        <li><a class="active" href="Formulario">Formulario</a></li>
        <li><a href="Footer">Footer</a></li>
        <li><a href="Historia">Historia</a></li>
        
      </ul>
    </nav>
    <div class="content">
      
    </div>
    <br/>
  
  
</ul>
<div class="center">
      <h1>Formulario</h1>
      
      <br/>
      <form method="post">
        <div class="txt_field">
          <input type="text" required/>
          <span></span>
          <label>Nombre</label>
        </div>
        <div class="txt_field">
          <input type="password" required/>
          <span></span>
          <label>Contraseña</label>
        </div>            
       
        <br/>
        <div class="signup_link">
           <a href="HO2.html">ingresar</a>
        </div>
      </form>
    </div>
          </>
        )
    }

}
export default Formulario;