import { LitElement, html } from "lit-element";
import { Router } from '@vaadin/router'; 

export class MyElement extends LitElement {
  constructor() {
    super();
    this.campanas = [
      {
        id: '1',
        nombre: 'Campaña de robots',
        director: 'Hernando Perez',
        empresa: 'roboctics dising',
        estado: 'Activo'
      },
      {
        id: '2',
        nombre: 'Campaña de servicios claro',
        director: 'Julian Ostos',
        empresa: 'claro',
        estado: 'Inactivo'
      },
      {
        id: '3',
        nombre: 'Campaña de servicios alcatroniz',
        director: 'Robert duglas',
        empresa: 'alcatroniz',
        estado: 'activo'
      },
    ]; 
    this.id = '';
    this.nombre = '';
    this.director = '';
    this.empresa = '';
    this.estado = '';
  }

  static get properties() {
    return {
      campanas: { type: Array },
      id: { type: String },
      nombre: { type: String },
      director: { type: String },
      empresa: { type: String },
      estado: { type: String },
    }
  }

  registrarCampana() {
    if (this.id && this.nombre && this.director && this.empresa && this.estado) {
      const nuevoCampaña = {
        id: this.id,
        nombre: this.nombre,
        director: this.director,
        empresa: this.empresa,
        estado: this.estado,
      };
      this.campanas = [...this.campanas, nuevoCampaña];

      this.id = '';
      this.nombre = '';
      this.director = '';
      this.empresa = '';
      this.estado = '';
    }
  }


  abrirModal() {  
    const miModal = this.shadowRoot.querySelector("#modalRegistro");
    miModal.style.display = "block";
  }

  cerrarModal() {
    
    const miModal = this.shadowRoot.querySelector("#modalRegistro");
    miModal.style.display = "none";
  }

  navigate(location) {
    Router.go(location);
  }

//Activo

campanasActivos() {
  return this.campanas.filter(campana => campana.estado.toLowerCase() === 'activo').length;
}

  UsuariosInactivos() {
    return this.campanas.filter(campana => campana.estado === 'inactivo').length;
  }

  activarCampana(campana) {
    const index = this.campanas.indexOf(campana);
    if (index !== -1) {
      this.campanas[index].estado = "Activo"; // Actualiza el estado de la campaña
      this.requestUpdate();
    }
  }
  
  desactivarCampana(campana) {
    const index = this.campanas.indexOf(campana);
    if (index !== -1) {
      this.campanas[index].estado = "Inactivo"; // Actualiza el estado de la campaña
      this.requestUpdate();
    }
  }
  
  

  render() {
    return html`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">



        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">  
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" @click="${() => this.navigate('/')}">Login</a>
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
            <button type="button" class="btn btn-light mb-2 d-flex align-items-center" @click="${() => this.navigate('/my-page1')}"><img src="src/img/usuario.png" width="40px" height="40px" style="margin-right: 10px;">Usuarios</button>
            <button type="button" class="btn btn-light mb-2 d-flex align-items-center" @click="${() => this.navigate('/my-campanas')}"><img src="src/img/usuario.png" width="40px" height="40px" style="margin-right: 10px;">Campañas</button>
            <button type="button" class="btn btn-light mb-2 d-flex align-items-center" @click="${() => this.navigate('/my-equipo')}"><img src="src/img/usuario.png" width="40px" height="40px" style="margin-right: 10px;">Equipos</button>
            <button type="button" class="btn btn-light mb-2 d-flex align-items-center" @click="${() => this.navigate('/my-profesor')}"><img src="src/img/usuario.png" width="40px" height="40px" style="margin-right: 10px;">Profesor</button>
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
                                <div class="d-flex justify-content-center align-items-center p-4 bg-primary bg-opacity-10 rounded-3">
                                  <span class="display-6 lh-1 text-purple mb-0">
                                  <h1>40</h1>
                                </span>
                                  <div class="ms-4 h6 fw-normal mb-0">
                                    <p class="mb-0">Usuarios Conectados</p>
                                  </div>
                                </div>
                              </div>

                                <!-- contador de campañas activas -->
                                <div class="col-sm-6 col-xl-3">
                                  <div class="d-flex justify-content-center align-items-center p-4 bg-primary bg-opacity-10 rounded-3">
                                    <span class="display-6 lh-1 text-purple mb-0">
                                    <h1>10</h1>
                                  </span>
                                    <div class="ms-4 h6 fw-normal mb-0">
                                      <p class="mb-0">Usuarios Ausentes</p>
                                    </div>
                                  </div>
                                </div>

                                <!-- contador de campañas activas -->
                                <div class="col-sm-6 col-xl-3">
                                  <div class="d-flex justify-content-center align-items-center p-4 bg-primary bg-opacity-10 rounded-3">
                                    <span class="display-6 lh-1 text-purple mb-0">
                                    <h1>${this.campanasActivos()}</h1>
                                  </span>
                                    <div class="ms-4 h6 fw-normal mb-0">
                                      <p class="mb-0">Campañas Activas</p>
                                    </div>
                                  </div>
                                </div>

                                <!-- contador de campañas activas -->
                                <div class="col-sm-6 col-xl-3">
                                  <div class="d-flex justify-content-center align-items-center p-4 bg-primary bg-opacity-10 rounded-3">
                                    <span class="display-6 lh-1 text-purple mb-0">
                                    <h1>10</h1>
                                  </span>
                                    <div class="ms-4 h6 fw-normal mb-0">
                                      <p class="mb-0">Usuarios llamados</p>
                                    </div>
                                  </div>
                                </div>
                              

                              </div>
                            </div>
                          </section>

            <!-- Contenido para el lado derecho, que cubre el resto de la página -->
            <div class="container-fluid bg-secondary p-3" style="height: 100vh;">
                <div class="row" style="height: 100%">

                    <div class="col-4 bg-dark rounded-3">
    <br />
    <!-- Pequeño formulario -->
    <form class="p-3 bg-white rounded-3">
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="numero" placeholder="name@example.com" />
            <label for="floatingInput">Numero</label>
        </div>

        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="nombre" placeholder="name@example.com" />
            <label for="floatingInput">Nombre</label>
        </div>

        <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="button" @click="${this.buscarDatos}">Llamar</button>
        </div>
    </form>
</div>

                    <div class="col-8 d-flex flex-column style="height: 100%;  rounded-3">
                        <!-- Sección a la derecha -->
                        <div class="container-fluid">
                            <div class="page-header">
                                <div class="row align-items-center justify-content-between">
                                    <div class="col-6">
                                        <div class="d-grid gap-2 d-md-block">
                                            <button class="btn btn-success" type="button">Basico</button>
                                            <button class="btn btn-success" type="button">Avanzado</button>
                                        </div>
                                    </div>

                                    <div class="col-auto">
                                    <a class="btn btn-primary" href="javascript:;" @click="${this.abrirModal}">
                                      <i class="bi-person-plus-fill me-1"></i> Nuevo
                                    </a>
                                  </div>

                                  <div class="modal" id="modalRegistro" tabindex="-1" role="dialog" style="display: none;">
                                  <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Formulario de Registro</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="${this.cerrarModal}"></button>
                                      </div>
                                      <div class="modal-body">
                                        <form id="registroForm">
                                          <div class="mb-3">
                                            <label for="identificacion" class="form-label">Numero</label>
                                            <input type="text" class="form-control" id="identificacion" .value="${this.id}" @input="${(e) => (this.id = e.target.value)}">
                                          </div>
                                          <div class="mb-3">
                                            <label for="nombre" class="form-label">Nombre de campaña</label>
                                            <input type="text" class="form-control" id="nombre" .value="${this.nombre}" @input="${(e) => (this.nombre = e.target.value)}">
                                          </div>
                                          <div class="mb-3">
                                            <label for="campana" class="form-label">Director</label>
                                            <input type="text" class="form-control" id="campana" .value="${this.director}" @input="${(e) => (this.director = e.target.value)}">
                                          </div>
                                          <div class="mb-3">
                                            <label for="telefono" class="form-label">Empresa</label>
                                            <input type="text" class="form-control" id="telefono" .value="${this.empresa}" @input="${(e) => (this.empresa = e.target.value)}">
                                          </div>
                                          <div class="mb-3">
                                            <label for="estado" class="form-label">Estado</label>
                                            <input type="text" class="form-control" id="estado" .value="${this.estado}" @input="${(e) => (this.estado = e.target.value)}">
                                          </div>
                                          <button type="button" class="btn btn-primary" @click="${this.registrarCampana}">Enviar</button>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                    
                                </div>
                            </div>

                            <!-- Nuevo recuadro debajo de la sección existente -->
                            <div class="col-12 mt-3 d-flex flex-grow-1"">
                                <div class="h-100 bg-white border p-3">
                          
                               
                                <div class="table-responsive">
                                <h1>Campañas</h1>
<table class="table table-striped table-hover table-sm">
  <thead>
    <tr>
      <th scope="col">Numero</th>
      <th scope="col">Nombre de campaña</th>
      <th scope="col">Director</th>
      <th scope="col">Empresa</th>
      <th scope="col">Estado</th>
      <th scope="col">Activo</th>
      <th scope="col">Inactivo</th>
    </tr>
  </thead>
  <tbody>
  ${this.campanas.map(
    (campana) => html`
      <tr>
        <td>${campana.id}</td>
        <td>${campana.nombre}</td>
        <td>${campana.director}</td>
        <td>${campana.empresa}</td>
        <td>${campana.estado}</td>
        <td><button class="btn btn-primary" @click="${() => this.activarCampana(campana)}">Activar</button></td>
        <td><button class="btn btn-danger" @click="${() => this.desactivarCampana(campana)}">Desactivar</button></td>
      </tr>
    `
  )}
</tbody>
</table>
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

customElements.define('my-campanas', MyElement)