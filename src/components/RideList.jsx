import React from 'react';
import RideItem from "./RideItem";

const RideList = ({rides, title}) => {
    return (
        <div>
            <h3 style={{ textAlign: 'center'}}>
                {title}:
            </h3>
            {rides.map(ride =>
                <RideItem ride={ride} key={ride.id}/>
            )}
        </div>
    );
};

export default RideList;