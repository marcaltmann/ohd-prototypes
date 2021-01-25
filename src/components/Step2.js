import { useState } from 'react';

const MODE_SFTP = 'sftp';
const MODE_BROWSER = 'browser';
const MODE_DISK = 'disk';

const instructions = {
    [MODE_SFTP]: 'Für SFTP machen Sie …',
    [MODE_BROWSER]: 'Für Browser machen Sie …',
    [MODE_DISK]: 'Für Datenträger machen Sie …',
}

export default function Step2() {
    const [active, setActive] = useState('sftp');

    return (
        <div>
            <h1 className="mb-3">
                Medien-Upload
            </h1>

            <div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={() => setActive(MODE_SFTP)}
                        checked={active === MODE_SFTP}
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Medien-Upload über SFTP-Tool
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        onChange={() => setActive(MODE_BROWSER)}
                        checked={active === MODE_BROWSER}
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                        Medien-Upload über Web Browser
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                        onChange={() => setActive(MODE_DISK)}
                        checked={active === MODE_DISK}
                    />
                    <label className="form-check-label" for="flexRadioDefault3">
                        Bereitstellung mittels Datenträger
                    </label>
                </div>
            </div>

            <p>
                {
                    instructions[active]
                }
            </p>
        </div>
    );
}
