<template>
  <!-- Your mobile version template goes here -->
    <div>
        <p>{{ txt }}</p>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
    name: "MobileVersion",
    setup() {
        const txt = ref('Welcome To Mobile Version')

        onMounted(() => {
            console.log("Mobile Version");
        });

        return {
            txt
        };
    }
};
</script>

<style scoped>
/* Your styles go here */
</style>
