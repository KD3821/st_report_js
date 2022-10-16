import React from "react";
import MyButton from "../UI/button/MyButton";
import {useNavigate} from 'react-router-dom';


const RideItem = (props) => {
    const navigate = useNavigate();
    console.log(navigate);

    return (
        <div className="ride">
            <div className="ride__info">
                <strong>ID {props.iride.id} | № {props.iride.number} | {props.iride.shift.date} | {props.iride.price} руб.  {props.iride.cash ? '(Наличные)' : ''}</strong>
                <div>
                    {props.iride.car} - {props.iride.driver}
                </div>
                <p>Чаевые: {props.iride.tip} руб. |  ЗСД: {props.iride.toll} руб. | Смена: { props.iride.save_tax ? 'Да' : 'Нет'} | Доп.комиссия: { props.iride.extra_tax.mode}</p>
            </div>
            <div className="ride__btns">
                <MyButton onClick={() => navigate(`/rides/${props.iride.id}`)}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.iride)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    )
}

export default RideItem;