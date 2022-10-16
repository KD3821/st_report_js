import React from 'react';
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const RideFilter = ({filter, setFilter} ) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange = {e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск"
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировать по"
                options={[
                    {value: 'driver', name: 'По водителю'},
                    {value: 'car', name: 'По авто'},
                    {value: 'date', name: 'По дате'} // не работает сортировка по дате
                ]}
            />
        </div>
    );
};

export default RideFilter;