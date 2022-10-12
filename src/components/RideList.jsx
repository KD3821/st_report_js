import React from 'react';
import RideItem from "./RideItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";

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
            <TransitionGroup>
                {orders.map((xride, index) =>
                    <CSSTransition
                        key={xride.id}
                        timeout={500}
                        classNames="ride"
                    >
                    <RideItem remove={remove} list_id={index + 1} iride={xride} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default RideList;