import Card, { cardPropType, cardType } from "./Card.vue";
import { Story } from "@storybook/vue3";
import { ExtractPropTypes } from "vue";




export default {
  title: "Card Stories",
  component: Card,
  argTypes: {
    title: {
      description: 'overwritten description',
      table: {
        type: {
          summary: 'something short',
          detail: 'something really really long'
        },
      },
    },
    typeCard: {
      control: {
        type: 'select', options: cardType
      }
    },

  },
};

const Template: Story<ExtractPropTypes<cardPropType>> = (_args, { argTypes }) => {
  console.log(_args, argTypes);
  return {
    props: Object.keys(argTypes),
    components: { Card },
    template: '<card v-bind="$props" />',
  }
};

export const CardDefault: Story<ExtractPropTypes<cardPropType>> = Template.bind({});
CardDefault.args = {
  dark: true,
  title: 'a title',
  subTitle: 'a subtitle',
  typeCard: cardType.normal
};

export const CardDark: Story<ExtractPropTypes<cardPropType>> = Template.bind({});
CardDark.args = {
  subTitle: 'a second subtitle'
};