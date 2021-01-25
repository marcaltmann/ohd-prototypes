import Steps from './Steps';
import Step2 from './Step2';

export default {
    component: Steps,
    title: 'Steps',
};

const Template = args => <Steps {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: [
        <h1 key="step1">Schritt 1</h1>,
        <Step2 key="step2" />,
        <h1 key="step3">Schritt 3</h1>
    ],
};
