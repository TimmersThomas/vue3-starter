import HelloWorld from "./HelloWorld.vue";

export default {
  title: "HelloWorld Stories",
  component: HelloWorld
};

const Template = (_args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HelloWorld },
    template:
      '<hello-world v-bind="$props" />',
  });

export const HelloWorldDefault = Template.bind({});
HelloWorldDefault.args = {
    msg: 'This is a test'
};