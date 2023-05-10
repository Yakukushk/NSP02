<script>
export default {
    name: "Main_Contact"
}
</script>

<template>
    <div class="row">

    <div class="wrapper mt-4">
        <div class="container">
            <div class="card-body">
            <h1><strong>Contact Us</strong></h1>
            <form target="_blank" action="https://formsubmit.co/example.23A@outlook.com" method="POST" >

                <div class="form-fields">
                    <label for="name">Ім'я</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-fields">
                    <label for="surname">Прізвище</label>
                    <input type="text" id="surname" name="surname" required>
                </div>
                <div class="form-fields">
                    <label for="number">Ваш телефон</label>
                    <input type="number" id="number" name="number" max="10" required>
                </div>

                <div class="form-fields">
                    <label for="email">Пошта</label>
                    <input type="email" id="email" name="email" required>
                </div>

                <div class="form-fields">
                    <label for="message">Повідомлення</label>
                    <textarea id="message" name="message" required></textarea>
                </div>

                <button type="submit">Submit</button>

            </form>

        </div>
    </div>
    </div>
    </div>


</template>



<style>
h1 {
    font-size: 1.8rem;

    margin-bottom: 1rem;

}

.form-fields {
    margin-bottom: 1rem;
    border-color: black;
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
}

</style>