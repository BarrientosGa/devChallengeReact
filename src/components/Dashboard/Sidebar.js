import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import {getClient} from '../../redux/clientsSlice/clientsSlice'

const Sidebar = () => {
    const dispatch = useDispatch()
    const {clients} = useSelector(state => state.client)
    console.log(clients)
    useEffect(() => {

        dispatch(getClient())

    }, [dispatch])

    return (
        <div>
            <h1> Cliente </h1>
            {}
        </div>
    )
}

export default Sidebar