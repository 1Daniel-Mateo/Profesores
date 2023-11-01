import { LitElement, html } from "lit-element";
import styleForm from "./my-formStyles";
import { Router } from '@vaadin/router'; 

export class Mylogin extends LitElement{
    constructor(){
        super();
        this.saludo="Mundo";
        this.mensaje="";
    }

    static get properties(){
        return{
            saludo:{
            type: String
        },
        mensaje:{
            type: String
         } 
        }
    }

    static get styles() {
      return[styleForm]
    }
    

    ingresarLogin(){
        var username = this.shadowRoot.querySelector('#username').value;
        var password = this.shadowRoot.querySelector('#password').value;
        var almacenado = this.shadowRoot.querySelector('#recordar').checked;
        
        if (username == null || username == undefined || username == '') {
            this.mensaje='atencion... campo nombre vacio';
            this.mostrarError()
            return false;
        } 
        if (password == null || password == undefined || password == '') {
            this.mensaje='atencion... campo contraseña vacio';
            this.mostrarError()
            return false;
        }
        else{
            if (almacenado==true) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);

                console.log('Username almacenado:', localStorage.getItem('username'));
                console.log('Password almacenado:', localStorage.getItem('password'));
                Router.go('/my-page1'); 
            }else{
                alert("error")
            }    
        }      
    }

    navigate(location) {
        Router.go(location);
    }
    
    mostrarUsuario() {
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");
        if (storedUsername && storedPassword) {
            this.usuario = storedUsername;
            this.contraseña = storedPassword;
        }
    }

    
    mostrarError(){
        return html `<div>${this.mensaje}</div>`
    }

    render(){
        return html `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

        

        <div class="position-relative">
            <div class="row d-flex justify-content-center">
                <div class="col-12 col-md-8 col-lg-6 col-xl-6">
                    <div class="card-body p-5 text-center custom-form">

                        <div class="mx-auto">

                            <img src="src/img/usuario.png" alt="" width="200px" height="200px" style="position:flex"><br><br>

                            <form id="formulario">
                              
                            <div class="form-floating mb-3">
                            <img src="src/img/user.png" alt="" class="img1">  
                                    <input type="text" id="username" class="form-control" id="floatingInput"
                                        placeholder="">
                                    <label for="floatingInput">Usuario</label>
                                </div>

                                
                                <div class="form-floating">
                                <img src="src/img/candado.png" alt="" class="img2">
                                    <input type="password" id="password" class="form-control" id="floatingPassword"
                                        placeholder="Password">
                                        
                                    <label for="floatingPassword">Contraseña</label>
                                    
                                </div><br>

                                <div class="d-flex justify-content-between align-items-center">
                                    <!-- Checkbox -->
                                    <div class="form-check mb-0">
                                        <input class="form-check-input me-2" type="checkbox" value=""
                                            id="recordar">
                                        <label class="form-check-label" for="form2Example3">
                                            Recuerdame
                                        </label>
                                    </div>
                                    <a class="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                                        href="#">
                                        Recordar contraseña
                                    </a>
                                </div>

                            </form>

                            <br>
                            <div id="btn">
                                <button type="button" id="btn" @click=${(e)=>this.ingresarLogin()}>LOGIN</button>

                                ${this.mostrarError()}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
   


        `
    }
}

customElements.define('my-login', Mylogin)