import { useState } from 'react';

export default function UserInput() {

    const [firstTitle, setFirstTitle] = useState('titolo');

    return (
        <input type="text" value={firstTitle} />
    )
}