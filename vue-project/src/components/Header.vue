
<script>
// import {ref} from "vue";
import image from "./img/323344.png";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
const nameofCompany = "Name Company";

function Show_Image(image){
   return {
      image
   }
}

export default {
   data: function () {
      return {
         image: image,

         selectIndexImage: 0,
         nameofCompany: nameofCompany,

      }
   }

}


</script>

<template>
   <!-- Image and text -->
<div class="bg-img bg-primary opacity-90">
    <div class="dark-overlay"></div>
    <div class="header">

      <nav class="navbar">
         <a class="navbar-brand" href="#">
            <img :src="image" width="40" height="40" class="d-inline-block align-top mx-2 " alt="">
               Name Company
         </a>

         <div class="header-right">
            <a class="active" href="../../service.html">Наші послуги</a>
            <a class="fa fa-fw fa-envelope" href="#contact">Контакт</a>
            <a href="../../documents.html">Документи</a>
            <a class="language" href="#language">UA/ES</a>
         </div>

      </nav>



    </div>
    <div class="bg-text pt-3">
        <h1>ПЕРЕКЛАДИ ТА ЛЕГАЛІЗАЦІЯ</h1>
        <h2>ЛЕГАЛІЗАЦІЯ ДОКУМЕНТІВ ДЛЯ КОНСУЛЬСТВА ІСПАНІЇ ТА КРАЇН ШЕНГЕНСЬКОЇ ЗОНИ</h2>
        <h4>Документи, апостиль, переклад для громадян України</h4>
    </div>

</div>

</template>

<style >
* {box-sizing: border-box;}

body {
   margin: 0;
   font-family: Arial, Helvetica, sans-serif;



}



header{

}
.dark-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
}

.bg-img{
    background-image: url("./img/1039539007_0_160_3073_1888_1920x0_80_0_0_ec70e2001017764bc50cb30dda34ab0d.jpg");
    background-size: cover;
    display: block;
    position: relative;
    min-width: 70vh;
    min-height: 70vh;
    //background-position: center center;
    background-repeat: no-repeat;


}
.bg-text h1{
    text-align: center;
    color: white;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 2;
}
.bg-text h2{
    text-align: center;
    color: white;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    padding-top: 10px;
    position: relative;
    z-index: 2;
}
.bg-text h4{
    text-align: center;
    color: white;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    padding-top: 30px;
    position: relative;
    z-index: 2;
}
.header {
    /*overflow: hidden;*/
    /*background-image: linear-gradient(to bottom right,#f2f2f2,#dddddd,#ffffff);*/
    /*padding: 5px 5px;*/
    /*!*content: '';*!*/
    /*!*position: absolute;*!*/
    /*top: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    /*left: 0;*/
}




.header a {
   float: left;
     color: white;
   text-align: center;
   padding: 12px;
   text-decoration: none;
   font-size: 18px;
   line-height: 25px;
   border-radius: 4px;
}

.header a.logo {
   font-size: 25px;
   font-weight: bold;
}

.header a:hover {
   /*background-color: #cbcbb4;*/
   /*color: black;*/
}

.header a.active {
   /*background-color: dodgerblue;*/
   color: white;
}

.header-right {
   float: right;
}

@media screen and (max-width: 500px) {
   .header a {
      float: none;
      display: block;
      text-align: left;

   }

   .header-right {
      float: none;
   }
}
.language{
   font-style: italic;
}



</style>