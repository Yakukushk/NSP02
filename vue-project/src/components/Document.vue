<script>
import image from "./img/323344.png";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { ref } from 'vue';
import Footer from "@/components/files/Footer.vue";
const nameofCompany = "Name Company";

function Show_Image(image){
    return {
        image
    }
}
function Show_Doc(id, name, image, describe, info){
    return {
        id, name, image, describe, info
    }
}
const doc_1 = [

    Show_Doc(
        0,
        'Витяг',
        "./src/components/img/dd.png",
        "ВИТЯГ з інформаційно-аналітичної системи “Облік інформації про притягнення особи до кримінальної відповідальності та наявності судимостей”",
        "На сьогоднішній день видається замість “довідки про несудимість” і є офіційним документом, який підтверджує відсутності судимості у фізичної особи. А також факт того, що фізична особа не перебуває у розшуку. В Україні “витяг” про відсутність судимості видає Управління інформаційно-аналітичного забезпечення МВС.”"
    )];
const doc_2 = [
    Show_Doc(
        1,
        "Довідка про відсутність судимості",
        "./src/components/img/Dovidka_priklad.jpg",
        "Довідка про відсутність судимості – це документ, який свідчить про те, що особа не залучалося до кримінальної відповідальності і не перебуває в розшуку на території України.",
        "Довідка оформляється на спеціальному бланку, де вказується його серія та номер. Документ друкується на звичайному папері формату А5 і має спеціальні форми захисту і малюнки, які унеможливлюють підробку документа."

    )
]
const doc_3 = [
    {id: 2
        , name: "Свідоцтво про "
        , image:"./src/components/img/apostil-na-svidetelstvo-o-rozhdenii.jpg"
        , describe_1:"Свідоцтво про народження – свідоцтво про державну реєстрацію акту цивільного стану – факту народження дитини."
        , describe_2:"Свідоцтво про укладення шлюбу – офіційний документ, який підтверджує, що двоє людей перебувають у шлюбі."
        , describe_3:"Свідоцтво про розлучення – офіційний документ, що видається органами реєстрації актів цивільного стану (РАЦС) на підтвердження факту розірвання шлюбу між подружжям."
        , describe_4:"Свідоцтво про смерть – це документ, що видається в якості підтвердження факту смерті громадянина при державній реєстрації в органах актів цивільного стану."
    }
]

export default {
    components: {Footer},
    data: function () {
        return {
            image: image,

            selectIndexImage: 0,
            nameofCompany: nameofCompany,
            currentLanguage: ref('UA'),
            docs_1: doc_1,
            docs_2: doc_2,
            docs_3: doc_3

        }
    },
    methods: {
        changeLanguage(){
            this.currentLanguage = this.currentLanguage === 'UA' ? 'ES' : 'UA';
            this.$i18n.locale = this.currentLanguage;S

        },
        selectDoc : function (){
            console.log("Clicked");
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
    <div class="bg-img-4 bg-primary opacity-90">
        <div class="dark-overlay-2"></div>
        <div class="header" style="width: 100%">

            <nav class="navbar">
                <a class="navbar-brand active" @click="goToHome">
                    <img :src="image" width="40" height="40" class="d-inline-block align-top mx-2 " alt="">
                    {{ $t('NameofCompany')}}
                </a>

                <div class="header-right">
                    <a class="nav-link" @click="goToService">{{ $t('OurService')}}</a>
                    <a class="nav-link" @click="goToContact">{{ $t('Contact')}}</a>
                    <a class="nav-link active" @click="goToDocument">{{ $t('Document')}}</a>
                    <a class="nav-link"><span class="badge text-bg-light" @click="changeLanguage">{{ currentLanguage }}</span></a>
                </div>

            </nav>



        </div>
        <div class="bg-text-3 pt-3">
            <h1>{{ $t('Document')}}</h1>


        </div>

    </div>
    <div class="container mt-4">
        <div class="row">
            <div class="col-4">
                <div id="list-example" class="list-group">
                    <a class="list-group-item list-group-item-action" href="#list-item-1" @click="selectDoc">{{$t('DocTitle1')}}</a>
                    <a class="list-group-item list-group-item-action" href="#list-item-2" @click="selectDoc">{{$t('DocTitle2')}}</a>
                    <a class="list-group-item list-group-item-action" href="#list-item-3" @click="selectDoc">{{$t('DocTitle3')}}</a>
                    <a class="list-group-item list-group-item-action" href="#list-item-4" @click="selectDoc">{{$t('DocTitle4')}}</a>
                </div>
            </div>
            <div class="col-8">
                <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                    <h4 id="list-item-1" class="mt-4"><strong>{{$t('DocTitle1')}}</strong></h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><img src="./img/dd.png" alt="" style="width: 50%; height: 50%"></li>
                        <li class="list-group-item"><b>{{$t('Describe')}}</b> - {{$t('DocDescribe')}}</li>
                        <li class="list-group-item"><b>{{$t('Info')}}</b> - {{$t('DocInfo')}}</li>
                    </ul>
                    <hr style="border-color: #181818;">
                    <h4 id="list-item-2" class="mt-4"><strong>{{$t('DocTitle2')}}</strong></h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><img src="./img/Dovidka_priklad.jpg" alt="" style="width: 50%; height: 50%"></li>
                        <li class="list-group-item"><b>{{$t('Describe')}}</b> - {{$t('DocDescribe2')}}</li>
                        <li class="list-group-item"><b>{{$t('Info')}}</b> - {{$t('DocInfo2')}}</li>
                    </ul>
                    <hr style="border-color: #181818;">
                    <h4 id="list-item-3" class="mt-4"><strong>{{$t('DocTitle3')}}</strong></h4>
                    <ul class="list-group list-group-flush">

                        <li class="list-group-item mt-2"><img src="https://nta-ukraine.com.ua/files/images/apostil_na_svidetelstvo_v_ukraine_1.jpg" alt=""></li>
                        <li class="list-group-item mt-4"><strong>{{$t('DocDescribeC1')}}</strong></li>
                        <li class="list-group-item mt-4"><strong>{{$t('DocDescribeC2')}}</strong></li>
                        <li class="list-group-item mt-4"><strong>{{$t('DocDescribeC3')}}</strong></li>
                        <li class="list-group-item mt-4"><strong>{{$t('DocDescribeC4')}}</strong></li>
                    </ul>
                    <hr style="border-color: #181818;">
                    <h4 id="list-item-4" class="mt-4"><strong>{{$t('DocTitle4')}}</strong></h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{$t('DocDescribeD1')}}</li>
                        <li class="list-group-item">{{$t('DocDescribeD2')}}</li>
                        <li class="list-group-item">{{$t('DocDescribeD3')}}</li>
                        <li class="list-group-item">{{$t('DocDescribeD4')}}</li>
                        <li class="list-group-item">{{$t('DocDescribeD5')}}</li>
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



<style>
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

.bg-img-4{
    background-image: url("img/30058-foreign_exchange_market-communication-business-business_development-service-1920x1080.jpg");
    background-size: cover;
    display: block;
    position: relative;
    min-width: 55vh;
    min-height: 55vh;
    /*background-position: center center;*/
    background-repeat: no-repeat;


}
.bg-text-3 h1{
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

.header {
    width: 100%;
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