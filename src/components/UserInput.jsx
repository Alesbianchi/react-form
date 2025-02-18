import { useState } from 'react';

export default function UserInput() {

    const [firstTitle, setFirstTitle] = useState('titolo');
    const handleSubmit = event => {
        event.preventDefault();
        console.log('titolo inviato è:' + firstTitle);

    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <input type="text" value={firstTitle}
                    onChange={e => { setFirstTitle(e.target.value) }}
                />
                <button>Invia</button>
            </form>
        </>
    )
}