import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const { storeId, successCallback } = props

    const deleteStore = (storeToDelete) => {
        axios.delete(`http://localhost:8000/api/stores/${storeId}`)
        .then((res) => {
            successCallback();
        })
        .catch((err) => console.log(err))
    }

    return(
    <button 
    className='btn btn-danger' 
    onClick={deleteStore}>
        Delete
    </button>

    )
};

export default DeleteButton;