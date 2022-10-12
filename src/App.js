import React, {useState, useMemo} from 'react';
import './styles/App.css';
import RideList from "./components/RideList";
import RideForm from "./components/RideForm";
import RideFilter from "./components/RideFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [rides, setRides] = useState([
        { id: 1, number: '0001', date: '2022-08-07', price: 1090, car: 'M129KH198', driver: 'Дементьев'},
        { id: 2, number: '0002', date: '2022-08-07', price: 1500, car: 'E212HB198', driver: 'Павлюченков'},
        { id: 3, number: '0003', date: '2022-08-07', price: 890, car: 'E975MK198', driver: 'Шевнин'},
    ])

    const [filter, setFilter] = useState({ sort: '', query: ''})
    const [modal, setModal] = useState(false);

    const sortedRides = useMemo( () => {
        console.log('работает сортировка')
        if(filter.sort) {
            return [...rides].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return rides;
    }, [filter.sort, rides])

    const sortedAndSearchedRides = useMemo( () => {
        console.log('работает поиск')
        return sortedRides.filter(ride => ride.driver.toLowerCase().includes(filter.query))
    }, [filter.query, sortedRides])

    const createRide = (newRide) => {
        setRides([...rides, newRide])
        setModal(false)
    }
    const removeRide = (ride) => {
        setRides(rides.filter(r => r.id !== ride.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать поездку
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <RideForm create={createRide}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <RideFilter
                filter={filter}
                setFilter={setFilter}
            />
            <hr style={{margin: '15px 0'}}/>
            <RideList remove={removeRide} orders={sortedAndSearchedRides} title="Список поездок"/>
        </div>
    );
}

export default App;
