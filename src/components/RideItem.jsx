import React from "react";
import MyButton from "./UI/button/MyButton";


const RideItem = (props) => {
    return (
        <div className="ride">
            <div className="ride__info">
                <strong>{props.list_id}. (ID {props.iride.id})  № {props.iride.number} | {props.iride.shift.date} | {props.iride.price} руб.  {props.iride.cash ? '(Наличные)' : ''}</strong>
                <div>
                    {props.iride.car} - {props.iride.driver}
                </div>
                <p>Чаевые: {props.iride.tip} руб. |  ЗСД: {props.iride.toll} руб. | Смена: { props.iride.save_tax ? 'Да' : 'Нет'} | Доп.комиссия: { props.iride.extra_tax.mode}</p>
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