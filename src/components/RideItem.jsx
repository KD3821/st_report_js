import React from "react";


const RideItem = (props) => {
    console.log(props);
    return (
        <div className="ride">
            <div className="ride__info">
                <strong>{props.ride.id}. {props.ride.number} | {props.ride.date} | {props.ride.price} руб.</strong>
                <div>
                    {props.ride.car} - {props.ride.driver}
                </div>
            </div>
            <div className="ride__btns">
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default RideItem;