import React, {useRef, useState} from 'react';
import './styles/App.css';
import RideList from "./components/RideList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [rides, setRides] = useState([
        { id: 1, number: '0001', date: '2022-08-07', price: 1090, car: 'M129KH198', driver: 'Дементьев'},
        { id: 2, number: '0002', date: '2022-08-07', price: 1500, car: 'E212HB198', driver: 'Павлюченков'},
        { id: 3, number: '0003', date: '2022-08-07', price: 890, car: 'E975MK198', driver: 'Шевнин'},
    ])

    const [ride, setRide] = useState({
        number: '',
        date: '',
        price: '',
        car: '',
        driver: ''
    })

    const addNewRide = (e) => {
        e.preventDefault()
        setRides([...rides, {...ride, id: Date.now()}])
        setRide({
            number: '',
            date: '',
            price: '',
            car: '',
            driver: ''
        })
    }
    return (
    <div className="App">
        <form>
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
            <MyButton onClick={addNewRide}>Добавить поездку</MyButton>
        </form>
        <RideList orders={rides} title="Список постов"/>
    </div>
    );
}

export default App;
