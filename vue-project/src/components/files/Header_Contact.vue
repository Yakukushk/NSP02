<script>
// import {ref} from "vue";
import image from "../img/323344.png";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {ref} from "vue";
const nameofCompany = "Name Company";

function Show_Image(image){
    return {
        image,
    }
}

export default {
    data: function () {
        return {
            image: image,

            selectIndexImage: 0,
            nameofCompany: nameofCompany,
            currentLanguage: ref('UA')

        }
    },
    methods : {
        changeLanguage() {
            this.currentLanguage = this.currentLanguage === 'UA' ? 'ES' : 'UA';
            this.$i18n.locale = this.currentLanguage;

        }
    }

}


</script>


<template>
  <!-- Image and text -->
    <div class="bg-img-3 bg-primary opacity-90">
        <div class="dark-overlay-2"></div>
        <div class="header">

            <nav class="navbar">
                <a class="navbar-brand" href="../../../index.html">
                    <img :src="image" width="40" height="40" class="d-inline-block align-top mx-2 " alt="">
                    {{ $t('NameofCompany')}}
                </a>

                <div class="header-right">
                    <a class="nav-link" href="../../../service.html">{{ $t('OurService')}}</a>
                    <a class="nav-link active" href="../../../contact.html">{{ $t('Contact')}}</a>
                    <a class="nav-link" href="../../../documents.html">{{ $t('Document')}}</a>
                    <a class="nav-link" href="#" @click="changeLanguage">{{ currentLanguage }}</a>
                </div>

            </nav>



        </div>
        <div class="bg-text-2 pt-3">
            <h1>{{ $t('Contact')}}</h1>


        </div>

    </div>

</template>

<style >
* {box-sizing: border-box;}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;



}




.dark-overlay-2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
}

.bg-img-3{
    background-image: url("../img/j1g26le08m3c8fks.jpg");
    background-size: cover;
    display: block;
    position: relative;
    min-width: 55vh;
    min-height: 55vh;
    background-position: center center;
    background-repeat: no-repeat;


}
.bg-text-2 h1{
    text-align: center;
    margin-top: 10px;
    color: white;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 2;
    font-size: 13vh;
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