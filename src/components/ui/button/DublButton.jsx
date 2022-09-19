import React from 'react';
import { useContext } from 'react';
import { BasketUser } from '../../../context/context';
import { FurnityreItem } from "../../../context/context";
import classes from "./DublButton.module.css";

const DublButton = (props) => {

    const basket = useContext(BasketUser);
 
    function choose(p) {
        const response = document.getElementById(p);
        response.classList.add(classes.active);
        const res = response.getElementsByTagName('button');
        res[0].classList.add(classes.of);
        res[1].classList.remove(classes.of);
        

        let result = FurnityreItem._currentValue.find(function (item, index, array) {
            return item.id === p;
        });
        basket.push(result);
    }


    function changedMyMind(p) {
        const response = document.getElementById(p);       
        response.classList.remove(classes.active);
        const res = response.getElementsByTagName('button');
        res[1].classList.add(classes.of);
        res[0].classList.remove(classes.of);
        console.log(basket);
        let result = basket.findIndex(item => item.id === p);
        basket.splice(result, 1);
    }  

    return (
        <div>
            <button style={{ background: "rgb(236, 140, 193)"}} onClick={() => choose(props.num)} className={classes.stocks_sale_button} > в корзину</button>
            <button style={{ background: "rgb(156, 236, 140)" }} onClick={() => changedMyMind(props.num)} className={[classes.stocks_sale_button, classes.of].join(' ')} > передумал</button>

        </div>
    );
};

export default DublButton;