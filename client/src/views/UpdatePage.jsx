import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom'

import StoreForm from '../components/StoreForm';

const UpdatePage = () => {
    const nav = useNavigate();
    const { id } = useParams();
    // removed the empty dictionary in oneStore state for image url to appear in 
    const [oneStore, setOneStore] = useState();
    const [formErrors, setFormErrors] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/stores/${id}`)
            .then((res) => {
                const store = res.data.store
                // console.log(res);
                // for (var i=0; i < 1000000000; i++){
                //     let x = i*i;
                // }
                setOneStore(store);
            })
            .catch((err) => console.log(err))
    }, [])

    const updateStore = (storeToUpdate) => {
        axios
            .put(`http://localhost:8000/api/stores/${id}`, storeToUpdate)
            .then((results) => {
                console.log(results)
                nav(`/`);
            })
            .catch((err) => {
                console.log(err)
                const errorResponse = err.response.data.error.errors
                const errorArr = []
                for(const key in errorResponse){
                    errorArr.push(errorResponse[key].message)
                    setFormErrors(errorArr);
                }
            })
    };


    return (
        <div>
            <p>Edit this store:</p>
            {/* { oneStore.title !== undefined && */}
            {oneStore && <StoreForm useForm={updateStore} store={oneStore} />}
            {formErrors && formErrors.map((val, i) => 
                <p className='text-danger'>{val}</p>)}
            {/* } */}
        </div>
    )
}

export default UpdatePage;