// import all css files
import './public/assets/css/normalize.css';
import './public/assets/css/skeleton.css';
import './public/css/styles.css';

import { loadHTMLelements } from './app.js';

document.querySelector('#app').innerHTML = `
  <header id="header" class="header">
    <div class="container">
        <div class="row">
            <div class="four columns">
                <img src='./assets/imgs/logo.jpg' id="logo">
            </div>
            <div class="two columns u-pull-right">
                <ul>
                    <li class="submenu">
                            <img src="./assets/imgs/cart.png" id="img-carrito">
                            <div id="carrito">
                                    
                                    <table id="lista-carrito" class="u-full-width">
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody></tbody>
                                    </table>

                                    <a href="#" id="vaciar-carrito" class="button u-full-width">Vaciar Carrito</a>
                            </div>
                    </li>
                </ul>
            </div>
        </div> 
    </div>
  </header>
  
  <div id="hero">
      <div class="container">
          <div class="row">
                  <div class="six columns">
                      <div class="contenido-hero">
                              <h2>Aprende algo nuevo</h2>
                              <p>Todos los cursos a $15</p>
                              <form action="#" id="busqueda" method="post" class="formulario">
                                  <input class="u-full-width" type="text" placeholder="¿Que te gustaría Aprender?" id="buscador">
                                  <input type="submit" id="submit-buscador" class="submit-buscador">
                              </form>
                      </div>
                  </div>
          </div> 
      </div>
  </div>

  <div class="barra">
      <div class="container">
          <div class="row">
                  <div class="four columns icono icono1">
                      <p>20,000 Cursos en línea <br>
                      Explora  los temas más recientes</p>
                  </div>
                  <div class="four columns icono icono2">
                      <p>Instructores Expertos <br>
                      Aprende con distintos estilos</p>
                  </div>
                  <div class="four columns icono icono3">
                      <p>Acceso de por vida <br>
                      Aprende a tu ritmo</p>
                  </div>
          </div>
      </div>

  </div>

  <div id="lista-cursos" class="container">
      <h1 id="encabezado" class="encabezado">Cursos En Línea</h1>
      <div class="row">
          <div class="four columns">
              <div class="card">
                  <img src="./assets/imgs/curso1.jpg" class="imagen-curso u-full-width">
                  <div class="info-card">
                      <h4>HTML5, CSS3, JavaScript para Principiantes</h4>
                      <p>Juan Pedro</p>
                      <img src="./assets/imgs/estrellas.png">
                      <p class="precio">$200  <span class="u-pull-right ">$15</span></p>
                      <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                  </div>
              </div> <!--.card-->
          </div>
          <div class="four columns">
                  <div class="card">
                      <img src="./assets/imgs/curso2.jpg" class="imagen-curso u-full-width">
                      <div class="info-card">
                          <h4>Curso de Comida Vegetariana</h4>
                          <p>Juan Pedro</p>
                          <img src="./assets/imgs/estrellas.png">
                          <p class="precio">$200  <span class="u-pull-right ">$15</span></p>
                          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="2">Agregar Al Carrito</a>
                      </div>
                  </div>
          </div>
          <div class="four columns">
                  <div class="card">
                      <img src="./assets/imgs/curso3.jpg" class="imagen-curso u-full-width">
                      <div class="info-card">
                          <h4>Guitarra para Principiantes</h4>
                          <p>Juan Pedro</p>
                          <img src="./assets/imgs/estrellas.png">
                          <p class="precio">$200  <span class="u-pull-right ">$15</span></p>
                          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="3">Agregar Al Carrito</a>
                      </div>
                  </div> <!--.card-->
          </div>

      </div> <!--.row-->
      <div class="row">
          <div class="four columns">
              <div class="card">
                  <img src="./assets/imgs/curso4.jpg" class="imagen-curso u-full-width">
                  <div class="info-card">
                      <h4>Huerto en tu casa</h4>
                      <p>Juan Pedro</p>
                      <img src="./assets/imgs/estrellas.png">
                      <p class="precio">$200  <span class="u-pull-right ">$15</span></p>
                      <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="4">Agregar Al Carrito</a>
                  </div>
              </div> <!--.card-->
          </div>
          <div class="four columns">
                  <div class="card">
                      <img src="./assets/imgs/curso5.jpg" class="imagen-curso u-full-width">
                      <div class="info-card">
                          <h4>Decoración con productos de tu hogar</h4>
                          <p>Juan Pedro</p>
                          <img src="./assets/imgs/estrellas.png">
                          <p class="precio">$200  <span class="u-pull-right ">$15</span></p>
                          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="5">Agregar Al Carrito</a>
                      </div>
                  </div> <!--.card-->
          </div>
          <div class="four columns">
                  <div class="card">
                      <img src="./assets/imgs/curso1.jpg" class="imagen-curso u-full-width">
                      <div class="info-card">
                          <h4>Diseño Web para Principiantes</h4>
                          <p>Juan Pedro</p>
                          <img src="./assets/imgs/estrellas.png">
                          <p class="precio">$200  <span class="u-pull-right ">$15</span></p>
                          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="6">Agregar Al Carrito</a>
                      </div>
                  </div> <!--.card-->
          </div>
      </div> <!--.row-->
      <div class="row">
          <div class="four columns">
              <div class="card">
                  <img src="./assets/imgs/curso2.jpg" class="imagen-curso u-full-width">
                  <div class="info-card">
                      <h4>Comida Mexicana para principiantes</h4>
                      <p>Juan Pedro</p>
                      <img src="./assets/imgs/estrellas.png">
                      <p class="precio">$200  <span class="u-pull-right ">$15</span></p>
                      <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="7">Agregar Al Carrito</a>
                  </div>
              </div> <!--.card-->
          </div>
          <div class="four columns">
                  <div class="card">
                      <img src="./assets/imgs/curso3.jpg" class="imagen-curso u-full-width">
                      <div class="info-card">
                          <h4>Estudio Musical en tu casa</h4>
                          <p>Juan Pedro</p>
                          <img src="./assets/imgs/estrellas.png">
                          <p class="precio">$200  <span class="u-pull-right ">$15</span></p>
                          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="8">Agregar Al Carrito</a>
                      </div>
                  </div> <!--.card-->
          </div>
          <div class="four columns">
                  <div class="card">
                      <img src="./assets/imgs/curso4.jpg" class="imagen-curso u-full-width">
                      <div class="info-card">
                          <h4>Cosecha tus propias frutas y verduras</h4>
                          <p>Juan Pedro</p>
                          <img src="./assets/imgs/estrellas.png">
                          <p class="precio">$200  <span class="u-pull-right ">$15</span></p>
                          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="9">Agregar Al Carrito</a>
                      </div>
                  </div> <!--.card-->
          </div>
      </div> <!--.row-->
      <div class="row">
              <div class="four columns">
                  <div class="card">
                      <img src="./assets/imgs/curso5.jpg" class="imagen-curso u-full-width">
                      <div class="info-card">
                          <h4>Prepara galletas caseras</h4>
                          <p>Juan Pedro</p>
                          <img src="./assets/imgs/estrellas.png">
                          <p class="precio">$200  <span class="u-pull-right ">$15</span></p>
                          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="10">Agregar Al Carrito</a>
                      </div>
                  </div> <!--.card-->
              </div>
              <div class="four columns">
                      <div class="card">
                          <img src="./assets/imgs/curso1.jpg" class="imagen-curso u-full-width">
                          <div class="info-card">
                              <h4>JavaScript Moderno con ES6</h4>
                              <p>Juan Pedro</p>
                              <img src="./assets/imgs/estrellas.png">
                              <p class="precio">$200  <span class="u-pull-right ">$15</span></p>
                              <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="11">Agregar Al Carrito</a>
                          </div>
                      </div> <!--.card-->
              </div>
              <div class="four columns">
                      <div class="card">
                          <img src="./assets/imgs/curso2.jpg" class="imagen-curso u-full-width">
                          <div class="info-card">
                              <h4>100 Recetas de Comida Natural</h4>
                              <p>Juan Pedro</p>
                              <img src="./assets/imgs/estrellas.png">
                              <p class="precio">$200  <span class="u-pull-right ">$15</span></p>
                              <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="12">Agregar Al Carrito</a>
                          </div>
                      </div> <!--.card-->
              </div>
          </div> <!--.row-->
  </div>  

  <footer id="footer" class="footer">
      <div class="container">
          <div class="row">
                  <div class="four columns">
                          <nav id="principal" class="menu">
                              <a class="enlace" href="#">Para tu Negocio</a>
                              <a class="enlace" href="#">Conviertete en Instructor</a>
                              <a class="enlace" href="#">Aplicaciones Móviles</a>
                              <a class="enlace" href="#">Soporte</a>
                              <a class="enlace" href="#">Temas</a>
                          </nav>
                  </div>
                  <div class="four columns">
                          <nav id="secundaria" class="menu">
                              <a class="enlace" href="#">¿Quienes Somos?</a>
                              <a class="enlace" href="#">Empleo</a>
                              <a class="enlace" href="#">Blog</a>
                          </nav>
                  </div>
          </div>
      </div>
  </footer>
`;
