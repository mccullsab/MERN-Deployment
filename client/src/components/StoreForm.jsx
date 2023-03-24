import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StoreForm = (props) => {
    const [name, setName] = useState(props.store.name)
    const [number, setNumber] = useState(props.store.number)
    const [open, setOpen] = useState(props.store.open)

    const handleSubmit = (e) => {
        e.preventDefault();

        const storeInfo = {
            name,
            number,
            open
        };

        props.useForm(storeInfo);
    };

    useEffect(() => {
        setName(props.store.name);
        setNumber(props.store.number);
        setOpen(props.store.open);
    }, [props.store._id])

    return (
            <form onSubmit={handleSubmit}>
                <p>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </p>
                <p>
                Number:
                    <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </p>
                <p>
                Open:
                    <input
                        type="checkbox"
                        value={open}
                        onChange={(e) => setOpen(e.target.checked)}
                    />
                </p>
                
                <button className='btn btn-primary'>Submit</button>
            </form >
    )
}

export default StoreForm;