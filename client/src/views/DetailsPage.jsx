import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton';

const DetailsPage = () => {
    const [store, setStore] = useState()
    const { id } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/stores/${id}`)
            .then((res) => {
                setStore(res.data.store)
            })
            .catch((err) => console.log(err))
    }, [])

    return(
        <div>
            {store && (
                <div>
                    <p>Name: {store.name}</p>
                    <p>Store Number: {store.number}</p>
                    <p>{store.open ? 'Open' : 'Closed'}</p>
                    <br />
                    <br />
                    {/* <DeleteButton storeId = {store._id} successCallback={goBackToDashboard}/> */}
                    <Link to={`/stores/${store._id}/edit`} >Edit Store Details</Link>
                </div>
            )}
        </div>
    )
}

export default DetailsPage;