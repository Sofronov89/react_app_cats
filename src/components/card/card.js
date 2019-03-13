import React from "react";
import {Button} from "../button/Button";
import {Stuffing} from "./component-card/stuffing";
import "./card.scss";

export default class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card_text">
                    <p>Сказочное заморское явство</p>
                    <h1>Нямушка</h1>
                    <Stuffing
                        stuff={"с курой"}
                    />
                    <p className="description">
                        100 порций 5 мышей в подарок
                        заказчик доволен
                    </p>
                </div>
                <div className="circle">
                    <p className="mass">0,5</p>
                    <p>кг</p>
                </div>
                <div className="footer">
                    <p>Чего сидишь? Порадуй котэ, </p>
                    < Button
                        className={"#"}
                        value={"купи."}
                        href={"#"}
                    />
                </div>
            </div>
        )
    };
}