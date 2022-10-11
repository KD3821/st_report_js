import React from "react";


const RideItem = (props) => {
    console.log(props);
    return (
        <div className="ride">
            <div className="ride__info">
                <strong>{props.id}. {props.iride.number} | {props.iride.date} | {props.iride.price} руб.</strong>
                <div>
                    {props.iride.car} - {props.iride.driver}
                </div>
            </div>
            <div className="ride__btns">
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default RideItem;