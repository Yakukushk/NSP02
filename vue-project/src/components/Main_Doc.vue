
<script>
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
    name: "Main_d0c",
    data(){
        return{
           docs_1: doc_1,
            docs_2: doc_2,
            docs_3: doc_3





        }
    }, methods : {
        selectDoc : function (){
            console.log("Clicked");
        }
    }

}
</script>


<template>
<div class="container mt-4">
    <div class="row m-auto w-auto">
        <div class="col-4">
            <div class="list-group" id="list-tab" role="tablist">
                <a class="list-group-item list-group-item-action active" id="list-doc_1-list" data-bs-toggle="list" href="#list-doc_1" role="tab" aria-controls="list-home" @click="selectDoc">{{$t('DocTitle1')}}</a>
                <a class="list-group-item list-group-item-action" id="list-doc_2-list" data-bs-toggle="list" href="#list-doc_2" role="tab" aria-controls="list-profile" @click="selectDoc" >{{$t('DocTitle2')}}</a>
                <a class="list-group-item list-group-item-action" id="list-doc_3-list" data-bs-toggle="list" href="#list-doc_3" role="tab" aria-controls="list-messages" @click="selectDoc">{{$t('DocTitle3')}} </a>
                <a class="list-group-item list-group-item-action" id="list-doc_4-list" data-bs-toggle="list" href="#list-doc_4" role="tab" aria-controls="list-settings" @click="selectDoc">{{$t('DocTitle4')}}</a>
            </div>
        </div>
        <div class="col-8">
            <div class="tab-content" id="nav-tabContent" >
                <div class="tab-pane fade show active" id="list-doc_1" role="tabpanel" aria-labelledby="list-doc_1-list" v-for="n_doc of docs_1" >
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>{{$t('Name')}}</b> - {{$t('DocTitle1')}}</li>
                        <li class="list-group-item"><img :src="n_doc.image" alt="" style="width: 50%; height: 50%"></li>
                        <li class="list-group-item"><b>{{$t('Describe')}}</b> - {{$t('DocDescribe')}}</li>
                        <li class="list-group-item"><b>{{$t('Info')}}</b> - {{$t('DocInfo')}}</li>
                    </ul>
                </div>
                <div class="tab-pane fade" id="list-doc_2" role="tabpanel" aria-labelledby="list-doc_2-list" v-for="n_doc of docs_2" >
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>{{$t('Name')}}</b> - {{$t('DocTitle2')}}</li>
                        <li class="list-group-item"><img :src="n_doc.image" alt="" style="width: 50%; height: 50%"></li>
                        <li class="list-group-item"><b>{{$t('Describe')}}</b> - {{$t('DocDescribe2')}}</li>
                        <li class="list-group-item"><b>{{$t('Info')}}</b> - {{$t('DocInfo2')}}</li>
                    </ul>
                </div>
                <div class="tab-pane fade" id="list-doc_3" role="tabpanel" aria-labelledby="list-doc_3-list" v-for="n_doc of docs_3">
                    <ul class="list-group list-group-flush">

                        <li class="list-group-item mt-2"><img :src="n_doc.image" alt=""></li>
                        <li class="list-group-item mt-4"><strong>{{$t('DocDescribeC1')}}</strong></li>
                        <li class="list-group-item mt-4"><strong>{{$t('DocDescribeC2')}}</strong></li>
                        <li class="list-group-item mt-4"><strong>{{$t('DocDescribeC3')}}</strong></li>
                        <li class="list-group-item mt-4"><strong>{{$t('DocDescribeC4')}}</strong></li>
                    </ul>
                </div>
                <div class="tab-pane fade" id="list-doc_4" role="tabpanel" aria-labelledby="list-doc_4-list">
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
</div>
</template>


<style scoped>

</style>