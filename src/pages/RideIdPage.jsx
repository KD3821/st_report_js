import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import RideService from "../API/RideService";
import Loader from "../components/UI/Loader/Loader";

const RideIdPage = () => {
    const params = useParams();
    const [ride, setRide] = useState({});
    const [fetchRideById, isRideLoading, rideIdError] = useFetching( async (id) => {
        const response = await RideService.getById(params.id);
        setRide(response.data);

    })

    useEffect( () => {
        fetchRideById(params.id);
    }, [])

    return (
        <div>
            <h1>Вы открыли страницу поездки с ID {params.id}.</h1>
            {rideIdError &&
                <h4 style={{display: 'flex', justifyContent: 'center'}}>Произошла ошибка ${rideIdError}</h4>
            }
            {isRideLoading
                ? <div style={{display: 'flex', justifyContent: 'center'}}><Loader /></div>
                : <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <span>ID{ride.id} - Заказ №{ride.number}</span>
                    <span>Водитель: {ride.driver}</span>
                    <span>Авто: {ride.car}</span>
                </div>
            }
        </div>
    );
};

export default RideIdPage;