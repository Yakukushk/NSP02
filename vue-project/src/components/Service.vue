<script>
// import {ref} from "vue";
import image from "./img/323344.png";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {ref} from "vue";
import Footer from "@/components/Service/Footer.vue";
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
    <div class="bg-img-2 bg-primary opacity-90">
        <div class="dark-overlay-1"></div>
        <div class="header">

            <nav class="navbar">
                <a class="navbar-brand" href="/home">
                    <img :src="image" width="40" height="40" class="d-inline-block align-top mx-2 " alt="">
                    {{ $t('NameofCompany')}}
                </a>
                <div class="header-right">
                    <a class="nav-link active" href="/service">{{ $t('OurService')}}</a>
                    <a class="nav-link" href="/contact">{{ $t('Contact')}}</a>
                    <a class="nav-link" href="/document">{{ $t('Document')}}</a>
                    <a class="nav-link" href="#" @click="changeLanguage">{{ currentLanguage }}</a>
                </div>


            </nav>



        </div>
        <div class="bg-text-1 pt-3">
            <h1>{{$t('LegalTranslateH1S')}}</h1>


        </div>

    </div>
    <div class="accordion mt-2" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    {{$t('MainListText1') }}
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{$t('list_item_1')}}</li>
                        <li class="list-group-item">{{$t('list_item_2')}}</li>
                        <li class="list-group-item">{{$t('list_item_3')}}</li>
                        <li class="list-group-item">{{$t('list_item_4')}}</li>
                        <li class="list-group-item">{{$t('list_item_5')}}</li>
                        <li class="list-group-item">{{$t('list_item_6')}}</li>
                        <li class="list-group-item">{{$t('list_item_7')}}</li>
                        <li class="list-group-item">{{$t('list_item_8')}}</li>
                        <li class="list-group-item">{{$t('list_item_9')}}</li>

                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    {{$t('MainListText2') }}
                </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
                <div class="accordion-body">
                    {{$t('AccordingBody')}}
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    {{$t('MainListText3') }}
                </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show">
                <div class="accordion-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>{{$t('list_item3_1')}}</strong> </li>
                        <li class="list-group-item"><strong>{{$t('list_item3_2')}}</strong> </li>
                        <li class="list-group-item"><strong>{{$t('list_item3_3')}}</strong> </li>
                        <li class="list-group-item"><strong>{{$t('list_item3_4')}}</strong> </li>
                        <li class="list-group-item"><strong>{{$t('list_item3_5')}}</strong> </li>
                        <li class="list-group-item"><strong>{{$t('list_item3_6')}}</strong> </li>
                        <li class="list-group-item"><strong>{{$t('list_item3_7')}}</strong> </li>
                        <li class="list-group-item"><strong>{{$t('list_item3_8')}}</strong> </li>
                        <li class="list-group-item"><strong>{{$t('list_item3_9')}}</strong> </li>
                        <li class="list-group-item"><strong>{{$t('list_item3_10')}}</strong> </li>
                        <li class="list-group-item"><strong>{{$t('list_item3_11')}}</strong> </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
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
* {box-sizing: border-box;}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}
.dark-overlay-1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
}

.bg-img-2{
    background-image: url("img/fahnen-ukraine-eu-101.jpg");
    background-size: cover;
    display: block;
    position: relative;
    min-width: 55vh;
    min-height: 55vh;
    background-repeat: no-repeat;


}
.bg-text-1 h1{
    text-align: center;
    margin-top: 10px;
    color: white;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 2;
    font-size: 13vh;
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