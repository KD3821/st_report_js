import {useMemo} from 'react';

export const useSortedRides = (rides, sort) => {
    const sortedRides = useMemo( () => {
        console.log('работает сортировка')
        if(sort) {
            return [...rides].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return rides;
    }, [sort, rides])

    return sortedRides;
}

export const useRides = (rides, sort, query) => {
    const sortedRides = useSortedRides(rides, sort);
    const sortedAndSearchedRides = useMemo( () => {
        console.log('работает поиск')
        return sortedRides.filter(ride => ride.driver.toLowerCase().includes(query))
    }, [query, sortedRides])

    return sortedAndSearchedRides;
}
