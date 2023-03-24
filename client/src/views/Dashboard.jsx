import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton';


const Dashboard = () => {
    const nav = useNavigate();
    const [storeList, setStoreList] = useState()

    const removeFromDom = (storeToDelete) => {
        setStoreList(storeList.filter((store) => store._id !== storeToDelete))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/stores')
            .then((res) => {
                setStoreList(res.data.store)
                // check that we get the data before display
                console.log(res)
            })
            .catch((err) => console.log(err));
    }, [])

    const sortedItems = () => {
        const sortedCategory = [...storeList].sort((a, b) => {
            if (a.number < b.number) {
                return -1
            }
            if (a.number > b.number) {
                return 1
            }
            return 0
        }
        )
        setStoreList(sortedCategory)
    }

    return (
        <div>
            <table className='table'>
                <tbody>
                    <tr className='text-center'>
                        <td className='font-weight-bold'>Name
                        </td>
                        <td className='font-weight-bold'>Number
                            <button className='btn btn-secondary ml-3' onClick={sortedItems}>Sort</button>
                        </td>
                        <td className='font-weight-bold'>Open</td>
                        <td className='font-weight-bold'>Remove</td>
                    </tr>
                    {storeList && storeList.map((store, indx) => (
                        <tr key={indx} className='text-center'>
                            <td><Link to={`/stores/${store._id}`}>{store.name}</Link></td>
                            <td className='p-1'>{store.number}</td>
                            <td className='p-1'>{store.open ? 'True' : 'False'}</td>
                            <td className='align-middle'>
                            {store.open ? <DeleteButton storeId={store._id} successCallback={() => removeFromDom(store._id)}/> :'' }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='d-flex'>
                <button className='btn btn-success ml-5'><Link to='/stores/new' className='text-decoration-none'>Add a Store</Link></button>
            </div>
        </div>
    )
}

export default Dashboard;