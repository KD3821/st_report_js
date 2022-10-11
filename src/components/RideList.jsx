import React from 'react';
import RideItem from "./RideItem";

const RideList = ({orders, title}) => {
    return (
        <div>
            <h3 style={{ textAlign: 'center'}}>
                {title}:
            </h3>
            {orders.map( (xride, index) =>
                <RideItem id={index + 1} iride={xride} key={xride.id}/>
            )}
        </div>
    );
};

export default RideList;