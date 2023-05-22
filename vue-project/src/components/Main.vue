

<script>


export default {
    data() {
        return {

            images: [
                './src/components/img/dd.png',
                './src/components/img/rozirvannya-shlyubu-06.jpg',
                './src/components/img/0bb0flkn9zvgvg9v.jpg'
            ]
        }
    }
}
</script>


<template>
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
</template>

<style>
.finish-text{
    text-align: center;
}
body {
    font-family: "Calibri";
    display: block;
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