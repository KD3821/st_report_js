import React from 'react';
import RideItem from "./RideItem";

const RideList = ({orders, title, remove}) => {
    if (!orders.length) {
        return (
            <h2 style={{ textAlign: 'center', color: 'red'}}>
                Поездки не найдены!
            </h2>
        )
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center'}}>
                {title}:
            </h2>
            {orders.map((xride, index) =>
                <RideItem remove={remove} list_id={index + 1} iride={xride} key={xride.id}/>
            )}
        </div>
    );
};

export default RideList;