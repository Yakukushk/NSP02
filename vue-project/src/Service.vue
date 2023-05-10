<script>
import Header_Service from "@/components/Service/Header_Service.vue";
import Main_Service from "@/components/Service/Main_Service.vue";
import Footer_Service from "@/components/Service/Footer_Service.vue";

export default {
    name: "Service",
    components: {Footer_Service,Main_Service,Header_Service}
}
</script>

<template>

<header>
    <Header_Service />
</header>
    <main>
        <Main_Service />
    </main>
    <footer>
        <Footer_Service />
    </footer>
</template>


<style scoped>

</style>