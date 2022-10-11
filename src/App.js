import React, {useRef, useState} from 'react';
import './styles/App.css';
import RideItem from "./components/RideItem";
import RideList from "./components/RideList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [rides, setRides] = useState([
        {
            id: 1,
            number: '0001',
            date: '2022-08-07',
            price: 1090,
            car: 'M129KH198',
            driver: 'Дементьев'
        },
        {
            id: 2,
            number: '0002',
            date: '2022-08-07',
            price: 1500,
            car: 'E212HB198',
            driver: 'Павлюченков'
        },
        {
            id: 3,
            number: '0003',
            date: '2022-08-07',
            price: 890,
            car: 'E975MK198',
            driver: 'Шевнин'
        },
    ])

    const [date, setDate] = useState('');
    const [driver, setDriver] = useState('');
    const [car, setCar] = useState('');
    const [number, setNumber] = useState('');
    const [price, setPrice] = useState('');



    const addNewRide = (e) => {
        e.preventDefault()
        const newRide = {
            id: Date.now(),
            date,
            driver,
            car,
            number,
            price
        }
        console.log(newRide)
        setRides([...rides, newRide])
        setDate('')
        setDriver('')
        setCar('')
        setNumber('')
        setPrice('')

    }

    return (
    <div className="App">
        <form>
            <MyInput
                value={date}
                onChange={e => setDate(e.target.value)}
                type="text"
                placeholder="Дата"
            />
            <MyInput
                value={driver}
                onChange={e => setDriver(e.target.value)}
                type="text"
                placeholder="Водитель"
            />
            <MyInput
                value={car}
                onChange={e => setCar(e.target.value)}
                type="text"
                placeholder="Авто"
            />
            <MyInput
                value={number}
                onChange={e => setNumber(e.target.value)}
                type="text"
                placeholder="Номер"
            />
            <MyInput
                value={price}
                onChange={e => setPrice(e.target.value)}
                type="text"
                placeholder="Cтоимость"
            />
            <MyButton onClick={addNewRide}>Добавить поездку</MyButton>
        </form>
        <RideList orders={rides} title="Список постов 1"/>
    </div>
    );
}

export default App;
