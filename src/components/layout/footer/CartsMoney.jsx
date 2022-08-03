import React from 'react';
import visa from "../../../img/visa.png";
import sber from "../../../img/sber.svg";
import qiwi from "../../../img/qiwi.svg";
import money from "../../../img/ymoney.png";

const CartsMoney = () => {
    return (
        <div className="carts_money">
            <h3>Мы принимаем к оплате</h3>
            <div className="carts_icon">
                <img src={visa} alt="ups" />
                <img src={sber} alt="ups" />
                <img src={qiwi} alt="ups" />
                <img src={money} alt="ups" />
            </div>

        </div>
    );
};

export default CartsMoney;