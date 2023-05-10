<script>
import Header_Contact from "@/components/Contact/Header_Contact.vue";
import Main_Contact from "@/components/Contact/Main_Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Contact",
    components: {Main_Contact,Header_Contact, Footer}
}
</script>


<template>

<header>
    <Header_Contact />
</header>
  <main>
      <Main_Contact />
  </main>
  <footer>
      <Footer />
  </footer>
</template>



<style scoped>

</style>