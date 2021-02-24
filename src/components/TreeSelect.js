import DropdownTreeSelect from 'react-dropdown-tree-select';
import 'react-dropdown-tree-select/dist/styles.css';

const data = [
    {
        label: 'Firmen und Einsatzstellen',
        value: 1233,
        children: [
            {
                label: 'Deutsche Industrie-Werke AG',
                value: 567,
            },
            {
                label: 'Deutsche Reichsbahn in Österreich',
                value: 6,
            },
        ],
    },
    {
        label: 'Lager und Haftstätten',
        value: 123433,
        children: [
            {
                label: 'Gefängnisse',
                value: 5671,
            },
            {
                label: 'Ghettos',
                value: 61,
            },
        ],
    },
];

const onChange = (currentNode, selectedNodes) => {
    console.log('onChange::', currentNode, selectedNodes)
};

const onAction = (node, action) => {
    console.log('onAction::', action, node)
};

const onNodeToggle = currentNode => {
    console.log('onNodeToggle::', currentNode)
};

export default function TreeSelect() {
    return (
        <div>
            <DropdownTreeSelect
                mode="hierarchical"
                data={data}
                onChange={onChange}
                onAction={onAction}
                onNodeToggle={onNodeToggle}
                texts={{
                    placeholder: 'Auswählen…'
                }}
            />
        </div>
    );
}
