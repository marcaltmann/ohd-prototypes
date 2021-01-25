import { useState } from 'react';

import Stepper from './Stepper';

export default function Steps({
    children,
}) {
    const [current, setCurrent] = useState(0);

    const currentChild = children[current];

    return (
        <div>
            <Stepper
                className="mb-3"
                steps={['Schritt 1', 'Schritt 2: Medien-Upload', 'Schritt 3']}
                current={current}
                onSetStep={setCurrent}
            />

            {currentChild}
        </div>
    );
}
