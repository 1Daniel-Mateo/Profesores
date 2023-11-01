import { LitElement, html } from "lit-element";
import { Router } from '@vaadin/router'; 

export class MyElement extends LitElement {
  constructor() {
    super();
    this.profesores = [
      {
        nombre: 'nombre',
        documento: '105220042545',
        edad: 'Hernando Perez',
        materia: 'roboctics dising',
        jornada: 'mañana',
        curso: '4',
      }
    ]; 
    this.nombre = '';
    this.documento = '';
    this.edad = '';
    this.materia = '';
    this.jornada = '';
    this.curso = ''; 
  }

  static get properties() {
    return {
      profesores: { type: Array },
      nombre: { type: String },
      documento: { type: String },
      edad: { type: String },
      materia: { type: String },
      jornada: { type: String },
      curso: { type: String },
    }
  }

  
  cargarProfesores() {
    const data = localStorage.getItem('profesores');
    return data ? JSON.parse(data) : [];
  }

  guardarProfesores() {
    localStorage.setItem('profesores', JSON.stringify(this.profesores));
  }

  registrarProfesor() {
    if (this.documento && this.nombre && this.edad && this.materia && this.jornada && this.curso) {
      const nuevoProfesor = {
        documento: this.documento,
        nombre: this.nombre,
        edad: this.edad,
        materia: this.materia,
        jornada: this.jornada,
        curso: this.curso
      };
      this.profesores.push(nuevoProfesor);
      this.guardarProfesores();

      this.documento = '';
      this.nombre = '';
      this.edad = '';
      this.materia = '';
      this.jornada = '';
      this.curso = '';

      this.requestUpdate();
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
                                    <h1>0</h1>
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
                                            <label for="nombre" class="form-label">Nombre de profesor</label>
                                            <input type="text" class="form-control" id="nombre" .value="${this.nombre}" @input="${(e) => (this.nombre = e.target.value)}">
                                          </div>
                                          <div class="mb-3">
                                            <label for="identificacion" class="form-label">Documento</label>
                                            <input type="text" class="form-control" id="identificacion" .value="${this.documento}" @input="${(e) => (this.documento = e.target.value)}">
                                          </div>
                                          <div class="mb-3">
                                            <label for="campana" class="form-label">Edad</label>
                                            <input type="text" class="form-control" id="campana" .value="${this.edad}" @input="${(e) => (this.edad = e.target.value)}">
                                          </div>
                                          <div class="mb-3">
                                            <label for="telefono" class="form-label">Materia</label>
                                            <input type="text" class="form-control" id="telefono" .value="${this.materia}" @input="${(e) => (this.materia = e.target.value)}">
                                          </div>
                                          <div class="mb-3">
                                            <label for="telefono" class="form-label">Jornada</label>
                                            <input type="text" class="form-control" id="telefono" .value="${this.jornada}" @input="${(e) => (this.jornada = e.target.value)}">
                                          </div>
                                          <div class="mb-3">
                                            <label for="estado" class="form-label">Curso</label>
                                            <input type="text" class="form-control" id="estado" .value="${this.curso}" @input="${(e) => (this.curso = e.target.value)}">
                                          </div>
                                          <button type="button" class="btn btn-primary" @click="${this.registrarProfesor}">Enviar</button>
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
                                <h1>Profesores</h1>
<table class="table table-striped table-hover table-sm">
  <thead>
    <tr>
      <th scope="col">Documento</th>
      <th scope="col">Profesor</th>
      <th scope="col">Edad</th>
      <th scope="col">Materia</th>
      <th scope="col">Jornada</th>
      <th scope="col">Curso</th>
      <th scope="col">Editar</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody>
  ${this.profesores.map(
    (profesor) => html`
      <tr>
        <td>${profesor.nombre}</td>
        <td>${profesor.documento}</td>
        <td>${profesor.edad}</td>
        <td>${profesor.materia}</td>
        <td>${profesor.jornada}</td>
        <td>${profesor.curso}</td>
        <td><button class="btn btn-primary">Actualizar</button></td>
        <td><button class="btn btn-danger">Eliminar</button></td>
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

customElements.define('my-profesor', MyElement)