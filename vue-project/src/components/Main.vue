

<script>
import image from './img/Дизайн без назви (12).png'

export default {
    data() {
        return {

            images: [
                './src/components/img/Дизайн без назви (12).png',
                './src/components/img/rozirvannya-shlyubu-06.jpg',
                './src/components/img/0bb0flkn9zvgvg9v.jpg'
            ]
        }
    }
}
</script>


<template>
    <main>
        <div class="row">
            <div class="card-1 col">
                <div class="card-img">
                    <img :src="images[0]" alt="" class="w-50 h-50 mt-5">
                </div>
                <div class="card-1-txt">
                    <h6>ВИТЯГ про несудимість (видається замість довідки)</h6>
                    <div class="card-1-button">
                        <button class="btn info">Дізнатися Ціни</button>
                    </div>
                </div>
            </div>
            <div class="col pt-3">
                <div class="card-body pt-2">
                    <h5 class="card-title font-weight-bold"><b>БЮРО ЛЕГАЛІЗАЦІЇ ДОКУМЕНТІВ</b> </h5>
<!--                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>-->
                    <p class="card-text pt-2 font-weight-light">Ми надаємо послуги з отримання копій та дублікатів документів (довідка про відсутність судимості,
                        свідоцтво про народження, свідоцтво про укладення шлюбу, свідоцтво про розірвання шлюбу (розлучення),
                        свідоцтво про смерть, свідоцтво про зміну прізвища, рішення суду та інше.) нового державного зразка України з усіх областей,
                        включаючи Донецьку та Луганську області, а також Республіку Крим.
                    </p>
                    <p class="card-text pt-2 font-weight-light">
                        <b>Важливо</b>: можливе отримання копій та дублікатів тільки існуючих документів з відповідними підписами,
                        апостилями і гербовими печатками державних установ або структур України, зокрема:
                    </p>
                    <ul class="list-service">
                    <li><a href="https://mvs.gov.ua/" class="card-link">МВС України</a></li>
                    <li><a href="https://minjust.gov.ua/" class="card-link">Міністерство юстиції України</a></li>
                    <li><a href="https://mon.gov.ua/ua" class="card-link">Міністерство освіти України</a></li>
                    </ul>
                </div>
            </div>
            <hr class="mt-3">
            <div class="row mx-3 pt-2">
                <div class="col-4 ml-auto mr-auto border-right">
                <div class="card-body pt-2">
                    <h5 class="card-title font-weight-bold"><b>ВИГІДНІ ЦІНИ</b> </h5>
                    <p class="card-text pt-2 font-weight-light">
                        Ціни на наші послуги ви можете знайти на сторінках сайту при виборі потрібної Вам послуги.<br>
                        Ми гарантуємо відповідність ціни і якості. В нас немає жодних додаткових або прихованих платежів.
                    </p>
                </div>
                </div>


                    <div class="col-4 border-right">
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold"><b>ОПЕРАТИВНИЙ СЕРВІС</b> </h5>
                            <p class="card-text pt-2 font-weight-light">
                                При замовленні послуг у нас, Ви можете бути впевнені, що отримаєте документи в найкоротші терміни.
                                Ми завжди гарантуємо швидкість і якість послуг, що надаються.
                                Якщо довідка про несудимість або свідоцтво про укладення шлюбу необхідна
                                Вам терміново, ми виконаємо це замовлення терміном до 15 робочих днів..
                            </p>
                        </div>
                    </div>
                <div class="col-4">
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold"><b>ВИСОКА ЯКІСТЬ ПОСЛУГ</b> </h5>
                        <p class="card-text pt-2 font-weight-light">
                            Ви можете бути впевнені, що не переплачуєте за надані послуги і отримуєте тільки те, що Вам необхідно.
                            Ми надаємо широкий спектр послуг: від отримання копії свідоцтва
                            РАГС та апостiлювання довiдок про вiдсутнiсть судимостi до проставлення апостиля та перекладу
                            різноманітних документів: диплом, додаток до диплому, трудова, та iншi документи.
                        </p>
                    </div>

                </div>



            </div>


        </div>
        <div class="finish-text mt-5">
            <h3><b>МАЮЧИ ВЕЛИКИЙ ДОСВІД З ОФОРМЛЕННЯ ДОКУМЕНТІВ, МИ ЗЕКОНОМИМО ВАШ ЧАС І ГРОШІ!</b></h3>
        </div>



    </main>
</template>

<style>
.finish-text{
    text-align: center;
}
body {
    font-family: "Calibri";
}
.card-img{
    padding-left: 50px;
    box-shadow: #282828;
}
.card-2-img{
    text-align: center;
    width: 100%;

}
.card-1 h6{
    font-style: oblique;
    padding-left: 40px;
}
.card-button button {
    /*margin-left: 5;*/

}
.card-1-button{
    text-align: left;
    padding-left: 21vh;

}
.btn {
    border: 2px solid black;
    background-color: white;
    color: black;
    /*padding: 14px 28px;*/
    font-size: 16px;
    cursor: pointer;

}
.info {
    border-color: #2196F3;
    color: dodgerblue;
}

.info:hover {
    background: #2196F3;
    color: white;
}
.list-service a{
    text-decoration: none;
}
.border-right {
    border-right: 1px solid gainsboro;
}
</style>