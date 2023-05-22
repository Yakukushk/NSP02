<script>
import Header_Service from "@/components/Header_Service.vue";
import Main_Service from "@/components/Main_Service.vue";
import Footer_Service from "@/components/Footer_Service.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Service",
    components: {Footer_Service,Main_Service,Header_Service,Footer}
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
        <Footer />
    </footer>
</template>


<style scoped>

</style>