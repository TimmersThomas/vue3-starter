import Card from "./Card.vue";

export default {
  title: "Card Stories",
  component: Card
};

const Template = (_args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Card },
    template:
      '<card v-bind="$props" />',
  });

export const CardDefault = Template.bind({
});
CardDefault.args = {
  title: 'a title',
  subTitle: 'a subtitle'
};


export const CardDark = Template.bind({});
CardDark.args = {
  dark: true,
  title: 'an other title',
  subTitle: 'a second subtitle'
};
