import React, {useState, useMemo, useEffect} from 'react';
import './styles/App.css';
import RideList from "./components/RideList";
import RideForm from "./components/RideForm";
import RideFilter from "./components/RideFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {useRides} from "./hooks/useRides";
import RideService from "./API/RideService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPageCount, getPagesArray} from "./utils/pages";

function App() {
    const [rides, setRides] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const sortedAndSearchedRides = useRides(rides, filter.sort, filter.query);
    let pagesArray = getPagesArray(totalPages)

    const [fetchRides, isRideListLoading, rideError] = useFetching( async () => {
        const response = await RideService.getAll();
        setRides(response.data.results);
        const totalCount = response.data.count;
        setTotalPages(getPageCount(totalCount, limit));
        setNextPage(response.data.next);
        setPrevPage(response.data.prev);
    })


    useEffect( () => {
        fetchRides();
    }, [])

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
            {rideError &&
                <h4 style={{display: 'flex', justifyContent: 'center'}}>Произошла ошибка ${rideError}</h4>
            }
            {isRideListLoading
                ? <div style={{display: 'flex', justifyContent: 'center'}}><Loader/></div>
                : <RideList remove={removeRide} orders={sortedAndSearchedRides} title="Список поездок"/>
            }
            <div className="page__wrapper">
                <span className="page">PREV</span>
                {pagesArray.map(p =>
                    <span
                        onClick={ () => setPage(p) }
                        key={p}
                        className={page === p ? 'page page__current' : 'page'}
                    >
                        {p}
                    </span>
                )}
                <span className="page">NEXT</span>
            </div>
        </div>
    );
}

export default App;
