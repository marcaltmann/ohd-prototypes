import classNames from 'classnames';

export default function Stepper({
    steps = [],
    current = 0,
    className = '',
    onSetStep = f => f,
}) {
    return (
        <ul className={classNames('nav', 'nav-pills', className)}>
            {
                steps.map((step, index) => (
                    <li key={index} className="nav-item">
                        <a
                            className={classNames('nav-link', { 'active': index === current })}
                            onClick={(e) => { e.preventDefault(); onSetStep(index); }}
                            href="#"
                        >
                            {step}
                        </a>
                    </li>
                ))
            }
        </ul>
    );
}
