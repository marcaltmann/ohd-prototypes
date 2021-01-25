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
                steps={['Step 1', 'Step 2: Media upload', 'Step 3']}
                current={current}
                onSetStep={setCurrent}
            />

            {currentChild}
        </div>
    );
}
