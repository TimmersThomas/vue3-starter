<template>
  <div v-bind:class="{ dark: dark }">
    <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative justify-center">
          <p className="text-2xl text-black dark:text-white font-bold">{{title}}</p>
          <p className="text-gray-400 text-sm">{{subTitle}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',
  props: {
    dark: Boolean,
    title: String,
    subTitle: String
  },
  setup(props) {
    return {
      ...props
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>