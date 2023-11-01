import { LitElement, html } from "lit-element";
import styleForm from "./my-formStyles";
import { Router } from '@vaadin/router'; 

export class MyElement extends LitElement{
    constructor(){
        super();
        this.saludo="Mundo";
    }
    static get properties(){
        return{
            saludo:{
            type: String
        }
        }
    }

    navigate(route) {
      this.menuActive = false; // Desactivar el menú
      Router.go(route); // Navegar a la ruta especificada
    }


    render(){
        return html `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">



        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">  
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" @click="${() => this.navigate('/my-login')}">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page"  @click="${() => this.navigate('/my-page1')}">pagina 1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" @click="${() => this.navigate('/my-page2')}">pagina 2</a>
              </li>
            </ul>
            </div>
      </nav>
<br>

<div class="container-fluid">
    <div class="row" style="height: 100%">
        <div class="col-3 bg-secondary p-3">
            <!-- Contenido para el lado izquierdo, por ejemplo, un menú -->
            <div class="d-flex flex-column">
                <button type="button" class="btn btn-light mb-2 d-flex align-items-center"><img src="src/img/usuario.png" width="40px" height="40px" style="margin-right: 10px;">Usuarios</button>
                <button type="button" class="btn btn-light mb-2 d-flex align-items-center"><img src="src/img/usuario.png" width="40px" height="40px" style="margin-right: 10px;">Campañas</button>
                <button type="button" class="btn btn-light mb-2 d-flex align-items-center"><img src="src/img/usuario.png" width="40px" height="40px" style="margin-right: 10px;">Equipos</button>
            </div>
        </div>

      

        <div class="col-9">
        <div class="container-fluid">

                            <!-- Encabezado de la página -->
                            <section class="py-0 py-xl-5">
                            <div class="container">
                              <div class="row g-4">

                              <!-- contador de campañas activas -->
                              <div class="col-sm-6 col-xl-3">
                                <div class="d-flex justify-content-center align-items-center p-4  bg-primary bg-opacity-10 rounded-3">
                                  <span class="display-6 lh-1 text-purple mb-0 ">
                                  <h1>10m</h1>
                                </span>
                                  <div class="ms-4 h6 fw-normal mb-0">
                                    <p class="mb-0">Tiempo llamadas</p>
                                  </div>
                                </div>
                              </div>

                                <!-- contador de campañas activas -->
                                <div class="col-sm-6 col-xl-3">
                                  <div class="d-flex justify-content-center align-items-center p-4  bg-primary bg-opacity-10 rounded-3">
                                    <span class="display-6 lh-1 text-purple mb-0">
                                    <h1>10m</h1>
                                  </span>
                                    <div class="ms-4 h6 fw-normal mb-0">
                                      <p class="mb-0">Tiempo Llamada Actual</p>
                                    </div>
                                  </div>
                                </div>

                                <!-- contador de campañas activas -->
                                <div class="col-sm-6 col-xl-5">
                                  <div class="d-flex justify-content-center align-items-center p-4  bg-primary bg-opacity-10 rounded-3">
                                    <span class="display-6 p-2 lh-1 text-purple  mb-0" style="margin=10px">
                                    <h4>Campaña 1</h4>
                                  </span>
                                    <div class="ms-4 h6 fw-normal mb-0">
                                      <p class="mb-0">Campañas Activas</p>
                                    </div>
                                  </div>
                                </div>
                              

                              </div>
                            </div>
                          </section>


            <!-- Contenido para el lado derecho, que cubre el resto de la página -->
            <div class="container-fluid bg-secondary p-3" style="height: 100vh;">
                <div class="row" style="height: 100%">
                    <div class="col-4 bg-dark rounded-3"><br>
                        <!-- Pequeño formulario -->
                        <form class="p-3 bg-white rounded-3">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Numero</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Nombre</label>
                            </div>

                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button class="btn btn-primary" type="button">Buscar</button>
                            </div>
                        </form>
                    </div>

                    <div class="col-8 d-flex flex-column style="height: 100%  rounded-3">
                        <!-- Sección a la derecha -->
                        <div class="container-fluid">
                            <div class="page-header">
                                <div class="row  align-items-center justify-content-between">
                                    <div class="col-6">
                                        <div class="d-grid gap-2 d-md-block">
                                            <button class="btn btn-warning" type="button">Datos llamada</button> 
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <a class="btn btn-info btn-lg" href="javascript:;" data-bs-toggle="modal" data-bs-target="#inviteUserModal">
                                            <i class="bi-person-plus-fill me-1"></i> 10:00:00  <img src="src/img/relog.png" width="60px" height="60px" >
                                        </a>
                                    </div>
                                    
                                </div>
                            </div>

                            <!-- Nuevo recuadro debajo de la sección existente -->
                            <div class="col-12 mt-3 d-flex flex-grow-1"">
                                <div class="h-100 bg-white border p-3">

                                <!-- Recuadro 1 dentro de la seccion -->
                                <div class="bg-dark col-12 mt-3 d-flex flex-grow-1"">
                                <div class="h-100  bg-dark border p-3">
                                <p class="text-white">Contenido adicional o recuadro donde hacemos introduccion de informacion. tambien se adapta al tamaño de pantalla y se puede agregar contenido
                                sin dañar la forma</p>
                                    <p class="text-white">Bienvenidos</p>
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                </div>
                            </div>

                                     <!-- Recuadro 2 dentro de la seccion -->
                                <div class="  col-12 mt-3 d-flex flex-grow-1"">
                                <div class="h-100 bg-dark border p-3">
                                <p class="text-white">Contenido adicional o recuadro donde hacemos introduccion de informacion. tambien se adapta al tamaño de pantalla y se puede agregar contenido
                                    sin dañar la forma</p>
                                <p class="text-white">Bienvenidos</p>
                                    <br>
                                    <br>
                                </div>
                            </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        `
    }
}

customElements.define('my-page2',MyElement)