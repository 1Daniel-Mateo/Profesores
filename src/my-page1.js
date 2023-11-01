import { LitElement, html } from "lit-element";
import { Router } from '@vaadin/router'; 

export class MyElement extends LitElement {
  constructor() {
    super();
    this.usuario = localStorage.getItem("username");
    this.contraseña = localStorage.getItem('password')
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
    this.usuarios = []; 
    this.usuariosFiltrados = [];
    this.identificacion = '';
    this.nombre = '';
    this.campana = '';
    this.estado = '';
    this.telefono = '';
    this.resultados = '';

    console.log(this.usuario);
    console.log(this.contraseña);
  }

  static get properties() {
    return {
      usuarios: { type: Array },
      usuariosFiltrados: { type: Array },
      identificacion: { type: String },
      nombre: { type: String },
      campana: { type: String },
      estado: { type: String },
      telefono: { type: String },
    }
  }

  registrarUsuario() {
    if (this.identificacion && this.nombre && this.campana && this.estado && this.telefono) {
      const nuevoUsuario = {
        identificacion: this.identificacion,
        nombre: this.nombre,
        campana: this.campana,
        estado: this.estado,
        telefono: this.telefono,
      };
      this.usuarios = [...this.usuarios, nuevoUsuario];

      this.identificacion = '';
      this.nombre = '';
      this.campana = '';
      this.estado = '';
      this.telefono = '';
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


  UsuariosActivos() {
    return this.usuarios.filter(usuario => usuario.estado === 'activo').length;
  }

  EstadoUsuario(index) {
    this.usuarios[index].estado = this.usuarios[index].estado === 'activo' ? 'inactivo' : 'activo';
    this.requestUpdate();
  }
  

  //filtro
  filtrarPorCampaña(e) {
    const campañaSeleccionada = e.target.value;
    if (campañaSeleccionada) {
      this.usuariosFiltrados = this.usuarios.filter(usuario => usuario.campana === campañaSeleccionada);
    } else {
      this.usuariosFiltrados = this.usuarios;
    }
    this.requestUpdate();
  }
  
  
//llamar datos

buscarDatos() {
  const numero = this.shadowRoot.querySelector("#numero").value;
  const nombre = this.shadowRoot.querySelector("#nombre").value;

  const usuarioEncontrado = this.usuarios.find(
    (usuario) => usuario.telefono === numero && usuario.nombre === nombre
  );

  if (usuarioEncontrado) {
    this.resultados = html`
      <div class="col-12 mt-3 d-flex flex-grow-1">
        <div class="h-100 bg-white border p-3">
          <h1>Usuario Encontrado</h1>
          <p><strong>Identificacion:</strong> ${usuarioEncontrado.identificacion}</p>
          <p><strong>Nombre:</strong> ${usuarioEncontrado.nombre}</p>
          <p><strong>Campaña:</strong> ${usuarioEncontrado.campana}</p>
          <p><strong>Estado:</strong> ${usuarioEncontrado.estado}</p>
          <p><strong>Telefono:</strong> ${usuarioEncontrado.telefono}</p>
        </div>
      </div>
    `;
  } else {
    this.resultados = html`
      <div class="col-12 mt-3 d-flex flex-grow-1">
        <div class="h-100 bg-white border p-3">
          <h1>Usuario no encontrado</h1>
        </div>
      </div>
    `;
  }
  this.requestUpdate();
}




  render() {
    return html`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

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
                                  <h1>${this.UsuariosActivos()}</h1>
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
                                    <h1>40</h1>
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
            <button class="btn btn-primary" type="button" @click="${this.buscarDatos}">Buscar</button>
        </div>
    </form>

    <!-- ... Mostrar resultados ... -->
    ${this.resultados}

</div>

                    <div class="col-8 d-flex flex-column" style="height: 100%; ">
                        <!-- Sección a la derecha -->
                        <div class="container-fluid">
                            <div class="page-header">
                                <div class="row align-items-center justify-content-between">
                                    <div class="col-6">
                                        <div class="d-grid gap-2 d-md-block">
                                        
                                        <!-- filtro por capaña -->
                                        <select class="form-select" @change="${this.filtrarPorCampaña}">
                                        <option value="">Todas las campañas</option>
                                        ${this.campanas.map(
                                            (campaña) => html`
                                                <option value="${campaña.nombre}">${campaña.nombre}</option>
                                            `
                                        )}
                                    </select>


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
                                            <label for="identificacion" class="form-label">Identificación</label>
                                            <input type="text" class="form-control" id="identificacion" .value="${this.identificacion}" @input="${(e) => (this.identificacion = e.target.value)}">
                                          </div>
                                          <div class="mb-3">
                                            <label for="nombre" class="form-label">Nombre</label>
                                            <input type="text" class="form-control" id="nombre" .value="${this.nombre}" @input="${(e) => (this.nombre = e.target.value)}">
                                          </div>
                                          <div class="mb-3">
                                            <label for="campana" class="form-label">Campaña</label>
                                            <select class="form-select" id="campana" @change="${(e) => (this.campana = e.target.value)}">
                                            <option value="">Seleccionar campaña</option>
                                            ${this.campanas.map(
                                              (campaña) => html`
                                                <option value="${campaña.nombre}">${campaña.nombre}</option>
                                              `
                                            )}
                                          </select>
                                          </div>
                                          <div class="mb-3">
                                            <label for="estado" class="form-label">Estado</label>
                                            <input type="text" class="form-control" id="estado" .value="${this.estado}" @input="${(e) => (this.estado = e.target.value)}">
                                          </div>
                                          <div class="mb-3">
                                            <label for="telefono" class="form-label">Teléfono</label>
                                            <input type="text" class="form-control" id="telefono" .value="${this.telefono}" @input="${(e) => (this.telefono = e.target.value)}">
                                          </div>
                                          <button type="button" class="btn btn-primary" @click="${this.registrarUsuario}">Enviar</button>
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
                                <h1>Usuarios</h1>
<table class="table table-striped table-hover table-sm">
  <thead>
    <tr>
      <th scope="col">Identificacion</th>
      <th scope="col">Nombre</th>
      <th scope="col">Campaña</th>
      <th scope="col">Estado</th>
      <th scope="col">Telefono</th>
    </tr>
  </thead>
  <tbody>
  ${this.usuarios.map(
    (usuario) => html`
      <tr>
        <td>${usuario.identificacion}</td>
        <td>${usuario.nombre}</td>
        <td>${usuario.campana}</td>
        <td>${usuario.estado}</td>
        <td>${usuario.telefono}</td>
      </tr>
    `
  )}
</tbody>
</table>
</div><br>

<div class="col-12 mt-3 d-flex flex-grow-1" style="display: ${this.campana ? 'block' : 'none'}">
  <div class="h-100 bg-white border p-3">
    <div class="table-responsive">
      <h1>Filtro por campañas</h1>
      <table class="table table-striped table-hover table-sm">
        <thead>
          <tr>
            <th scope="col">Identificacion</th>
            <th scope="col">Nombre</th>
            <th scope="col">Campaña</th>
            <th scope="col">Estado</th>
            <th scope="col">Telefono</th>
          </tr>
        </thead>
        <tbody>
          ${this.usuariosFiltrados.map(
            (usuario) => html`
              <tr>
                <td>${usuario.identificacion}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.campana}</td>
                <td>${usuario.estado}</td>
                <td>${usuario.telefono}</td>
                
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
    </div>
</div>

        `
  }
}

customElements.define('my-page1', MyElement)