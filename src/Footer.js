import { Component } from "react";
import './css/menu.css'
import './css/footer.css'



class Footer  extends  Component{
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
        <li><a  href="/">Inicio</a></li>
        <li><a href="Formulario">Formulario</a></li>
        <li><a class="active" href="Footer">Footer</a></li>
        <li><a href="Historia">Historia</a></li>
        
      </ul>
    </nav>
  
  
</ul>
<footer>
        <div class="footer-content">
            <h3>Diego Alonso</h3>
            <p>Realizado por Diego Alonso ADSI!</p>
            <ul class="socials">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p> <span></span></p>
        </div>
    </footer>
   </>
   
        )
    }

}
export default Footer;