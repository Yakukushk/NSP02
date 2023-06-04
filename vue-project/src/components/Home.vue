<script>
import image from "./img/323344.png";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {createApp, ref} from 'vue';
import Footer from "@/components/files/Footer.vue";


const nameofCompany = "Name Company";

function Show_Image(image){
    return {
        image
    }
}



export default {
    components: {Footer},

    data: function () {
        return {
            image: image,

            selectIndexImage: 0,
            nameofCompany: nameofCompany,
            currentLanguage: ref('UA'),
            images: [
                './src/components/img/dd.png',
                './src/components/img/rozirvannya-shlyubu-06.jpg',
                './src/components/img/0bb0flkn9zvgvg9v.jpg'
            ]

        }
    },
    methods : {
        changeLanguage() {
            this.currentLanguage = this.currentLanguage === 'UA' ? 'ES' : 'UA';
            this.$i18n.locale = this.currentLanguage;

        },
        goToDocument(){
            this.$router.push('/document');
        },
        goToContact(){
            this.$router.push('/contact');
        },
        goToService(){
            this.$router.push('/service');
        },
        goToHome(){
            this.$router.push('/home')
        }
    }

}
</script>

<template>
    <div class="bg-img bg-primary opacity-90">
        <div class="dark-overlay"></div>
        <div class="header">

            <nav class="navbar">
                <a class="navbar-brand active" @click="goToHome">
                    <img :src="image" width="40" height="40" class="d-inline-block align-top mx-2 " alt="">
                    {{ $t('NameofCompany')}}
                </a>

                <div class="header-right">

                    <a class="nav-link" @click="goToService">{{ $t('OurService')}}</a>
                    <a class="nav-link" @click="goToContact">{{ $t('Contact')}}</a>
                    <a class="nav-link" @click="goToDocument">{{ $t('Document')}}</a>


                   <a class="nav-link"><span class="badge text-bg-light" @click="changeLanguage">{{ currentLanguage }}</span></a>
                </div>

            </nav>



        </div>
        <div class="bg-text pt-3">
            <h1>{{ $t('LegalTranslateH1')}}</h1>
            <h2>{{ $t('LegalTranslateH2')}}</h2>
            <h4>{{ $t('LegalTranslateH4')}}</h4>
        </div>

    </div>
    <main>
        <div class="container overflow-x-auto">
            <div class="row">
                <div class="card-1 col">
                    <div class="card-img">
                        <img src="./img/dd.png" alt="" class="mt-5" style="height: 70%; width: 70%">
                    </div>
                    <div class="card-1-txt">
                        <h6>{{ $t('TextFromImage')}}</h6>

                    </div>
                </div>
                <div class="col pt-3">
                    <div class="card-body pt-2">
                        <h5 class="card-title font-weight-bold"><b>{{ $t('MainDocH1')}}</b> </h5>

                        <p class="card-text pt-2 font-weight-light">{{ $t('MainDocP')}}
                        </p>
                        <p class="card-text pt-2 font-weight-light">
                            <strong>{{ $t('MainDocAttention')}}</strong>
                        </p>
                        <ul class="list-service">
                            <li><a href="https://mvs.gov.ua/" class="card-link">{{ $t('MainLink1')}}</a></li>
                            <li><a href="https://minjust.gov.ua/" class="card-link">{{ $t('MainLink2')}}</a></li>
                            <li><a href="https://mon.gov.ua/ua" class="card-link">{{ $t('MainLink3')}}</a></li>
                        </ul>
                    </div>
                </div>
                <hr class="mt-4">

                <div class="row mx-3 pt-2 mt-2 w-auto h-auto ">
                    <div class="col-4 ml-auto mr-auto border-right">
                        <div class="card-body pt-2">
                            <h5 class="card-title font-weight-bold"><b>{{ $t('MainCardTitle1')}}</b> </h5>
                            <p class="card-text pt-2 font-weight-light">
                                {{ $t('MainCardText1')}}
                            </p>
                        </div>
                    </div>


                    <div class="col-4  border-right">
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold"><b>{{ $t('MainCardTitle2')}}</b> </h5>
                            <p class="card-text pt-2 font-weight-light">
                                {{ $t('MainCardText2')}}
                            </p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold"><b>{{ $t('MainCardTitle3')}}</b> </h5>
                            <p class="card-text pt-2 font-weight-light">
                                {{ $t('MainCardText3')}}
                            </p>
                        </div>

                    </div>
                </div>


            </div>


        </div>
        <div class="finish-text mt-5">
            <h3><b>{{ $t('MainFinishText')}}</b></h3>
        </div>



    </main>
    <footer class="text-white text-center text-lg-start mt-4" style="background-color: #0a4275;">
        <!-- Grid container -->
        <div class="container p-4">
            <!--Grid row-->
            <div class="row">
                <!--Grid column-->
                <div class="col-lg-3 col-md-12 mb-4 mb-md-0">
                    <h5 class="text-uppercase">{{$t('FooterText')}}</h5>

                    <p>
                        {{$t('FooterCardText')}}
                    </p>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">{{$t('Mail')}}</h5>

                    <ul class="list-unstyled mb-0">
                        <li>
                            <a href="mailto:example2@hotmail.com?subject=Повідомлення&body=Доброго дня!" class="text-white">example1@hotmail.com</a>
                        </li>
                        <li>
                            <a href="mailto:example2@hotmail.com?subject=Повідомлення&body=Доброго дня!" class="text-white">example2@hotmail.com</a>
                        </li>

                    </ul>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase mb-0">{{$t('Phone')}}</h5>

                    <ul class="list-unstyled mt-2">
                        <li>
                            +38 (097)-169-3737
                        </li>
                        <li>
                            +38 (087)-123-4212
                        </li>
                        <li>
                            +38 (087)-123-4211
                        </li>

                    </ul>
                </div>
                <!--Grid column-->
            </div>
            <!--Grid row-->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            {{$t('AText')}}
            <a class="text-white" href="#">Бюро перекладів</a>
        </div>
        <!-- Copyright -->
    </footer>


</template>

<style >
@media screen and (max-width: 767px) {
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;


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

    .bg-img {
        background-image: url("./img/1039539007_0_160_3073_1888_1920x0_80_0_0_ec70e2001017764bc50cb30dda34ab0d.jpg");
        background-size: cover;
        display: block;
        position: relative;
        min-width: 70vh;
        min-height: 70vh;
    //background-position: center center; background-repeat: no-repeat;


    }

    .bg-text h1 {
        text-align: center;
        color: white;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
        position: relative;
        z-index: 2;
        font-size: 5vh;
    }

    .bg-text h2 {
        text-align: center;
        color: white;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
        padding-top: 10px;
        position: relative;
        z-index: 2;
    }

    .bg-text h4 {
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

    .header a:hover {

    }

    .header a.active {

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
    .finish-text {
        text-align: center;
    }

    body {
        font-family: "Calibri";
        display: block;
    }

    .card-img {
        padding-left: 50px;
        box-shadow: #282828;
    }



    .card-1 h6 {
        font-style: oblique;
        padding-left: 40px;
    }





    .btn {
        border: 2px solid black;
        background-color: white;
        color: black;
        /*padding: 14px 28px;*/
        font-size: 16px;
        cursor: pointer;

    }



    .info:hover {
        background: #2196F3;
        color: white;
    }

    .list-service a {
        text-decoration: none;
    }

    .border-right {
        border-right: 1px solid gainsboro;
    }
}


</style>
