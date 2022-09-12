import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { InfoForBuyers } from '../../../context/context';

const InfoFor = () => {
    const arr =  useContext(InfoForBuyers);

    return (
        <div className="info_for">
            <h3>Информация для покупателей</h3>
            <Link to="/info" state={{ from: arr[0] }} >Как заказать</Link>
            <Link to="/info" state={{ from: arr[1] }}>Гарантия</Link>
            <Link to="/info" state={{ from: arr[2] }}>Инструкция по эксплуатации</Link>
            <Link to = "/reviews" ><span>Отзывы</span> </Link>
            <Link to="/info" state={{ from: arr[3] }}>Оптовикам</Link>
            <Link to="/info" state={{ from: arr[4] }}>Вакансии</Link>
        </div>
    );
};

export default InfoFor;