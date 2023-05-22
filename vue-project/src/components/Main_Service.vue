<template>

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
</template>

<script>
export default {
    name: "Main_Service"
}
</script>

<style scoped>

</style>