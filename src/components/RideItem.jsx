import React from "react";
import MyButton from "./UI/button/MyButton";


const RideItem = (props) => {
    return (
        <div className="ride">
            <div className="ride__info">
                <strong>{props.list_id}. {props.iride.number} | {props.iride.date} | {props.iride.price} руб.</strong>
                <div>
                    {props.iride.car} - {props.iride.driver}
                </div>
            </div>
            <div className="ride__btns">
                <MyButton onClick={() => props.remove(props.iride)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    )
}

export default RideItem;