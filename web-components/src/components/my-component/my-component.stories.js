export default {
  title: 'components/My-component',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};


const Template = ({}) => {
  return `<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>`;
}

export const MyComponent = Template.bind({});
