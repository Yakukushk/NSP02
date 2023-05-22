<script>
import Header_Doc from "@/components/Header_Doc.vue";

import Footer from "@/components/Footer.vue";
import Main_d0c from "@/components/Main_Doc.vue";
export default {
    name: "Document",
    components: {Footer, Main_d0c, Header_Doc}
}
</script>


<template>
    <header>
        <Header_Doc />
    </header>
  <main>
      <Main_d0c />
  </main>
  <footer>
      <Footer />
  </footer>

</template>



<style scoped>

</style>