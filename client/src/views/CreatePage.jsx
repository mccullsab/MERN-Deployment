import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

import StoreForm from '../components/StoreForm';


const CreatePage = () => {
    const nav = useNavigate();
    const [formErrors, setFormErrors] = useState([]);
    const [storeList, setStoreList] = useState([])

    const createStore = (newStore) => {
        axios
            .post('http://localhost:8000/api/stores', newStore)
            .then((results) => {
                console.log(results);
                setStoreList([...storeList, results.data.store])
                nav('/');
            })
            .catch((err) => {
                console.log(err)
                const errorResponse = err.response.data.error.errors
                const errorArr = []
                for (const key in errorResponse) {
                    // console.log(errorResponse[key].message)
                    errorArr.push(errorResponse[key].message)
                    setFormErrors(errorArr);
                }
            })
    };

    return (
        <div>
            <div className=''>
                <div className=''>
                    <h2>Store Finder</h2>
                    <Link to='/'>Go Back Home</Link>
                </div>
                <p>Add a new store!</p>
                {storeList && <StoreForm useForm={createStore} store={{ name: '', open: 'false', number: 0 }} />}
                {formErrors && formErrors.map((val, i) =>
                    <p className='text-danger'>{val}</p>)}
            </div>
        </div>
    )
}

export default CreatePage;