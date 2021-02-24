import TreeSelect from './TreeSelect';

export default {
    component: TreeSelect,
    title: 'TreeSelect',
};

const Template = args => <TreeSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: [
    ],
};
