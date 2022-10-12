import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const RideForm = ({create}) => {
    const [ride, setRide] = useState({
        number: '',
        date: '',
        price: '',
        car: '',
        driver: ''
    })

    const addNewRide = (e) => {
        e.preventDefault()
        const newRide = {
            ...ride, id: Date.now()
        }
        create(newRide)
        setRide({
            number: '',
            date: '',
            price: '',
            car: '',
            driver: ''
        })
    }

    return (
        <form style={{display: 'flex', flexDirection: 'column'}}>
            <MyInput
                value={ride.date}
                onChange={e => setRide({...ride, date: e.target.value})}
                type="text"
                placeholder="Дата"
            />
            <MyInput
                value={ride.driver}
                onChange={e => setRide({...ride, driver: e.target.value})}
                type="text"
                placeholder="Водитель"
            />
            <MyInput
                value={ride.car}
                onChange={e => setRide({...ride, car: e.target.value})}
                type="text"
                placeholder="Авто"
            />
            <MyInput
                value={ride.number}
                onChange={e => setRide({...ride, number: e.target.value})}
                type="text"
                placeholder="Номер"
            />
            <MyInput
                value={ride.price}
                onChange={e => setRide({...ride, price: e.target.value})}
                type="text"
                placeholder="Cтоимость"
            />
            <MyButton onClick={addNewRide} style={{backgroundColor: 'lightgrey'}}>Добавить поездку</MyButton>
        </form>
    )
}

export default RideForm