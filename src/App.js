import React, {useState} from 'react';
import './styles/App.css';
import RideItem from "./components/RideItem";
import RideList from "./components/RideList";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [rides, setRides] = useState([
        {id: 1, number: '0001', date: '2022-08-07', price: 1090, car: 'M129KH198', driver: 'Дементьев'},
        {id: 2, number: '0002', date: '2022-08-07', price: 1500, car: 'E212HB198', driver: 'Павлюченков'},
        {id: 3, number: '0003', date: '2022-08-07', price: 890, car: 'E975MK198', driver: 'Шевнин'},
    ])


    return (
    <div className="App">
        <form>
            <input type="text" placeholder="Дата"/>
            <input type="text" placeholder="Водитель"/>
            <input type="text" placeholder="Авто"/>
            <MyButton>Добавить поездку</MyButton>
        </form>
        <RideList rides={rides} title="Список постов 1"/>
    </div>
    );
}

export default App;
