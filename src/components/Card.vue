<template>
  <div v-bind:class="{ dark: dark }">
    <div
      className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative justify-center"
    >
      <p className="text-2xl text-black dark:text-white font-bold">
        {{ title }}
      </p>
      <p className="text-gray-400 text-sm">{{ subTitle }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Prop, PropType } from "vue";

export enum cardType {
  small = 'small',
  normal = 'normal',
  big = 'big'
};

export type cardPropType = {
  dark: Prop<Boolean>;
  title: Prop<String>;
  subTitle: Prop<String>;
  typeCard:  Prop<cardType>
};

export default defineComponent({
  name: "Card",
  props: {
    dark: {
      required: true,
    },
    title: {
      type: String
    },
    subTitle: String,
    typeCard: {
      type: Object as PropType<cardType>
    }
  } as cardPropType,
  setup(props) {

    return {
      ...props,
    };
  },
});
</script>