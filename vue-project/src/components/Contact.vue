<script>

import image from "./img/323344.png";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {ref} from "vue";
import { Email } from "@/assets/smtp"
import Footer from "@/components/files/Footer.vue";
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
            fname: '',
            fsurname: '',
            femail: '',
            fsubject: '',
            fmessage: '',


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
        },
        SendMessage(){
            Email.send({
                Host : "smtp.elasticemail.com",
                Port: 2525,
                Username : "example.23A@outlook.com",
                Password : "867163176BBBD20573C08067EBA9EE61CDC7",
                To : "example.23A@outlook.com",
                From : 'example.23A@outlook.com',
                Name : this.fname,
                Subject: this.fsubject,
                Surname: this.fsurname,
                Body : "<strong>Name : </strong>" + this.fname + '<br/> ' +
                    "<strong>Surname : </strong>" + this.fsurname + '<br/> ' +
                    "<strong>Message : </strong>" + this.fmessage + '<br/> ',
            }).then((message) => alert(message));
        }

    }

}


</script>


<template>
  <!-- Image and text -->
    <div class="bg-img-3 bg-primary opacity-90">
        <div class="dark-overlay-2"></div>
        <div class="header" style="width: 100%">

            <nav class="navbar">
                <a class="navbar-brand" @click="goToHome">
                    <img :src="image" width="40" height="40" class="d-inline-block align-top mx-2 " alt="">
                    {{ $t('NameofCompany')}}
                </a>

                <div class="header-right">
                    <a class="nav-link" @click="goToService">{{ $t('OurService')}}</a>
                    <a class="nav-link active" @click="goToContact">{{ $t('Contact')}}</a>
                    <a class="nav-link" @click="goToDocument">{{ $t('Document')}}</a>
                    <a class="nav-link"><span class="badge text-bg-light" @click="changeLanguage">{{ currentLanguage }}</span></a>
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
            <div class="form-container">
            <form class="form-horizontal d-flex justify-content-center" @submit.prevent="SendMessage">
                <fieldset>
                    <legend class="text-center">Contact us</legend>

                    <!-- Name input-->
                    <div class="form-group">
                        <label class="col-md-3 control-label" for="name">Name</label>

                            <input v-model="fname" id="name" name="name" type="text" placeholder="Your name" class="form-control">

                    </div>
                    <div class="form-group">
                        <label class="col-md-3 control-label" for="name">Surname</label>

                            <input v-model="fsurname" id="name" name="name" type="text" placeholder="Your surname" class="form-control">

                    </div>

                    <!-- Email input-->
                    <div class="form-group">
                        <label class="col-md-3 control-label" for="email">Your E-mail</label>

                            <input v-model="femail" id="email" name="email" type="text" placeholder="Your email" class="form-control">

                    </div>
<!--                    Subject Input-->
                    <div class="form-group">
                        <label class="col-md-3 control label" for="subject">Your Subject</label>
                        <input v-model="fsubject" id="subject" name="subject" type="text" placeholder="Your Subject" class="form-control">
                    </div>
                    <!-- Message body -->
                    <div class="form-group">
                        <label class="col-md-3 control-label" for="message">Your message</label>

                            <textarea v-model="fmessage" class="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>

                    </div>

                    <!-- Form actions -->
                    <div class="form-group mt-3 d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                    </div>


                </fieldset>
            </form>
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
form {
    width: 100%;
}

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
@media screen and (max-width: 768px) {
    .bg-text-2 h1 {
        text-align: center;
        margin-top: 10px;
        color: white;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
        position: relative;
        z-index: 2;
        font-size: 13vh;
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
}


.header{
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
@media screen and (max-width: 480px) {
    /* Применять стили для экранов шириной до 480px (мобильные устройства) */
    .form-fields label {
        display: block;
        margin-bottom: 5px;
    }
    .form-fields input,
    .form-fields textarea {
        width: 100%;
        padding: 5px;
    }
    .form-fields span {
        display: block;
        color: red;
        margin-top: 5px;
    }
    button[type="submit"] {
        width: 100%;
    }
}




</style>