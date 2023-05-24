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
        image,
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
            title: "Контакт з нами",
            email: "Пошта",
            name: "Ім'я",
            surname: "Прізвище",
            message: "Повідомлення",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.676881500795!2d30.521242712029444!3d50.46574138614433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce3f6e0df7ef%3A0xf57a41c6bf30acb0!2z0YPQuy4g0JjQu9GM0LjQvdGB0LrQsNGPLCAyMCwg0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2spl!4v1683893853478!5m2!1sru!2spl",
            phoneNumber: '',
            InvalidPhoneNumber: false,

        }
    },
    methods : {
        changeLanguage() {
            this.currentLanguage = this.currentLanguage === 'UA' ? 'ES' : 'UA';
            this.$i18n.locale = this.currentLanguage;

        },
        validatePhoneNumber(){
            const dig = this.phoneNumber.replace(/\D/g, '');
            this.InvalidPhoneNumber = dig.length !== 10;
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
                <a class="navbar-brand" href="/home">
                    <img :src="image" width="40" height="40" class="d-inline-block align-top mx-2 " alt="">
                    {{ $t('NameofCompany')}}
                </a>

                <div class="header-right">
                    <a class="nav-link" href="/service">{{ $t('OurService')}}</a>
                    <a class="nav-link active" href="/contact">{{ $t('Contact')}}</a>
                    <a class="nav-link" href="/document">{{ $t('Document')}}</a>
                    <a class="nav-link"> <span class="badge" @click="changeLanguage">{{ currentLanguage }}</span></a>
                </div>

            </nav>



        </div>
        <div class="bg-text-2 pt-3">
            <h1>{{ $t('Contact')}}</h1>


        </div>

    </div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">{{$t('Tabs1')}}</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">{{$t('Tabs2')}}</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">{{$t('Tabs3')}}</button>
        </li>

    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">

            <div class="row">
                <div class="col">
                    <div class="wrapper mt-4">
                        <div class="container">
                            <div class="card-body">
                                <div class="txt-form">
                                    <h1><strong>{{$t('FormTitle')}}</strong></h1>
                                </div>
                                <form target="_blank" action="https://formsubmit.co/example.23A@outlook.com" method="POST" >

                                    <div class="form-fields">
                                        <label for="name">{{$t('Name')}}</label>
                                        <input type="text" id="name" name="name" required>
                                    </div>
                                    <div class="form-fields">
                                        <label for="surname">{{$t('Surname')}}</label>
                                        <input type="text" id="surname" name="surname" required>
                                    </div>
                                    <div class="form-fields">
                                        <label for="phone">{{ $t('Phones') }}</label>
                                        <input v-model="phoneNumber" @input="validatePhoneNumber" placeholder="">
                                        <span v-if="invalidPhoneNumber" style="color: red;">Phone number must be 10 digits</span>
                                    </div>


                                    <div class="form-fields">
                                        <label for="email">{{$t('Email')}}</label>
                                        <input type="email" id="email" name="email" required>
                                    </div>

                                    <div class="form-fields">
                                        <label for="message">{{$t('Message')}}</label>
                                        <textarea id="message" name="message" required></textarea>
                                    </div>

                                    <button type="submit">Submit</button>

                                </form>



                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">

            <div class="row w-auto h-auto mt-4 mb-2" style="text-align: center;" >
                <div class="col-12">
                    <iframe :src="mapUrl"  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>



            </div>
        </div>
        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
            <div class="col" style="text-align: center;">
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
                    <li class="mt-2">
                        <a href="mailto:example1@hotmail.com?subject=Повідомлення&body=Доброго дня!" class="text-black">example1@hotmail.com</a>
                    </li>
                    <li>
                        <a href="mailto:example2@hotmail.com?subject=Повідомлення&body=Доброго дня!" class="text-black">example2@hotmail.com</a>
                    </li>

                </ul>
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
    background-image: url("img/j1g26le08m3c8fks.jpg");
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