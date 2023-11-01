import { css } from "lit-element";

export default css `

body {
    background: #005AA7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FFFDE4, #005AA7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FFFDE4, #005AA7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

#formulario{
    background: #909497 ;
    height:100%; 
    width:100%; 
    padding:70px; 
    margin-top:-80px; 
    border-radius:10px;
}
.img1{
    width: 50px;
    height: 58px;
    margin-left: -400px;
    position: absolute;
    border-radius:10px;
}

.img2{
    width: 50px;
    height: 58px;
    margin-left: -400px;
    position: absolute;
    border-radius:10px;
}

#btn{
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    width:100%;
    height:100%;
    background: #909497 ;
    color:black;
}


`