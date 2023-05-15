
<script>
export default {
    name: "Main_Contact",
   data() {
        return{
            title: "Контакт з нами",
            email: "Пошта",
            name: "Ім'я",
            surname: "Прізвище",
            message: "Повідомлення",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.676881500795!2d30.521242712029444!3d50.46574138614433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce3f6e0df7ef%3A0xf57a41c6bf30acb0!2z0YPQuy4g0JjQu9GM0LjQvdGB0LrQsNGPLCAyMCwg0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2spl!4v1683893853478!5m2!1sru!2spl"
        }
   }
}
</script>

<template>

        <!-- Ваше содержимое -->

    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Форма заповнення</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Мапа</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Контакт</button>
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
                                    <h1><strong>{{title}}</strong></h1>
                                </div>
                                <form target="_blank" action="https://formsubmit.co/example.23A@outlook.com" method="POST" >

                                    <div class="form-fields">
                                        <label for="name">{{name}}</label>
                                        <input type="text" id="name" name="name" required>
                                    </div>
                                    <div class="form-fields">
                                        <label for="surname">{{surname}}</label>
                                        <input type="text" id="surname" name="surname" required>
                                    </div>
                                    <div class="form-fields">
                                        <label for="number">Ваш телефон</label>
                                        <input type="number" id="number" name="number" max="10" required>
                                    </div>

                                    <div class="form-fields">
                                        <label for="email">{{email}}</label>
                                        <input type="email" id="email" name="email" required>
                                    </div>

                                    <div class="form-fields">
                                        <label for="message">{{message}}</label>
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
                <h5 class="text-uppercase mb-0">Номера Телефонів</h5>

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
    <!-- Tabs content -->






</template>



<style>
h1 {
    font-size: 1.8rem;

    margin-bottom: 1rem;


}
.txt-form h1{
    margin-left: 70vh;
}

.form-fields {
    margin-bottom: 1rem;
    border-color: black;
    margin-left: 70vh;
}
label {
    display: block;
    margin-bottom: 4px;
    font-weight: bold;
    font-size: 0.9rem;
    /*margin-right: 20vh;*/


}
input[type="text"], input[type="email"], textarea, input[type="message"], input[type="number"], input[type="surname"] {
    border: 1px solid #ccc;
    font-size: 1rem;
    padding: 6px 10px;
    border-radius: 4px;
    text-shadow: #282828;
}
body { display: block }
button[type="submit"] {
    background: rgb(6,14,131);
    background: linear-gradient(0deg, rgba(6,14,131,1) 0%, rgba(12,25,180,1) 100%);
    border: none;
    color: white;
    font-size: 0.8rem;
    border-radius: 4px;
    padding: 8px 12px;
    font-weight: 500;
    margin-left: 70vh;
}

</style>